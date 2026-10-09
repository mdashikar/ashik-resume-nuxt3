<template>
  <button type="button" class="btn-ghost flex-none !px-3 !py-1.5 text-sm" @click="copy">
    {{ copied ? "Copied" : "Copy" }}
  </button>
</template>

<script setup lang="ts">
import { ref } from "vue";

const props = defineProps<{ text: string }>();
const copied = ref(false);

const copy = async () => {
  try {
    await navigator.clipboard.writeText(props.text);
    copied.value = true;
    setTimeout(() => (copied.value = false), 2000);
  } catch {
    window.location.href = `mailto:${props.text}`;
  }
};
</script>
