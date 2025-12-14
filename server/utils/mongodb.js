// server/utils/mongodb.js
import { MongoClient, ObjectId } from 'mongodb'

let cachedClient = null
let cachedDb = null

export async function connectToDatabase() {
  if (cachedClient && cachedDb) {
    return { client: cachedClient, db: cachedDb }
  }

  const config = useRuntimeConfig()
  const uri = config.mongodbUri
  
  if (!uri) {
    throw new Error('MONGODB_URI environment variable is not defined')
  }

  const client = new MongoClient(uri)

  try {
    await client.connect()
    console.log('✅ Connected to MongoDB successfully')
    
    const db = client.db('blogs') // Your database name
    
    cachedClient = client
    cachedDb = db
    
    return { client, db }
  } catch (error) {
    console.error('❌ MongoDB connection error:', error)
    throw error
  }
}

// Helper function to serialize MongoDB document
export function serializeDocument(doc) {
  if (!doc) return doc
  
  const { _id, ...rest } = doc
  return { 
    id: _id ? _id.toString() : null,
    ...rest
  }
}