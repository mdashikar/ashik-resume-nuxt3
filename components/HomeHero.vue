<template>
  <section id="top" class="container-site pb-16 pt-12 sm:pt-16 lg:pb-24 lg:pt-20">
    <p class="label flex flex-wrap items-center gap-x-2 gap-y-1">
      <span class="inline-flex items-center gap-2">
        <span class="h-1.5 w-1.5 rounded-full bg-ok" aria-hidden="true" />
        {{ profile.currentRole }} at {{ profile.currentCompany }}
      </span>
      <span aria-hidden="true">·</span>
      <span>{{ profile.location }}</span>
    </p>

    <h1 class="font-display mt-5 text-[2.6rem] font-bold leading-[0.95] tracking-[-0.035em] sm:text-6xl lg:text-[5.4rem]">
      {{ profile.name }}
    </h1>

    <div class="mt-8 grid gap-10 lg:mt-10 lg:grid-cols-[minmax(0,1fr)_22rem] lg:gap-16">
      <div class="min-w-0">
        <p class="max-w-[34ch] text-xl leading-snug sm:text-2xl">
          {{ profile.intro }}
        </p>
        <div class="mt-8 flex flex-wrap gap-3">
          <a :href="`mailto:${profile.email}`" class="btn-primary">Email me</a>
          <a :href="site.resumePdf" download class="btn-ghost">
            <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 4v12M6 10l6 6 6-6M5 20h14" /></svg>
            Resume (PDF)
          </a>
          <a href="https://github.com/mdashikar" target="_blank" rel="noopener" class="btn-ghost">GitHub</a>
        </div>
      </div>

      <dl class="grid content-start gap-px self-start border border-line bg-line text-[15px]">
        <div v-for="fact in facts" :key="fact.label" class="grid grid-cols-[6.5rem_1fr] gap-3 bg-paper px-4 py-2.5">
          <dt class="label pt-[3px]">{{ fact.label }}</dt>
          <dd>{{ fact.value }}</dd>
        </div>
        <div class="grid grid-cols-[6.5rem_1fr] gap-3 bg-paper px-4 py-2.5">
          <dt class="label pt-[3px]">Location</dt>
          <dd>{{ profile.availability }}</dd>
        </div>
      </dl>
    </div>

    <div class="mt-12 lg:mt-16">
      <SystemDiagram />
    </div>
  </section>
</template>

<script setup lang="ts">
import { facts, profile, site } from "~/data/profile";
</script>
