<template>
  <section id="top" class="relative overflow-hidden">
    <div class="hero-grid pointer-events-none absolute inset-0 -z-10" aria-hidden="true" />

    <div class="container-site grid items-center gap-14 pb-16 pt-14 sm:pt-20 lg:grid-cols-[1.15fr_1fr] lg:pb-24 lg:pt-28">
      <div>
        <p class="eyebrow flex flex-wrap items-center gap-x-3 gap-y-1">
          <span class="inline-flex items-center gap-2">
            <span class="relative flex h-2 w-2">
              <span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-ok opacity-60" />
              <span class="relative inline-flex h-2 w-2 rounded-full bg-ok" />
            </span>
            {{ profile.currentRole }} @ {{ profile.currentCompany }}
          </span>
          <span class="hidden text-line sm:inline">/</span>
          <span>{{ profile.location }}</span>
        </p>

        <h1 class="mt-6 text-[2.75rem] font-semibold leading-[1.02] tracking-[-0.035em] sm:text-6xl lg:text-7xl">
          I build backends
          <span class="font-serif text-[1.08em] font-normal italic tracking-[-0.01em] text-accent">that stay up.</span>
        </h1>

        <p class="mt-6 max-w-xl text-lg leading-relaxed text-muted">
          {{ profile.title }} focused on {{ profile.focus.toLowerCase() }}, with 7+ years of shipping. At
          {{ profile.currentCompany }} I lead the backend team, run the AWS infrastructure behind 100k+ users, and have
          shipped products like Consently and Postmonk from the first commit to production.
        </p>

        <div class="mt-9 flex flex-wrap items-center gap-3">
          <a :href="`mailto:${profile.email}`" class="btn-primary">
            Email me
            <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
          </a>
          <NuxtLink to="/resume" class="btn-ghost">View resume</NuxtLink>
          <a href="https://github.com/mdashikar" target="_blank" rel="noopener" class="btn-ghost">GitHub</a>
        </div>

        <p class="mt-8 inline-flex items-center gap-2 rounded-full border border-dashed border-line px-3 py-1.5 text-xs text-muted">
          <svg class="h-3.5 w-3.5 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10" /><path d="M2 12h20M12 2a15 15 0 0 1 0 20M12 2a15 15 0 0 0 0 20" /></svg>
          {{ profile.availability }}
        </p>
      </div>

      <StatusPanel />
    </div>

    <div class="border-y border-line">
      <dl class="mx-auto grid max-w-site grid-cols-2 gap-px bg-line lg:grid-cols-4">
        <div v-for="item in highlights" :key="item.label" class="bg-paper px-4 py-7 sm:px-6 sm:py-9 lg:px-8">
          <dt class="sr-only">{{ item.label }}</dt>
          <dd class="text-3xl font-semibold tracking-tight sm:text-4xl">{{ item.value }}</dd>
          <dd class="mt-1.5 text-sm leading-snug text-muted">{{ item.label }}</dd>
        </div>
      </dl>
    </div>
  </section>
</template>

<script setup lang="ts">
import { highlights, profile } from "~/data/profile";
</script>

<style scoped>
.hero-grid {
  background-image: linear-gradient(to right, rgb(var(--line) / 0.55) 1px, transparent 1px),
    linear-gradient(to bottom, rgb(var(--line) / 0.55) 1px, transparent 1px);
  background-size: 56px 56px;
  mask-image: radial-gradient(ellipse 70% 60% at 70% 30%, #000 20%, transparent 75%);
  -webkit-mask-image: radial-gradient(ellipse 70% 60% at 70% 30%, #000 20%, transparent 75%);
}
</style>
