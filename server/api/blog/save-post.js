import {
  toDbPost,
  isUuid,
  throwSupabaseError
} from '../../utils/blogPosts.js'

export default defineEventHandler(async (event) => {
  assertSameOrigin(event)
  requireAdmin(event)

  const body = await readBody(event)
  const { posts, action = 'saveAll' } = body || {}

  try {
    if (!posts || !Array.isArray(posts)) {
      throw createError({
        statusCode: 400,
        statusMessage: 'Invalid posts data: posts must be an array'
      })
    }

    const supabase = getSupabaseAdmin()
    let result

    switch (action) {
      case 'saveAll':
        result = await handleSaveAll(supabase, posts)
        break
      case 'upsert':
        result = await handleUpsert(supabase, posts)
        break
      case 'updateOne':
        if (posts.length !== 1) {
          throw createError({
            statusCode: 400,
            statusMessage: 'For updateOne action, only one post should be provided'
          })
        }
        result = await handleUpdateOne(supabase, posts[0])
        break
      default:
        throw createError({
          statusCode: 400,
          statusMessage: `Invalid action: ${action}. Use 'saveAll', 'upsert', or 'updateOne'`
        })
    }

    return {
      success: true,
      message: result.message,
      ...result.data
    }
  } catch (error) {
    if (error.statusCode) throw error

    console.error('Error saving/updating blog posts:', error)
    throw createError({
      statusCode: 500,
      statusMessage: 'Failed to save/update blog posts: ' + error.message
    })
  }
})

async function handleSaveAll(supabase, posts) {
  const rows = posts.map((post) => toDbPost(post, { forInsert: true }))

  const { error: deleteError } = await supabase
    .from('blog_posts')
    .delete()
    .gte('created_at', '1970-01-01')

  if (deleteError) throwSupabaseError(deleteError, 'Failed to clear posts')

  if (rows.length === 0) {
    return {
      message: 'All blog posts replaced successfully',
      data: { totalPosts: 0, insertedIds: [], action: 'saveAll' }
    }
  }

  const { data, error } = await supabase
    .from('blog_posts')
    .insert(rows)
    .select('id')

  if (error) throwSupabaseError(error, 'Failed to save posts')

  return {
    message: 'All blog posts replaced successfully',
    data: {
      totalPosts: data?.length || 0,
      insertedIds: (data || []).map((row) => row.id),
      action: 'saveAll'
    }
  }
}

async function handleUpsert(supabase, posts) {
  const upsertedIds = []
  let matchedCount = 0
  let modifiedCount = 0
  let upsertedCount = 0

  for (const post of posts) {
    const row = toDbPost(post, { forInsert: true })

    if (isUuid(post.id)) {
      const { data, error } = await supabase
        .from('blog_posts')
        .update(row)
        .eq('id', post.id)
        .select('id')

      if (error) throwSupabaseError(error, 'Failed to update post')

      if (data && data.length > 0) {
        matchedCount += 1
        modifiedCount += 1
        upsertedIds.push(data[0].id)
        continue
      }
    }

    // Prefer slug match, otherwise insert
    if (row.slug) {
      const { data: existing, error: findError } = await supabase
        .from('blog_posts')
        .select('id')
        .eq('slug', row.slug)
        .maybeSingle()

      if (findError) throwSupabaseError(findError, 'Failed to look up post')

      if (existing?.id) {
        const { data, error } = await supabase
          .from('blog_posts')
          .update(row)
          .eq('id', existing.id)
          .select('id')

        if (error) throwSupabaseError(error, 'Failed to update post')
        matchedCount += 1
        modifiedCount += 1
        upsertedIds.push(data?.[0]?.id || existing.id)
        continue
      }
    }

    const { data, error } = await supabase
      .from('blog_posts')
      .insert(row)
      .select('id')
      .single()

    if (error) throwSupabaseError(error, 'Failed to create post')
    upsertedCount += 1
    upsertedIds.push(data.id)
  }

  return {
    message: 'Posts updated/inserted successfully',
    data: {
      matchedCount,
      modifiedCount,
      upsertedCount,
      upsertedIds,
      action: 'upsert'
    }
  }
}

async function handleUpdateOne(supabase, post) {
  if (!post?.id || !isUuid(post.id)) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Valid post ID is required for update'
    })
  }

  const row = toDbPost(post)
  const { data, error } = await supabase
    .from('blog_posts')
    .update(row)
    .eq('id', post.id)
    .select('id')

  if (error) throwSupabaseError(error, 'Failed to update post')

  if (!data || data.length === 0) {
    throw createError({
      statusCode: 404,
      statusMessage: 'Post not found'
    })
  }

  return {
    message: 'Post updated successfully',
    data: {
      postId: post.id,
      modifiedCount: 1,
      matchedCount: 1,
      action: 'updateOne'
    }
  }
}
