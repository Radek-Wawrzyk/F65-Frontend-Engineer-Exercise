import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { ChatMessage, ChatUser } from '@/types/User'
import { chatService } from '@/api/chat'

const useChatStore = defineStore('chat', () => {
  const messages = ref<ChatMessage[]>([])
  const currentUser = ref<ChatUser | null>(null)

  const addMessage = (message: string) => {
    console.log(message)
  }

  const isMessageFromCurrentUser = (message: ChatMessage) => {
    return message.from.id === currentUser.value?.id
  }

  const init = async () => {
    try {
      const user = await chatService.getCurrentUser()
      const conversations = await chatService.getChatHistory()
      currentUser.value = user as any
      messages.value = conversations as any
    } catch (error) {
      console.error(error)
    }
  }

  return { messages, addMessage, init, currentUser, isMessageFromCurrentUser }
})

export { useChatStore }
