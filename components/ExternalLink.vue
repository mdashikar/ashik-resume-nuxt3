<template>
  <a :href="href" target="_blank" rel="noopener">
    <slot /><span aria-hidden="true"> ↗</span><span class="sr-only"> (opens in a new tab)</span>
  </a>
</template>

<script setup lang="ts">
defineProps<{ href: string }>();
</script>
