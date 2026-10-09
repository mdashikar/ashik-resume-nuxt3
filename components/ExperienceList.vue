<template>
  <PageSection id="experience" title="Experience" meta="2019 – present">
    <ol class="divide-y divide-line border-y border-line">
      <li
        v-for="role in experience"
        :key="role.title + role.start"
        class="grid gap-x-8 gap-y-2 py-8 lg:grid-cols-[9.5rem_minmax(0,1fr)]"
      >
        <p class="label tabular pt-1">
          {{ role.start }} – {{ role.end }}
          <span class="mt-1 block normal-case tracking-normal">{{ role.location }}</span>
        </p>
        <div class="min-w-0">
          <h3 class="text-xl font-semibold tracking-tight">
            {{ role.title }}<span class="font-normal text-muted">, {{ role.company }}</span>
          </h3>
          <ul class="mt-3 max-w-[66ch] space-y-1.5 text-muted">
            <li v-for="point in role.points" :key="point" class="flex gap-3">
              <span class="mt-[0.7em] h-px w-3 flex-none bg-line" aria-hidden="true" />
              <span>{{ point }}</span>
            </li>
          </ul>
          <ul v-if="role.stack.length" class="mt-4 flex flex-wrap gap-1.5" aria-label="Technologies">
            <li v-for="tech in role.stack" :key="tech" class="chip">{{ tech }}</li>
          </ul>
        </div>
      </li>
    </ol>

    <div class="mt-8 flex flex-wrap gap-3">
      <NuxtLink to="/resume" class="btn-ghost">Read the full resume</NuxtLink>
      <a :href="site.resumePdf" download class="btn-ghost">Download PDF</a>
    </div>
  </PageSection>
</template>

<script setup lang="ts">
import { experience, site } from "~/data/profile";
</script>
