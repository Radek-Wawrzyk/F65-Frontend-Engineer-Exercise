import { computed, ref } from 'vue'
import { defineStore } from 'pinia'
import type { ChatMessage, ChatUser } from '@/types/User'
import { chatService } from '@/api/chat'

const useChatStore = defineStore('chat', () => {
  const loading = ref(false)
  const messages = ref<ChatMessage[]>([])
  const currentUser = ref<ChatUser | null>(null)
  const getConversation = computed(() => messages.value)

  const sendMessage = async (message: string) => {
    if (!currentUser.value) return

    const newMessage: ChatMessage = {
      id: messages.value.length + 1,
      from: currentUser.value,
      message,
      date: new Date().toISOString(),
    }

    try {
      loading.value = true
      // INFO: We can make a delay here to simulate a real API call (second parameter is the delay in ms)
      await chatService.sendMessage(message, 0)
      messages.value.push(newMessage)
    } catch (error) {
      console.error(error)
    } finally {
      loading.value = false
    }
  }

  const isMessageFromCurrentUser = (message: ChatMessage) => {
    return message.from.id === currentUser.value?.id
  }

  const init = async () => {
    try {
      loading.value = true
      // INFO: We can make a delay here to simulate a real API call (second parameter is the delay in ms)
      currentUser.value = await chatService.getCurrentUser(0)
      messages.value = await chatService.getChatHistory(0)
    } catch (error) {
      console.error(error)
    } finally {
      loading.value = false
    }
  }

  return {
    messages,
    sendMessage,
    init,
    currentUser,
    isMessageFromCurrentUser,
    getConversation,
    loading,
  }
})

export { useChatStore }
