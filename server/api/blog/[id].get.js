import {
  serializeBlogPost,
  isUuid,
  throwSupabaseError
} from '../../utils/blogPosts.js'

export default defineEventHandler(async (event) => {
  try {
    const { id: segment } = event.context.params
    const id = segment ? decodeURIComponent(segment) : ''

    if (!id || typeof id !== 'string') {
      throw createError({
        statusCode: 400,
        statusMessage: 'Invalid blog URL'
      })
    }

    const supabase = getSupabaseAdmin()
    let post = null

    if (isUuid(id)) {
      const { data, error } = await supabase
        .from('blog_posts')
        .select('*')
        .eq('id', id)
        .maybeSingle()
      if (error) throwSupabaseError(error, 'Failed to retrieve blog post')
      post = data
    }

    if (!post) {
      const { data, error } = await supabase
        .from('blog_posts')
        .select('*')
        .eq('slug', id)
        .maybeSingle()
      if (error) throwSupabaseError(error, 'Failed to retrieve blog post')
      post = data
    }

    if (!post) {
      throw createError({
        statusCode: 404,
        statusMessage: 'Blog post not found'
      })
    }

    if (post.status && post.status !== 'published') {
      requireAdmin(event)
    }

    if (post.status === 'published') {
      supabase
        .from('blog_posts')
        .update({ views: (post.views || 0) + 1 })
        .eq('id', post.id)
        .then(() => {})
        .catch(() => {})
    }

    let relatedPosts = []
    try {
      relatedPosts = await getRelatedPosts(supabase, post)
    } catch {
      relatedPosts = []
    }

    return {
      success: true,
      post: serializeBlogPost(post),
      relatedPosts,
      metadata: {
        fetchedAt: new Date().toISOString(),
        postId: post.id,
        hasRelatedPosts: relatedPosts.length > 0
      }
    }
  } catch (error) {
    if (error.statusCode) throw error

    console.error('Error fetching single blog post:', error)
    throw createError({
      statusCode: 500,
      statusMessage: 'Failed to retrieve blog post',
      data: {
        error: process.env.NODE_ENV === 'development' ? error.message : undefined,
        timestamp: new Date().toISOString()
      }
    })
  }
})

async function getRelatedPosts(supabase, currentPost) {
  let query = supabase
    .from('blog_posts')
    .select('*')
    .eq('status', 'published')
    .neq('id', currentPost.id)
    .order('created_at', { ascending: false })
    .limit(4)

  if (currentPost.category) {
    query = query.eq('category', currentPost.category)
  } else if (Array.isArray(currentPost.tags) && currentPost.tags.length > 0) {
    query = query.overlaps('tags', currentPost.tags)
  } else {
    return []
  }

  const { data, error } = await query
  if (error) throw error
  return (data || []).map(serializeBlogPost)
}
