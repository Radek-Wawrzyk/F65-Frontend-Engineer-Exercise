<template>
  <div class="app-chat-compose" :style="{ height: `${composeHeight}px` }">
    <textarea
      :value="modelValue"
      class="app-chat-compose__input"
      @input="onInput"
      @keydown="onEnterPress($event)"
      @keypress="onKeyPress($event)"
      placeholder="Type your message here..."
      ref="textareaRef"
      :style="{ height: `${textareaHeight}px`, maxHeight: `${maxTextareaHeight}px` }"
    ></textarea>

    <button
      class="app-chat-compose__send-button"
      title="Send a message"
      aria-label="Send a message"
      @click="onMessageSend()"
    >
      <svg
        width="32"
        height="32"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M18.3345 9.88331C18.3357 10.3446 18.2025 10.7964 17.9512 11.1833C17.7074 11.5741 17.3537 11.8842 16.9345 12.075L5.14286 17.7916C4.81448 17.9566 4.45199 18.0422 4.08452 18.0416C3.93037 18.0419 3.77666 18.0251 3.62619 17.9916C3.1114 17.895 2.64281 17.6314 2.29285 17.2416C1.94037 16.8523 1.72381 16.3591 1.67572 15.8361C1.62763 15.3131 1.75062 14.7887 2.02619 14.3416L4.89286 10.3583C4.95908 10.2 4.99307 10.03 4.99285 9.85831C4.99317 9.67322 4.95037 9.49064 4.86786 9.32497L2.21785 5.57497C1.94404 5.11957 1.82969 4.58592 1.89285 4.0583C1.94981 3.55167 2.16607 3.07618 2.5105 2.7003C2.85494 2.32442 3.30977 2.06753 3.80952 1.96664C4.31207 1.8681 4.83277 1.92627 5.30118 2.13331L16.9679 7.69163C17.3778 7.89264 17.7231 8.20457 17.9647 8.59197C18.2063 8.97939 18.3344 9.42672 18.3345 9.88331Z"
          fill="#007AFF"
        />
      </svg>
    </button>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'

const emit = defineEmits(['submit', 'update:modelValue'])

const props = defineProps({
  modelValue: {
    type: String,
    default: '',
  },
})

const COMPOSE_PADDING_BOTTOM = 16
const DEFAULT_HEIGHT = {
  TEXTAREA: 26,
  COMPOSE: 42,
}

const textareaRef = ref<HTMLTextAreaElement | null>(null)
const textareaHeight = ref(0)
const maxTextareaHeight = ref(60)
const composeHeight = ref(80)

const onMessageSend = () => {
  if (!props.modelValue) return

  emit('submit')
  textareaHeight.value = DEFAULT_HEIGHT.TEXTAREA
  composeHeight.value = DEFAULT_HEIGHT.COMPOSE

  if (textareaRef.value) {
    textareaRef.value.style.height = 'auto'
  }
}

const onInput = (event: Event) => {
  const target = event.target as HTMLTextAreaElement
  emit('update:modelValue', target.value)
  calculateTextAreaHeight()
}

const onEnterPress = (event: KeyboardEvent) => {
  if (event.key === 'Enter') {
    onMessageSend()
  }
}

const calculateTextAreaHeight = () => {
  if (!textareaRef.value) return
  const newHeight = textareaRef.value.scrollHeight

  // INFO: Limit the height to the maximum height allowed
  textareaHeight.value = Math.min(newHeight, maxTextareaHeight.value)
  textareaRef.value.style.height = `${textareaHeight.value}px`
  composeHeight.value = textareaHeight.value + COMPOSE_PADDING_BOTTOM
}

const onKeyPress = (event: KeyboardEvent) => {
  if (event.key === 'Enter') {
    event.preventDefault()
  }
}

onMounted(() => {
  if (textareaRef.value) {
    calculateTextAreaHeight()
  }
})
</script>

<style scoped lang="sass" src="./AppChatCompose.scss" />
