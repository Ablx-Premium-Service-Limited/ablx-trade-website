import { titleToSlug, blogMetaDescription } from '#blog-slug'

const UUID_RE =
  /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i

const SORT_COLUMNS = {
  createdAt: 'created_at',
  updatedAt: 'updated_at',
  title: 'title',
  views: 'views',
  status: 'status'
}

export function isUuid(value) {
  return typeof value === 'string' && UUID_RE.test(value)
}

export function serializeBlogPost(row) {
  if (!row) return row

  const serialized = {
    id: row.id,
    title: row.title || '',
    slug: row.slug || titleToSlug(row.title || ''),
    content: row.content || '',
    excerpt: row.excerpt || '',
    description: row.description || '',
    coverImage: row.cover_image || '',
    status: row.status || 'draft',
    tags: Array.isArray(row.tags) ? row.tags : [],
    author: {
      name: row.author_name || '',
      photo: row.author_photo || ''
    },
    category: row.category || null,
    views: row.views || 0,
    createdAt: row.created_at,
    updatedAt: row.updated_at
  }

  serialized.metaDescription = blogMetaDescription(serialized)
  return serialized
}

export function toDbPost(post, { forInsert = false } = {}) {
  const title = post.title != null ? String(post.title).trim() : ''
  const slug = post.slug ? String(post.slug) : titleToSlug(title)
  const author = post.author && typeof post.author === 'object' ? post.author : {}

  const row = {
    title,
    slug,
    content: post.content != null ? String(post.content) : '',
    excerpt: post.excerpt != null ? String(post.excerpt) : '',
    description:
      post.description != null
        ? String(post.description)
        : post.metaDescription != null
          ? String(post.metaDescription)
          : '',
    cover_image: post.coverImage || post.cover_image || null,
    status: post.status === 'published' ? 'published' : 'draft',
    tags: Array.isArray(post.tags) ? post.tags.map(String) : [],
    author_name: author.name || post.author_name || null,
    author_photo: author.photo || post.author_photo || null,
    category: post.category || null
  }

  if (forInsert && post.createdAt) {
    row.created_at = post.createdAt
  }

  return row
}

export function resolveSort(sortBy = 'createdAt', sortOrder = 'desc') {
  const column = SORT_COLUMNS[sortBy] || 'created_at'
  const ascending = String(sortOrder).toLowerCase() === 'asc'
  return { column, ascending }
}

export function throwSupabaseError(error, fallbackMessage) {
  if (!error) return

  if (error.code === '23505') {
    throw createError({
      statusCode: 400,
      statusMessage: 'Duplicate post found'
    })
  }

  throw createError({
    statusCode: 500,
    statusMessage: `${fallbackMessage}: ${error.message}`
  })
}
