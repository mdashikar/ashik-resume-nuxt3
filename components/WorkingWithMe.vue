<template>
  <PageSection id="working-with-me" kicker="For recruiters" title="Working with me">
    <template #aside>
      <a :href="site.resumePdf" download class="link text-[15px] font-medium">Resume PDF<span aria-hidden="true"> ↓</span></a>
    </template>

    <dl class="grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
      <div v-for="fact in hiring" :key="fact.label" class="flex flex-col-reverse justify-end bg-surface p-6 sm:p-7">
        <dd>
          <span class="font-display flex items-center gap-2.5 text-2xl font-bold tracking-[-0.02em]">
            <span v-if="fact.live" class="relative flex h-2.5 w-2.5 flex-none" aria-hidden="true">
              <span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-ok opacity-50" />
              <span class="relative inline-flex h-2.5 w-2.5 rounded-full bg-ok" />
            </span>
            {{ fact.value }}
          </span>
          <span v-if="fact.note" class="mt-1 block text-muted">{{ fact.note }}</span>
        </dd>
        <dt class="label mb-3">{{ fact.label }}</dt>
      </div>
    </dl>
  </PageSection>
</template>

<script setup lang="ts">
import { hiring, site } from "~/data/profile";
</script>
