<template>
    <div>
        <div ref="editorContainer" class="quill-editor-container"></div>
    </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, watch } from 'vue'
import Quill from 'quill'
import 'quill/dist/quill.snow.css'

const props = defineProps({
    modelValue: String,
    placeholder: {
        type: String,
        default: 'Write your blog content here...'
    }
})

const emit = defineEmits(['update:modelValue'])

const editorContainer = ref(null)
let quill = null

// Quill configuration
const modules = {
    toolbar: {
        container: [
            [{ 'header': [1, 2, 3, false] }],
            ['bold', 'italic', 'underline', 'strike'],
            [{ 'list': 'ordered' }, { 'list': 'bullet' }],
            [{ 'indent': '-1' }, { 'indent': '+1' }],
            ['blockquote', 'code-block'],
            ['link', 'image', 'video'],
            [{ 'align': [] }],
            ['clean']
        ],
        handlers: {
            image: imageHandler
        }
    }
}

const formats = [
    'header', 'bold', 'italic', 'underline', 'strike',
    'list', 'bullet', 'indent', 'link', 'image', 'video',
    'blockquote', 'code-block', 'align'
]

// Image handler for Cloudinary upload
async function imageHandler() {
    const input = document.createElement('input')
    input.setAttribute('type', 'file')
    input.setAttribute('accept', 'image/*')
    input.click()

    input.onchange = async () => {
        const file = input.files[0]
        if (file) {
            try {
                // Show loading indicator in editor
                const range = quill.getSelection()
                quill.insertEmbed(range.index, 'image', '/loading.gif')

                const imageUrl = await uploadToCloudinary(file)

                // Replace loading image with actual image
                quill.deleteText(range.index, 1)
                quill.insertEmbed(range.index, 'image', imageUrl)
                quill.setSelection(range.index + 1)
            } catch (error) {
                console.error('Image upload failed:', error)
                quill.deleteText(range.index, 1) // Remove loading image
                alert('Failed to upload image. Please try again.')
            }
        }
    }
}

// Cloudinary upload function
const uploadToCloudinary = async (file) => {
    const formData = new FormData()
    formData.append('file', file)
    formData.append('upload_preset', 'test-preset') // Replace with your preset

    try {
        const response = await fetch(
            `https://api.cloudinary.com/v1_1/campnet/image/upload`, // Replace with your cloud name
            {
                method: 'POST',
                body: formData
            }
        )

        if (!response.ok) throw new Error('Upload failed')

        const data = await response.json()
        return data.secure_url
    } catch (error) {
        console.error('Cloudinary upload error:', error)
        throw error
    }
}

// Initialize Quill
onMounted(() => {
    if (editorContainer.value) {
        quill = new Quill(editorContainer.value, {
            theme: 'snow',
            modules: modules,
            formats: formats,
            placeholder: props.placeholder
        })

        // Set initial content
        if (props.modelValue) {
            quill.root.innerHTML = props.modelValue
        }

        // Handle text change
        quill.on('text-change', () => {
            const content = quill.root.innerHTML
            emit('update:modelValue', content)
        })

        // Handle image upload completion
        quill.getModule('toolbar').addHandler('image', imageHandler)
    }
})

// Watch for external value changes
watch(() => props.modelValue, (newValue) => {
    if (quill && newValue !== quill.root.innerHTML) {
        const selection = quill.getSelection()
        quill.root.innerHTML = newValue
        if (selection) {
            quill.setSelection(selection)
        }
    }
})

// Cleanup
onUnmounted(() => {
    if (quill) {
        quill = null
    }
})

// Expose methods if needed
defineExpose({
    getEditor: () => quill,
    getText: () => quill ? quill.getText() : '',
    getHTML: () => quill ? quill.root.innerHTML : ''
})
</script>

<style scoped>
.quill-editor-container {
    height: 400px;
}

:deep(.ql-editor) {
    font-size: 16px;
    line-height: 1.6;
    font-family: inherit;
}

:deep(.ql-editor h1) {
    font-size: 2rem;
    margin: 1.5rem 0 1rem 0;
}

:deep(.ql-editor h2) {
    font-size: 1.5rem;
    margin: 1.25rem 0 0.75rem 0;
}

:deep(.ql-editor h3) {
    font-size: 1.25rem;
    margin: 1rem 0 0.5rem 0;
}

:deep(.ql-editor p) {
    margin-bottom: 1rem;
}

:deep(.ql-editor img) {
    max-width: 100%;
    height: auto;
    border-radius: 0.5rem;
    margin: 1rem 0;
}

:deep(.ql-editor .ql-align-center) {
    text-align: center;
}

:deep(.ql-editor .ql-align-right) {
    text-align: right;
}

:deep(.ql-editor blockquote) {
    border-left: 4px solid #ccc;
    margin: 1rem 0;
    padding-left: 1rem;
    font-style: italic;
}
</style>