<template>
  <header class="no-print sticky top-0 z-40 border-b border-line bg-paper/85 backdrop-blur-md">
    <div class="container-site flex h-14 items-center justify-between gap-6">
      <NuxtLink to="/" class="font-mono text-[13px] font-medium" @click="open = false">
        ashik<span class="text-accent">.dev</span>
      </NuxtLink>

      <nav class="hidden items-center gap-7 text-[15px] text-muted md:flex" aria-label="Primary">
        <NuxtLink v-for="link in navLinks" :key="link.href" :to="link.href" class="transition-colors hover:text-ink">
          {{ link.label }}
        </NuxtLink>
      </nav>

      <div class="flex items-center gap-2">
        <ThemeToggle />
        <NuxtLink to="/resume" class="btn-primary hidden !py-1.5 sm:inline-flex">Resume</NuxtLink>
        <button
          type="button"
          class="grid h-9 w-9 place-items-center rounded-md border border-line md:hidden"
          :aria-expanded="open"
          aria-controls="mobile-nav"
          aria-label="Toggle menu"
          @click="open = !open"
        >
          <svg v-if="!open" class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
            <path d="M4 7h16M4 12h16M4 17h16" />
          </svg>
          <svg v-else class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
            <path d="M6 6l12 12M18 6L6 18" />
          </svg>
        </button>
      </div>
    </div>

    <nav v-show="open" id="mobile-nav" class="border-t border-line md:hidden" aria-label="Mobile">
      <div class="container-site flex flex-col divide-y divide-line">
        <NuxtLink
          v-for="link in [...navLinks, { label: 'Resume', href: '/resume' }]"
          :key="link.href"
          :to="link.href"
          class="py-3.5"
          @click="open = false"
        >
          {{ link.label }}
        </NuxtLink>
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { navLinks } from "~/data/profile";

const open = ref(false);
</script>
