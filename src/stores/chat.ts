import { ref } from 'vue'
import { defineStore } from 'pinia'

const useChatStore = defineStore('chat', () => {
  const messages = ref([])

  const addMessage = (message) => {
    console.log(message)
  }

  return { messages, addMessage }
})

export { useChatStore }
