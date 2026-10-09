<template>
  <footer class="no-print border-t border-line">
    <div class="container-site flex flex-col gap-3 py-8 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
      <p>© {{ year }} {{ profile.name }}</p>
      <ul class="flex flex-wrap gap-x-5 gap-y-2">
        <li v-for="link in profile.links" :key="link.label">
          <a :href="link.href" target="_blank" rel="noopener" class="transition-colors hover:text-ink">{{ link.label }}</a>
        </li>
        <li><a :href="site.resumePdf" download class="transition-colors hover:text-ink">Resume PDF</a></li>
      </ul>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { profile, site } from "~/data/profile";

const year = new Date().getFullYear();
</script>
