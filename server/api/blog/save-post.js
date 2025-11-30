import fs from 'fs/promises'
import path from 'path'
import { fileURLToPath } from 'url'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const { posts } = body

  try {
    // Get current directory in ES modules
    const __filename = fileURLToPath(import.meta.url)
    const __dirname = path.dirname(__filename)
    
    // Path to public blog folder
    const blogDir = path.join(process.cwd(), 'public', 'blog')
    const filePath = path.join(blogDir, 'posts.json')
    
    // Ensure blog directory exists
    await fs.mkdir(blogDir, { recursive: true })
    
    // Write posts to JSON file
    const data = {
      posts: posts,
      lastUpdated: new Date().toISOString(),
      totalPosts: posts.length
    }
    
    await fs.writeFile(filePath, JSON.stringify(data, null, 2), 'utf8')
    
    return {
      success: true,
      message: 'Blog posts saved successfully',
      totalPosts: posts.length
    }
  } catch (error) {
    console.error('Error saving blog posts:', error)
    throw createError({
      statusCode: 500,
      statusMessage: 'Failed to save blog posts'
    })
  }
})