// server/api/blog/save-post.js
import { connectToDatabase } from '~/server/utils/mongodb.js'
import { ObjectId } from 'mongodb'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const { posts, action = 'saveAll' } = body // action: 'saveAll', 'upsert', 'updateOne'

  try {
    // Validate input
    if (!posts || !Array.isArray(posts)) {
      throw createError({
        statusCode: 400,
        statusMessage: 'Invalid posts data: posts must be an array'
      })
    }

    const { db } = await connectToDatabase()
    const collection = db.collection('feed-blogs')
    
    let result
    
    // Choose operation based on action
    switch (action) {
      case 'saveAll': // Replace all posts (your original behavior)
        result = await handleSaveAll(collection, posts)
        break
        
      case 'upsert': // Update existing, insert new
        result = await handleUpsert(collection, posts)
        break
        
      case 'updateOne': // Update single post
        if (posts.length !== 1) {
          throw createError({
            statusCode: 400,
            statusMessage: 'For updateOne action, only one post should be provided'
          })
        }
        result = await handleUpdateOne(collection, posts[0])
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
    console.error('Error saving/updating blog posts:', error)
    
    // Handle specific MongoDB errors
    if (error.code === 11000) {
      throw createError({
        statusCode: 400,
        statusMessage: 'Duplicate post found'
      })
    }
    
    // Pass through HTTP errors
    if (error.statusCode) {
      throw error
    }
    
    throw createError({
      statusCode: 500,
      statusMessage: 'Failed to save/update blog posts: ' + error.message
    })
  }
})

// Helper function 1: Replace all posts
async function handleSaveAll(collection, posts) {
  // Prepare posts
  const postsToSave = posts.map(preparePostForSave)
  
  // Delete all existing posts
  await collection.deleteMany({})
  
  // Insert new posts
  const insertResult = await collection.insertMany(postsToSave)
  
  return {
    message: 'All blog posts replaced successfully',
    data: {
      totalPosts: insertResult.insertedCount,
      insertedIds: Object.values(insertResult.insertedIds || {}).map(id => id.toString()),
      action: 'saveAll'
    }
  }
}

// Helper function 2: Upsert (update existing, insert new)
async function handleUpsert(collection, posts) {
  const operations = posts.map(post => {
    const preparedPost = preparePostForSave(post)
    const { _id, ...postData } = preparedPost
    
    // Determine filter: use _id if exists, otherwise use slug
    let filter = {}
    if (_id) {
      filter._id = _id
    } else if (post.slug) {
      filter.slug = post.slug
    } else {
      // Generate a filter for upsert
      filter._id = new ObjectId()
    }
    
    return {
      updateOne: {
        filter,
        update: {
          $set: postData,
          $setOnInsert: {
            createdAt: new Date()
          }
        },
        upsert: true
      }
    }
  })
  
  const bulkResult = await collection.bulkWrite(operations, { ordered: false })
  
  return {
    message: 'Posts updated/inserted successfully',
    data: {
      matchedCount: bulkResult.matchedCount,
      modifiedCount: bulkResult.modifiedCount,
      upsertedCount: bulkResult.upsertedCount,
      upsertedIds: Object.values(bulkResult.upsertedIds || {}).map(id => id.toString()),
      action: 'upsert'
    }
  }
}

// Helper function 3: Update single post
async function handleUpdateOne(collection, post) {
  const { id, ...postData } = post
  
  // Validate post ID
  if (!id || !ObjectId.isValid(id)) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Valid post ID is required for update'
    })
  }
  
  // Prepare update data
  const updateData = {
    ...postData,
    updatedAt: new Date()
  }
  
  // Convert date strings to Date objects if needed
  if (postData.createdAt) {
    updateData.createdAt = new Date(postData.createdAt)
  }
  
  // Perform update
  const updateResult = await collection.updateOne(
    { _id: new ObjectId(id) },
    { $set: updateData }
  )
  
  if (updateResult.matchedCount === 0) {
    throw createError({
      statusCode: 404,
      statusMessage: 'Post not found'
    })
  }
  
  return {
    message: 'Post updated successfully',
    data: {
      postId: id,
      modifiedCount: updateResult.modifiedCount,
      matchedCount: updateResult.matchedCount,
      action: 'updateOne'
    }
  }
}

// Helper function to prepare post data
function preparePostForSave(post) {
  const { id, ...postData } = post

  delete postData.createdAt;
  delete postData.updatedAt;
  
  // Prepare the post object
  const preparedPost = {
    ...postData,
  }
  
  // Add _id if valid ObjectId is provided
  if (id && ObjectId.isValid(id)) {
    preparedPost._id = new ObjectId(id)
  }
  
  return preparedPost
}