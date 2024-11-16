<template>
  <ul class="app-chat-conversation">
    <li class="app-chat-conversation__entry" v-for="message in conversation" :key="message.id">
      <app-chat-message-entry
        :entry="message"
        :is-made-by-author="isMessageMadeByAuthor(message)"
      />
    </li>
  </ul>
</template>

<script setup lang="ts">
import AppChatMessageEntry from '@/components/AppChatMessageEntry/AppChatMessageEntry.vue'

import { useChatStore } from '@/stores/chat'
import type { ChatMessage } from '@/types/User'
import { computed } from 'vue'

const chatStore = useChatStore()

const conversation = computed(() => chatStore.getConversation)

const isMessageMadeByAuthor = (message: ChatMessage) => {
  return chatStore.isMessageFromCurrentUser(message)
}
</script>

<style scoped lang="sass" src="./AppChatConversationArea.scss" />
