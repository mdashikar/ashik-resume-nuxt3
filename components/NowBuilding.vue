<template>
  <PageSection id="now" kicker="Now" title="What I'm building">
    <div class="grid gap-5 md:grid-cols-2">
      <article
        v-for="product in building"
        :key="product.name"
        class="flex min-w-0 flex-col rounded-2xl bg-sunken p-6 sm:p-9"
      >
        <div class="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-2">
          <h3 class="font-display text-5xl font-bold tracking-[-0.035em]">{{ product.name }}</h3>
          <a :href="product.url" target="_blank" rel="noopener" class="link font-mono text-sm">
            {{ product.url.replace("https://", "") }} ↗
          </a>
        </div>
        <p class="mt-4 text-xl font-medium">{{ product.summary }}</p>
        <p class="mt-2 max-w-[48ch] text-muted">{{ product.audience }}</p>

        <ul class="mt-7 flex flex-wrap gap-2" aria-label="Features">
          <li v-for="feature in product.features" :key="feature" class="tag !bg-surface">{{ feature }}</li>
        </ul>

        <p class="mt-auto pt-8 text-sm text-muted">
          <span class="font-medium text-ink">{{ product.role }}</span>
          <template v-if="product.stack.length"> · {{ product.stack.join(", ") }}</template>
        </p>
      </article>
    </div>
  </PageSection>
</template>

<script setup lang="ts">
import { building } from "~/data/profile";
</script>
