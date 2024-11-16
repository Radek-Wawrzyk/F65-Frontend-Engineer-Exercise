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

const scrollToBottom = () => {
  if (!chatConversationRef.value) return
  chatConversationRef.value.scrollTop = chatConversationRef.value.scrollHeight
}

const sendReply = () => {
  chatStore.sendMessage(message.value)
  scrollToBottom()
  message.value = ''
}

onMounted(async () => {
  await chatStore.init()
})
</script>

<style lang="sass" scoped src="./AppChat.scss" />
