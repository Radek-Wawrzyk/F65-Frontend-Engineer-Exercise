<template>
  <div class="app-chat">
    <section class="app-chat__content" ref="chatConversationRef">
      <app-chat-conversation-area />
    </section>

    <footer class="app-chat__controls">
      <app-chat-compose v-model="message" @submit="sendReply" />
    </footer>
  </div>
</template>

<script setup lang="ts">
import AppChatCompose from '../AppChatCompose/AppChatCompose.vue'
import AppChatConversationArea from '../AppChatConversationArea/AppChatConversationArea.vue'

import { onMounted, ref } from 'vue'
import { useChatStore } from '@/stores/chat'

const chatStore = useChatStore()
const message = ref('')
const chatConversationRef = ref<HTMLDivElement | null>(null)
const hasErrorSubmit = ref(false)

const scrollToBottom = () => {
  if (!chatConversationRef.value) return
  chatConversationRef.value.scrollTop = chatConversationRef.value.scrollHeight
}

const sendReply = async () => {
  try {
    await chatStore.sendMessage(message.value)
    scrollToBottom()
    message.value = ''
    hasErrorSubmit.value = false
  } catch (error) {
    alert(error)
    hasErrorSubmit.value = true
  }
}

onMounted(async () => {
  await chatStore.init()
})
</script>

<style lang="sass" scoped src="./AppChat.scss" />
