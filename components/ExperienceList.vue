<template>
  <PageSection id="experience" kicker="2019 – 2026" title="Experience" sunken>
    <template #aside>
      <NuxtLink to="/resume" class="link text-[15px] font-medium">Full resume<span aria-hidden="true"> →</span></NuxtLink>
    </template>

    <ol class="grid gap-px overflow-hidden rounded-2xl border border-line bg-line">
      <li
        v-for="role in experience"
        :key="role.title + role.start"
        class="grid gap-x-8 gap-y-1 bg-surface px-5 py-5 sm:px-7 md:grid-cols-[11rem_minmax(0,1fr)]"
      >
        <p class="font-mono text-sm text-muted tabular md:pt-0.5">{{ role.start }} – {{ role.end }}</p>
        <div class="min-w-0">
          <h3 class="font-semibold">
            {{ role.title }} <span class="font-normal text-muted">· {{ role.company }}</span>
          </h3>
          <p class="mt-0.5 text-muted">{{ role.headline }}</p>
        </div>
      </li>
    </ol>
  </PageSection>
</template>

<script setup lang="ts">
import { experience } from "~/data/profile";
</script>
