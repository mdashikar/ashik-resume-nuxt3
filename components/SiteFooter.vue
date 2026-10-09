<template>
  <footer class="no-print border-t border-line">
    <div class="container-site flex flex-col gap-2 py-7 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
      <p>© {{ year }} {{ profile.name }}</p>
      <p class="font-mono text-xs">ashik.dev</p>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { profile } from "~/data/profile";

const year = new Date().getFullYear();
</script>
