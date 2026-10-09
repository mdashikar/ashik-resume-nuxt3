<template>
  <button
    type="button"
    class="btn flex-none !py-1.5 text-sm"
    :class="onBand ? 'border border-on-band/30 text-on-band hover:border-on-band' : 'border border-line text-ink hover:border-ink'"
    :aria-label="`Copy ${label}`"
    @click="copy"
  >
    {{ status === "copied" ? "Copied" : status === "failed" ? "Select and copy" : "Copy" }}
    <span class="sr-only" aria-live="polite">{{ status === "copied" ? `${label} copied` : "" }}</span>
  </button>
</template>

<script setup lang="ts">
import { ref } from "vue";

const props = defineProps<{ text: string; label: string; onBand?: boolean }>();
const status = ref<"idle" | "copied" | "failed">("idle");

const copy = async () => {
  try {
    await navigator.clipboard.writeText(props.text);
    status.value = "copied";
  } catch {
    status.value = "failed";
  }
  setTimeout(() => (status.value = "idle"), 2500);
};
</script>
