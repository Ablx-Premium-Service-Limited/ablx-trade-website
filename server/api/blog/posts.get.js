// server/api/blog/posts.get.js
import { connectToDatabase, serializeDocument } from '../../utils/mongodb.js'

export default defineEventHandler(async (event) => {
  console.log('📝 GET /api/blog/posts - Starting')
  
  try {
    // Get query parameters
    const query = getQuery(event)
    console.log('🔍 Query parameters:', query)
    
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
    
    // Connect to MongoDB
    console.log('🔌 Connecting to MongoDB...')
    const { db } = await connectToDatabase()
    console.log('✅ Connected to database:', db.databaseName)
    
    const collection = db.collection('feed-blogs')
    
    // Build filter - start with empty
    const filter = {}
    console.log('🔄 Building filter...')
    
    // Debug: First, let's see what's in the collection
    const totalAll = await collection.countDocuments({})
    console.log(`📊 Total documents in collection: ${totalAll}`)
    
    // Build filter based on query
    if (status && status !== 'all') {
      filter.status = status
      console.log(`🔍 Filter by status: ${status}`)
    } else {
      // Default: show both published and draft
      console.log('🔍 No status filter - showing all')
    }
    
    if (tag) {
      filter.tags = tag
      console.log(`🔍 Filter by tag: ${tag}`)
    }
    
    if (author) {
      filter['author.name'] = author
      console.log(`🔍 Filter by author: ${author}`)
    }
    
    // Search functionality
    if (search) {
      filter.$or = [
        { title: { $regex: search, $options: 'i' } },
        { excerpt: { $regex: search, $options: 'i' } },
        { content: { $regex: search, $options: 'i' } }
      ]
      console.log(`🔍 Search for: ${search}`)
    }
    
    console.log('🎯 Final filter:', JSON.stringify(filter, null, 2))
    
    // Count with filter
    const total = await collection.countDocuments(filter)
    console.log(`📊 Documents matching filter: ${total}`)
    
    // If no documents found, check what's actually in the collection
    if (total === 0) {
      const allDocs = await collection.find({}).limit(5).toArray()
      console.log('⚠️ No documents found with filter. Sample of all docs:', 
        allDocs.map(d => ({
          id: d._id.toString(),
          title: d.title || 'No title',
          status: d.status || 'No status',
          tags: d.tags || []
        }))
      )
    }
    
    // Calculate pagination
    const skip = (parseInt(page) - 1) * parseInt(limit)
    const sortDirection = sortOrder === 'asc' ? 1 : -1
    const sortOptions = { [sortBy]: sortDirection }
    
    console.log(`📄 Pagination: page=${page}, limit=${limit}, skip=${skip}`)
    console.log(`🔀 Sort: ${sortBy} ${sortOrder}`)
    
    // Fetch posts
    console.log('⏳ Fetching posts from MongoDB...')
    const posts = await collection
      .find(filter)
      .sort(sortOptions)
      .skip(skip)
      .limit(parseInt(limit))
      .toArray()
    
    console.log(`✅ Fetched ${posts.length} posts`)
    
    // Get unique tags
    const allTags = await collection.distinct('tags')
    console.log(`🏷️ Unique tags: ${allTags.filter(t => t).length} tags found`)
    
    // Serialize documents
    const serializedPosts = posts.map(post => serializeDocument(post))
    
    const response = {
      success: true,
      posts: serializedPosts,
      pagination: {
        total,
        page: parseInt(page),
        limit: parseInt(limit),
        pages: Math.ceil(total / parseInt(limit))
      },
      filters: {
        availableTags: allTags.filter(t => t).sort(),
        appliedFilters: { status, tag, author, search }
      },
    }
    
    console.log('🎉 Response ready, returning', response.posts.length, 'posts')
    return response
    
  } catch (error) {
    console.error('❌ Error in /api/blog/posts:', error)
    
    // Detailed error for debugging
    return createError({
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