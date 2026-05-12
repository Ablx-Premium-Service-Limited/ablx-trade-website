// server/api/blog/[id].get.js — segment is slug (title-based) or legacy MongoDB ObjectId
import { connectToDatabase, serializeDocument } from '../../utils/mongodb.js'
import { ObjectId } from 'mongodb'
import { titleToSlug } from '#blog-slug'

export default defineEventHandler(async (event) => {
  console.log('📝 GET /api/blog/[id] - Starting')
  
  try {
    const { id: segment } = event.context.params
    const id = segment ? decodeURIComponent(segment) : ''
    console.log('🔍 Requested post segment:', id)
    
    if (!id || typeof id !== 'string') {
      throw createError({
        statusCode: 400,
        statusMessage: 'Invalid blog URL'
      })
    }
    
    // Connect to MongoDB
    console.log('🔌 Connecting to MongoDB...')
    const { db } = await connectToDatabase()
    console.log('✅ Connected to database:', db.databaseName)
    
    const collection = db.collection('feed-blogs')
    
    console.log('⏳ Fetching post from MongoDB...')
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
      console.error('❌ Post not found for segment:', id)
      throw createError({
        statusCode: 404,
        statusMessage: 'Blog post not found'
      })
    }

    objectId = post._id
    
    console.log('✅ Post found:', post.title || 'Untitled')
    
    // Increment view count (async, don't wait for response)
    collection.updateOne(
      { _id: objectId },
      { $inc: { views: 1 } }
    ).then(() => {
      console.log('👁️ View count incremented for post:', objectId.toString())
    }).catch(err => {
      console.error('⚠️ Failed to increment view count:', err.message)
    })
    
    // Get related posts (same category or tags)
    let relatedPosts = []
    try {
      relatedPosts = await getRelatedPosts(collection, post, post._id)
      console.log(`🔗 Found ${relatedPosts.length} related posts`)
    } catch (error) {
      console.error('⚠️ Error fetching related posts:', error.message)
      // Continue without related posts if there's an error
    }
    
    // Serialize the document
    const serializedPost = serializeDocument(post)
    
    const response = {
      success: true,
      post: serializedPost,
      relatedPosts,
      metadata: {
        fetchedAt: new Date().toISOString(),
        postId: objectId.toString(),
        hasRelatedPosts: relatedPosts.length > 0
      }
    }
    
    console.log('🎉 Returning post data')
    return response
    
  } catch (error) {
    console.error('❌ Error fetching single blog post:', error)
    
    // Pass through HTTP errors
    if (error.statusCode === 400 || error.statusCode === 404) {
      throw error
    }
    
    // Return generic error for server issues
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

// Helper function to get related posts
async function getRelatedPosts(collection, currentPost, currentPostId) {
  const relatedCriteria = []
  
  // If post has a category, find posts in same category
  if (currentPost.category) {
    relatedCriteria.push({ category: currentPost.category })
  }
  
  // If post has tags, find posts with matching tags
  if (currentPost.tags && currentPost.tags.length > 0) {
    relatedCriteria.push({ tags: { $in: currentPost.tags } })
  }
  
  // If no criteria, return empty array
  if (relatedCriteria.length === 0) {
    return []
  }
  
  // Build the query
  const relatedQuery = {
    $and: [
      { _id: { $ne: currentPostId } }, // Exclude current post
      { status: 'published' }, // Only published posts
      { $or: relatedCriteria } // Match any of the criteria
    ]
  }
  
  // Fetch related posts
  const related = await collection
    .find(relatedQuery)
    .sort({ createdAt: -1 }) // Newest first
    .limit(4) // Limit to 4 related posts
    .toArray()
  
  // Serialize related posts
  return related.map(post => serializeDocument(post))
}