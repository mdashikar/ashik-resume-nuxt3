<template>
  <div class="mb-10 grid gap-4 sm:mb-14 md:grid-cols-[12rem_1fr]">
    <p class="eyebrow pt-2"><span class="text-accent">{{ index }}</span> — {{ label }}</p>
    <div>
      <h2 class="max-w-2xl text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">
        <slot />
      </h2>
      <p v-if="$slots.lead" class="mt-4 max-w-2xl text-muted">
        <slot name="lead" />
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{ index: string; label: string }>();
</script>
