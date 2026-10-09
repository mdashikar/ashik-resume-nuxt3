<template>
  <section id="experience" class="border-t border-line bg-surface/50">
    <div class="container-site py-20 sm:py-28">
      <SectionHeading index="02" label="Experience">
        From front-end lead to running backend teams and cloud infrastructure.
      </SectionHeading>

      <ol class="border-t border-line">
        <li
          v-for="role in experience"
          :key="role.title + role.start"
          class="grid gap-4 border-b border-line py-9 md:grid-cols-[12rem_1fr]"
        >
          <p class="font-mono text-xs text-muted md:pt-1.5">
            {{ role.start }} — {{ role.end }}
            <span class="mt-1 block">{{ role.location }}</span>
          </p>
          <div>
            <h3 class="text-xl font-semibold tracking-tight">
              {{ role.title }} <span class="text-muted">at</span> {{ role.company }}
            </h3>
            <ul class="mt-4 max-w-3xl space-y-2.5 leading-relaxed text-muted">
              <li v-for="point in role.points" :key="point" class="flex gap-3">
                <span class="mt-[0.75em] h-px w-3 flex-none bg-line" aria-hidden="true" />
                <span>{{ point }}</span>
              </li>
            </ul>
            <ul v-if="role.stack.length" class="mt-5 flex flex-wrap gap-1.5" aria-label="Technologies">
              <li v-for="tech in role.stack" :key="tech" class="chip">{{ tech }}</li>
            </ul>
          </div>
        </li>
      </ol>

      <div class="mt-10 flex flex-wrap items-center gap-3">
        <NuxtLink to="/resume" class="btn-ghost">Full resume</NuxtLink>
        <a :href="site.resumePdf" download class="btn-ghost">
          <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 4v12M6 10l6 6 6-6M5 20h14" /></svg>
          Download PDF
        </a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { experience, site } from "~/data/profile";
</script>
