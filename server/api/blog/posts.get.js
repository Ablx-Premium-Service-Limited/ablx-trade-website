// server/api/blog/posts.get.js
import { connectToDatabase, serializeDocument } from '../../utils/mongodb.js'

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

    // Public callers may only list published posts. Drafts / "all" need admin session.
    const isPublicList = status === 'published'
    if (!isPublicList) {
      requireAdmin(event)
    }

    const { db } = await connectToDatabase()
    const collection = db.collection('feed-blogs')

    const filter = {}

    if (status && status !== 'all') {
      filter.status = status
    } else if (isPublicList) {
      filter.status = 'published'
    }

    if (tag) {
      filter.tags = tag
    }

    if (author) {
      filter['author.name'] = author
    }

    if (search) {
      filter.$or = [
        { title: { $regex: search, $options: 'i' } },
        { description: { $regex: search, $options: 'i' } },
        { excerpt: { $regex: search, $options: 'i' } },
        { content: { $regex: search, $options: 'i' } }
      ]
    }

    const total = await collection.countDocuments(filter)
    const skip = (parseInt(page) - 1) * parseInt(limit)
    const sortDirection = sortOrder === 'asc' ? 1 : -1
    const sortOptions = { [sortBy]: sortDirection }

    const posts = await collection
      .find(filter)
      .sort(sortOptions)
      .skip(skip)
      .limit(parseInt(limit))
      .toArray()

    const allTags = await collection.distinct('tags')

    return {
      success: true,
      posts: posts.map((post) => serializeDocument(post)),
      pagination: {
        total,
        page: parseInt(page),
        limit: parseInt(limit),
        pages: Math.ceil(total / parseInt(limit))
      },
      filters: {
        availableTags: allTags.filter((t) => t).sort(),
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
        stack: process.env.NODE_ENV === 'development' ? error.stack : undefined,
        timestamp: new Date().toISOString()
      }
    })
  }
})
