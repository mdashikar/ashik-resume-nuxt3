<template>
  <PageSection id="shipped" kicker="At Dorik, 2023 – 2026" title="Products I shipped">
    <div class="grid gap-14 md:grid-cols-2 md:gap-12 lg:gap-20">
      <article v-for="item in shipped" :key="item.name" class="min-w-0 border-t-2 border-ink pt-6">
        <div class="flex items-baseline justify-between gap-4">
          <h3 class="font-display text-3xl font-bold tracking-[-0.03em]">{{ item.name }}</h3>
          <span class="font-mono text-sm text-muted">{{ item.year }}</span>
        </div>
        <p class="mt-1 text-muted">{{ item.tagline }} · {{ item.role }}</p>

        <dl class="mt-6 flex flex-wrap gap-x-10 gap-y-5">
          <div v-for="n in item.numbers" :key="n.label" class="flex flex-col-reverse">
            <dt class="text-sm text-muted">{{ n.label }}</dt>
            <dd class="font-display text-4xl font-bold tracking-[-0.03em] tabular">{{ n.value }}</dd>
          </div>
        </dl>

        <p class="mt-6">{{ item.summary }}</p>

        <p class="mt-7 font-mono text-xs leading-6 text-muted">{{ item.stack.join(" · ") }}</p>
        <ExternalLink :href="item.url" class="link mt-3 inline-block font-mono text-sm">
          {{ item.url.replace("https://", "") }}
        </ExternalLink>
      </article>
    </div>
  </PageSection>
</template>

<script setup lang="ts">
import { shipped } from "~/data/profile";
</script>
