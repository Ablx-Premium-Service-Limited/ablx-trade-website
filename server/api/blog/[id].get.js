// server/api/blog/[id].get.js — segment is slug (title-based) or legacy MongoDB ObjectId
import { connectToDatabase, serializeDocument } from '../../utils/mongodb.js'
import { ObjectId } from 'mongodb'
import { titleToSlug } from '#blog-slug'

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

    const { db } = await connectToDatabase()
    const collection = db.collection('feed-blogs')

    let post = null
    let objectId = null

    if (ObjectId.isValid(id) && String(new ObjectId(id)) === id) {
      objectId = new ObjectId(id)
      post = await collection.findOne({ _id: objectId })
    }

    if (!post) {
      post = await collection.findOne({ slug: id })
    }

    if (!post) {
      const cursor = collection.find({
        $or: [{ slug: { $exists: false } }, { slug: null }, { slug: '' }]
      })
      for await (const doc of cursor) {
        if (titleToSlug(doc.title || '') === id) {
          post = doc
          break
        }
      }
    }

    if (!post) {
      throw createError({
        statusCode: 404,
        statusMessage: 'Blog post not found'
      })
    }

    // Draft / non-published posts are admin-only
    if (post.status && post.status !== 'published') {
      requireAdmin(event)
    }

    objectId = post._id

    // Increment view count only for public published views
    if (post.status === 'published') {
      collection
        .updateOne({ _id: objectId }, { $inc: { views: 1 } })
        .catch(() => {})
    }

    let relatedPosts = []
    try {
      relatedPosts = await getRelatedPosts(collection, post, post._id)
    } catch {
      // Continue without related posts
    }

    return {
      success: true,
      post: serializeDocument(post),
      relatedPosts,
      metadata: {
        fetchedAt: new Date().toISOString(),
        postId: objectId.toString(),
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

async function getRelatedPosts(collection, currentPost, currentPostId) {
  const relatedCriteria = []

  if (currentPost.category) {
    relatedCriteria.push({ category: currentPost.category })
  }

  if (currentPost.tags && currentPost.tags.length > 0) {
    relatedCriteria.push({ tags: { $in: currentPost.tags } })
  }

  if (relatedCriteria.length === 0) {
    return []
  }

  const related = await collection
    .find({
      $and: [
        { _id: { $ne: currentPostId } },
        { status: 'published' },
        { $or: relatedCriteria }
      ]
    })
    .sort({ createdAt: -1 })
    .limit(4)
    .toArray()

  return related.map((post) => serializeDocument(post))
}
