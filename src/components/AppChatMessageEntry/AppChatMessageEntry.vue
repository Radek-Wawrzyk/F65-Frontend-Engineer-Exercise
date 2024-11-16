<template>
  <textarea
    v-model="message"
    class="app-chat-controls__input"
    @keydown="onEnterPress($event)"
    placeholder="Type your message here..."
    rows="3"
  />
</template>

<script setup lang="ts"></script>

<style scoped></style>
