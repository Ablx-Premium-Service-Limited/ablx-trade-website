// server/api/blog/posts/[id].get.js
import { connectToDatabase, serializeDocument } from '../../utils/mongodb.js'
import { ObjectId } from 'mongodb'

export default defineEventHandler(async (event) => {
  console.log('📝 GET /api/blog/posts/[id] - Starting')
  
  try {
    // Get the post ID from URL parameters
    const { id } = event.context.params
    console.log('🔍 Requested post ID:', id)
    
    // Validate the ID format
    if (!id || !ObjectId.isValid(id)) {
      console.error('❌ Invalid post ID format:', id)
      throw createError({
        statusCode: 400,
        statusMessage: 'Invalid post ID format. ID must be a 24-character hex string.'
      })
    }
    
    // Connect to MongoDB
    console.log('🔌 Connecting to MongoDB...')
    const { db } = await connectToDatabase()
    console.log('✅ Connected to database:', db.databaseName)
    
    const collection = db.collection('feed-blogs')
    
    // Convert string ID to MongoDB ObjectId
    const objectId = new ObjectId(id)
    console.log('🎯 Searching for post with _id:', objectId.toString())
    
    // Find the post by ID
    console.log('⏳ Fetching post from MongoDB...')
    const post = await collection.findOne({ _id: objectId })
    
    if (!post) {
      console.error('❌ Post not found with ID:', id)
      throw createError({
        statusCode: 404,
        statusMessage: 'Blog post not found'
      })
    }
    
    console.log('✅ Post found:', post.title || 'Untitled')
    
    // Increment view count (async, don't wait for response)
    collection.updateOne(
      { _id: objectId },
      { $inc: { views: 1 } }
    ).then(() => {
      console.log('👁️ View count incremented for post:', id)
    }).catch(err => {
      console.error('⚠️ Failed to increment view count:', err.message)
    })
    
    // Get related posts (same category or tags)
    let relatedPosts = []
    try {
      relatedPosts = await getRelatedPosts(collection, post, objectId)
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
        postId: id,
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