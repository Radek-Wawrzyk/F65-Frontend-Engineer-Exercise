<template>
  <div class="app-chat">
    <section class="app-chat__content">
      <!-- AppChatContent component here -->
      s
    </section>

    <footer class="app-chat__controls">
      <app-chat-compose v-model="message" @submit="sendReply" />
    </footer>
  </div>
</template>

<script setup lang="ts">
import AppChatCompose from '../AppChatCompose/AppChatCompose.vue'
import { ref } from 'vue'
import { useChatStore } from '@/stores/chat'

const chatStore = useChatStore()
const message = ref('')

const sendReply = () => {
  // TODO: Scroll to bottom of chat content
  // TODO: Send message to chat store
  console.log('Sending message:', message.value)
  message.value = ''
}
</script>

<style lang="sass" scoped src="./AppChat.scss" />
