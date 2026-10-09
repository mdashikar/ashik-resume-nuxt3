<template>
  <section :id="id" :class="sunken ? 'bg-sunken' : ''">
    <div class="container-site py-20 sm:py-28">
      <header class="mb-10 flex flex-wrap items-end justify-between gap-x-8 gap-y-3 sm:mb-14">
        <div>
          <p v-if="kicker" class="label">{{ kicker }}</p>
          <h2 class="section-title mt-2">{{ title }}</h2>
        </div>
        <slot name="aside" />
      </header>
      <slot />
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{ id: string; title: string; kicker?: string; sunken?: boolean }>();
</script>
