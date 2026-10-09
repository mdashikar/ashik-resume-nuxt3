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

    <div class="mt-16">
      <h3 class="font-display text-2xl font-bold tracking-[-0.02em]">Skills</h3>
      <dl class="mt-6 grid grid-cols-2 gap-x-6 gap-y-8 sm:gap-x-10 lg:grid-cols-4">
        <div v-for="group in skills" :key="group.group">
          <dt class="label">{{ group.group }}</dt>
          <dd class="mt-2.5">
            <ul class="space-y-1">
              <li v-for="item in group.items" :key="item">{{ item }}</li>
            </ul>
          </dd>
        </div>
      </dl>
    </div>
  </PageSection>
</template>

<script setup lang="ts">
import { experience, skills } from "~/data/profile";
</script>
