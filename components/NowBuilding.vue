<template>
  <PageSection id="now" kicker="Now" title="What I'm building">
    <div class="grid items-start gap-5 md:grid-cols-2">
      <article v-for="product in building" :key="product.name" class="min-w-0 rounded-2xl bg-sunken p-6 sm:p-9">
        <img
          v-if="product.image"
          :src="product.image.src"
          :alt="product.image.alt"
          width="1600"
          height="1000"
          loading="lazy"
          class="mb-8 aspect-[16/10] w-full max-w-full rounded-xl border border-line bg-surface object-cover object-top"
        />
        <h3 class="font-display text-5xl font-bold tracking-[-0.035em]">{{ product.name }}</h3>
        <ExternalLink :href="product.url" class="link mt-3 inline-block font-mono text-sm">
          {{ product.url.replace("https://", "") }}
        </ExternalLink>

        <p class="mt-6 text-xl font-medium">{{ product.summary }}</p>
        <p class="mt-2 max-w-[48ch] text-muted">{{ product.audience }}</p>

        <ul class="mt-7 flex flex-wrap gap-2" aria-label="Features">
          <li v-for="feature in product.features" :key="feature" class="tag border border-line !bg-transparent">
            {{ feature }}
          </li>
        </ul>

        <p class="mt-8 text-sm text-muted">
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
