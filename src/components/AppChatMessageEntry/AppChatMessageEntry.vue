<template>
  <div class="app-chat-entry" :class="{ 'app-chat-entry--author': isMadeByAuthor }">
    <div class="app-chat-entry__avatar" v-tooltip="entry.from.firstName">
      <img
        :src="entry.from.thumbnail"
        :alt="entry.from.firstName"
        class="app-chat-entry__avatar-image"
      />
    </div>

    <div
      class="app-chat-entry__content"
      :class="{ 'app-chat-entry__content--author': isMadeByAuthor }"
      v-html="getFormattedMessage(entry.message)"
    ></div>
  </div>
</template>

<script setup lang="ts">
import type { ChatMessage } from '@/types/User'
import { type PropType } from 'vue'

defineProps({
  entry: {
    type: Object as PropType<ChatMessage>,
    default: () => {},
  },
  isMadeByAuthor: {
    type: Boolean,
    default: () => false,
  },
})

const getFormattedMessage = (message: string) => {
  return message.replace(/\n/g, '<br>')
}
</script>

<style scoped lang="scss" src="./AppChatMessageEntry.scss" />
