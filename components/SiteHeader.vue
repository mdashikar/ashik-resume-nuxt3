<template>
  <header class="no-print sticky top-0 z-40 border-b border-line/70 bg-paper/80 backdrop-blur-md">
    <div class="container-site flex h-16 items-center justify-between">
      <NuxtLink to="/" class="font-mono text-sm font-medium tracking-tight" @click="open = false">
        ashik<span class="text-accent">.dev</span>
      </NuxtLink>

      <nav class="hidden items-center gap-7 text-sm text-muted md:flex" aria-label="Primary">
        <NuxtLink v-for="link in navLinks" :key="link.href" :to="link.href" class="transition-colors hover:text-ink">
          {{ link.label }}
        </NuxtLink>
        <NuxtLink to="/resume" class="transition-colors hover:text-ink" active-class="text-ink">Resume</NuxtLink>
      </nav>

      <div class="flex items-center gap-2">
        <ThemeToggle />
        <a :href="`mailto:${profile.email}`" class="btn-primary hidden !py-2 sm:inline-flex">Get in touch</a>
        <button
          type="button"
          class="grid h-9 w-9 place-items-center rounded-full border border-line md:hidden"
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
      <div class="container-site flex flex-col py-2">
        <NuxtLink
          v-for="link in [...navLinks, { label: 'Resume', href: '/resume' }]"
          :key="link.href"
          :to="link.href"
          class="py-3 text-base"
          @click="open = false"
        >
          {{ link.label }}
        </NuxtLink>
        <a :href="`mailto:${profile.email}`" class="btn-primary my-3">Get in touch</a>
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { navLinks, profile } from "~/data/profile";

const open = ref(false);
</script>
