import { isUuid, throwSupabaseError } from '../../utils/blogPosts.js'

export default defineEventHandler(async (event) => {
  try {
    assertSameOrigin(event)
    requireAdmin(event)

    const { id } = event.context.params

    if (!id || !isUuid(id)) {
      throw createError({
        statusCode: 400,
        statusMessage: 'Invalid post ID'
      })
    }

    const supabase = getSupabaseAdmin()
    const { data, error } = await supabase
      .from('blog_posts')
      .delete()
      .eq('id', id)
      .select('id')

    if (error) throwSupabaseError(error, 'Failed to delete post')

    if (!data || data.length === 0) {
      throw createError({
        statusCode: 404,
        statusMessage: 'Post not found or already deleted'
      })
    }

    return {
      success: true,
      message: 'Post deleted successfully',
      deletedId: id,
      deletedCount: data.length
    }
  } catch (error) {
    if (error.statusCode) throw error

    console.error('Error deleting post:', error)
    throw createError({
      statusCode: 500,
      statusMessage: 'Failed to delete post: ' + error.message
    })
  }
})
