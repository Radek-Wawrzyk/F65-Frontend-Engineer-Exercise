import type { ChatUser } from '@/types/User'
import { generateUUID } from '@/utils/uuid'
import { currentUser, conversation } from '@/mocks/chat'

const chatService = {
  sendMessage: async (message: string, currentUser: ChatUser) => {
    const payload = {
      message,
      id: generateUUID(),
      date: new Date().toISOString(),
      from: currentUser,
    }
  },
  getCurrentUser: async () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(currentUser)
      }, 500)
    })
  },
  getChatHistory: async () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(conversation)
      }, 500)
    })
  },
}

export { chatService }
