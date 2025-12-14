// server/api/blog/posts/[id].delete.js
import { connectToDatabase } from '../../utils/mongodb.js'
import { ObjectId } from 'mongodb'

export default defineEventHandler(async (event) => {
  try {
    const { id } = event.context.params
    
    // Validate ID
    if (!id || !ObjectId.isValid(id)) {
      throw createError({
        statusCode: 400,
        statusMessage: 'Invalid post ID'
      })
    }
    
    const { db } = await connectToDatabase()
    const collection = db.collection('feed-blogs')
    
    // Attempt to delete the post
    const result = await collection.deleteOne({ 
      _id: new ObjectId(id) 
    })
    
    if (result.deletedCount === 0) {
      throw createError({
        statusCode: 404,
        statusMessage: 'Post not found or already deleted'
      })
    }
    
    return {
      success: true,
      message: 'Post deleted successfully',
      deletedId: id,
      deletedCount: result.deletedCount
    }
    
  } catch (error) {
    console.error('❌ Error deleting post:', error)
    
    // Pass through HTTP errors
    if (error.statusCode === 400 || error.statusCode === 404) {
      throw error
    }
    
    throw createError({
      statusCode: 500,
      statusMessage: 'Failed to delete post: ' + error.message
    })
  }
})