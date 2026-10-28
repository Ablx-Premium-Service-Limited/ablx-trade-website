import {
  serializeBlogPost,
  resolveSort,
  throwSupabaseError
} from '../../utils/blogPosts.js'

export default defineEventHandler(async (event) => {
  try {
    const query = getQuery(event)
    const {
      limit = 10,
      page = 1,
      status,
      tag,
      author,
      sortBy = 'createdAt',
      sortOrder = 'desc',
      search
    } = query

    const isPublicList = status === 'published'
    if (!isPublicList) {
      requireAdmin(event)
    }

    const supabase = getSupabaseAdmin()
    const pageNum = Math.max(1, parseInt(page, 10) || 1)
    const limitNum = Math.max(1, Math.min(100, parseInt(limit, 10) || 10))
    const from = (pageNum - 1) * limitNum
    const to = from + limitNum - 1
    const { column, ascending } = resolveSort(sortBy, sortOrder)

    let dbQuery = supabase
      .from('blog_posts')
      .select('*', { count: 'exact' })

    if (status && status !== 'all') {
      dbQuery = dbQuery.eq('status', status)
    } else if (isPublicList) {
      dbQuery = dbQuery.eq('status', 'published')
    }

    if (tag) {
      dbQuery = dbQuery.contains('tags', [String(tag)])
    }

    if (author) {
      dbQuery = dbQuery.eq('author_name', String(author))
    }

    if (search) {
      const term = String(search).replace(/[%_,]/g, ' ').trim()
      if (term) {
        dbQuery = dbQuery.or(
          `title.ilike.%${term}%,description.ilike.%${term}%,excerpt.ilike.%${term}%,content.ilike.%${term}%`
        )
      }
    }

    const { data, error, count } = await dbQuery
      .order(column, { ascending })
      .range(from, to)

    if (error) throwSupabaseError(error, 'Failed to retrieve blog posts')

    const { data: tagRows, error: tagError } = await supabase
      .from('blog_posts')
      .select('tags')

    if (tagError) throwSupabaseError(tagError, 'Failed to load tags')

    const availableTags = [
      ...new Set(
        (tagRows || []).flatMap((row) =>
          Array.isArray(row.tags) ? row.tags.filter(Boolean) : []
        )
      )
    ].sort()

    const total = count || 0

    return {
      success: true,
      posts: (data || []).map(serializeBlogPost),
      pagination: {
        total,
        page: pageNum,
        limit: limitNum,
        pages: Math.ceil(total / limitNum) || 0
      },
      filters: {
        availableTags,
        appliedFilters: { status, tag, author, search }
      }
    }
  } catch (error) {
    if (error.statusCode) throw error

    console.error('Error in /api/blog/posts:', error)
    throw createError({
      statusCode: 500,
      statusMessage: 'Failed to retrieve blog posts',
      data: {
        error: error.message,
        timestamp: new Date().toISOString()
      }
    })
  }
})
