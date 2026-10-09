<template>
  <section id="work" class="container-site py-20 sm:py-28">
    <SectionHeading index="01" label="Selected work">
      Products I've taken from an empty repo to paying customers.
      <template #lead>
        Two shipped at Dorik as the sole engineer on the backend (or the whole stack), and one I run on my own.
      </template>
    </SectionHeading>

    <div class="grid gap-5 lg:grid-cols-2">
      <article
        v-for="(project, i) in projects"
        :key="project.name"
        class="group flex flex-col rounded-2xl border border-line bg-surface p-6 transition-colors hover:border-ink/30 sm:p-8"
        :class="i === 0 ? 'lg:col-span-2' : ''"
      >
        <div :class="i === 0 ? 'grid gap-10 lg:grid-cols-[1.2fr_1fr]' : 'flex flex-1 flex-col'">
          <div class="flex flex-1 flex-col">
            <div class="flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-[11px] uppercase tracking-[0.12em] text-muted">
              <span class="text-accent">0{{ i + 1 }}</span>
              <span>{{ project.context }}</span>
              <span aria-hidden="true">·</span>
              <span>{{ project.role }}</span>
            </div>

            <h3 class="mt-4 text-2xl font-semibold tracking-tight sm:text-3xl">
              {{ project.name }}
              <span class="font-serif text-[1.05em] font-normal italic text-muted">— {{ project.tagline.toLowerCase() }}</span>
            </h3>

            <p class="mt-4 leading-relaxed text-muted">{{ project.description }}</p>

            <ul class="mt-5 space-y-2.5 text-[15px]">
              <li v-for="point in project.points" :key="point" class="flex gap-3">
                <span class="mt-[0.6em] h-px w-3 flex-none bg-accent" aria-hidden="true" />
                <span>{{ point }}</span>
              </li>
            </ul>

            <div class="mt-auto flex flex-wrap items-center justify-between gap-4 pt-7">
              <ul class="flex flex-wrap gap-1.5" aria-label="Tech stack">
                <li v-for="tech in project.stack" :key="tech" class="chip">{{ tech }}</li>
              </ul>
              <a
                :href="project.url"
                target="_blank"
                rel="noopener"
                class="inline-flex items-center gap-1.5 font-mono text-xs text-ink"
              >
                {{ project.url.replace("https://", "") }}
                <svg class="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17L17 7M8 7h9v9" /></svg>
              </a>
            </div>
          </div>

          <div v-if="project.stats" class="self-start overflow-hidden rounded-xl border border-line bg-line">
            <dl class="grid grid-cols-2 gap-px">
              <div v-for="stat in project.stats" :key="stat.label" class="flex flex-col-reverse bg-paper p-5 sm:p-6">
                <dt class="mt-1 text-sm text-muted">{{ stat.label }}</dt>
                <dd class="text-3xl font-semibold tracking-tight sm:text-4xl">{{ stat.value }}</dd>
              </div>
            </dl>
            <p class="mt-px bg-paper px-5 py-3 font-mono text-[11px] text-muted sm:px-6">Live platform numbers · 2026</p>
          </div>
        </div>
      </article>
    </div>
  </section>
</template>

<script setup lang="ts">
import { projects } from "~/data/profile";
</script>
