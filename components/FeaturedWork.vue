<template>
  <PageSection id="work" title="Work" :meta="`${projects.length} shipped products`">
    <div class="divide-y divide-line border-y border-line">
      <article v-for="project in projects" :key="project.name" class="py-10 first:pt-8 sm:py-12">
        <header class="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
          <h3 class="font-display text-3xl font-bold tracking-[-0.025em] sm:text-4xl">{{ project.name }}</h3>
          <a :href="project.url" target="_blank" rel="noopener" class="link font-mono text-[13px]">
            {{ project.url.replace("https://", "") }} ↗
          </a>
        </header>
        <p class="mt-2 text-lg text-muted">{{ project.tagline }}</p>
        <p class="label mt-4">{{ project.year }} · {{ project.context }} · {{ project.role }}</p>

        <p class="mt-6 max-w-[62ch]">{{ project.summary }}</p>

        <div class="mt-8 grid gap-8 md:grid-cols-2 md:gap-12">
          <div class="min-w-0">
            <h4 class="label">What I built</h4>
            <ul class="mt-3 space-y-2">
              <li v-for="item in project.built" :key="item" class="flex gap-3">
                <span class="mt-[0.7em] h-px w-3 flex-none bg-muted" aria-hidden="true" />
                <span>{{ item }}</span>
              </li>
            </ul>
          </div>
          <div class="min-w-0">
            <h4 class="label">Result</h4>
            <p class="mt-3">{{ project.outcome }}</p>
          </div>
        </div>

        <ul class="mt-8 flex flex-wrap gap-1.5" aria-label="Tech stack">
          <li v-for="tech in project.stack" :key="tech" class="chip">{{ tech }}</li>
        </ul>
      </article>
    </div>
  </PageSection>
</template>

<script setup lang="ts">
import { projects } from "~/data/profile";
</script>
