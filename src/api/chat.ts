import type { ChatUser, ChatMessage } from '@/types/User'
import { currentUser, conversation } from '@/mocks/chat'

const chatService = {
  sendMessage: async (message: string, timeout = 0) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(true)
      }, timeout)
    })
  },
  getCurrentUser: async (timeout = 0): Promise<ChatUser> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(currentUser)
      }, timeout)
    })
  },
  getChatHistory: async (timeout = 0): Promise<ChatMessage[]> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(conversation)
      }, timeout)
    })
  },
}

export { chatService }
