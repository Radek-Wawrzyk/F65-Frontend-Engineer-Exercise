interface ChatUser {
  id: number
  firstName: string
  lastName: string
  thumbnail: string
}

interface ChatMessage {
  id: number
  from: ChatUser
  message: string
  date: string
}

export type { ChatUser, ChatMessage }
