/**
 * URL slug from title: lowercase, spaces → hyphens, collapse repeats, strip unsafe chars.
 */
export function titleToSlug(title) {
  if (!title || typeof title !== 'string') return ''
  return title
    .trim()
    .toLowerCase()
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '')
}

export function blogPathForPost(post) {
  if (!post) return '/blogs'
  const slug = post.slug || titleToSlug(post.title || '')
  return slug ? `/blogs/${slug}` : '/blogs'
}

/** SEO / listings: explicit description, or post title when description is empty */
export function blogMetaDescription(post) {
  if (!post) return ''
  const desc = post.description != null ? String(post.description).trim() : ''
  if (desc) return desc
  return post.title != null ? String(post.title).trim() : ''
}
