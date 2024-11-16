<template>
  <div class="app-chat-entry" :class="{ 'app-chat-entry--author': isMadeByAuthor }">
    <div class="app-chat-entry__avatar">
      <img
        :src="message.from.thumbnail"
        :alt="message.from.firstName"
        class="app-chat-entry__avatar-image"
      />
    </div>

    <div
      class="app-chat-entry__content"
      :class="{ 'app-chat-entry__content--author': isMadeByAuthor }"
    >
      {{ message.message }} by {{ message.from.firstName }}
    </div>
  </div>
</template>

<script setup lang="ts">
import type { ChatMessage } from '@/types/User'
import type { PropType } from 'vue'

defineProps({
  message: {
    type: Object as PropType<ChatMessage>,
    default: () => {},
  },
  isMadeByAuthor: {
    type: Boolean,
    default: () => false,
  },
})
</script>

<style scoped lang="scss" src="./AppChatMessageEntry.scss" />
