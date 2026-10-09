<template>
  <section :id="id" class="border-t border-line">
    <div class="container-site rail py-16 sm:py-24">
      <header class="md:sticky md:top-24 md:self-start">
        <h2 class="font-display text-2xl font-bold tracking-[-0.02em]">{{ title }}</h2>
        <p v-if="meta" class="label mt-2">{{ meta }}</p>
      </header>
      <div class="min-w-0">
        <slot />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{ id: string; title: string; meta?: string }>();
</script>
