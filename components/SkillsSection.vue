<template>
  <PageSection id="skills" kicker="Toolbox" title="Skills">
    <template #aside>
      <p class="flex items-center gap-2 text-sm text-muted">
        <span class="h-1.5 w-1.5 rounded-full bg-ink" aria-hidden="true" />
        Used in the products above
      </p>
    </template>

    <div class="grid gap-5 md:grid-cols-2">
      <section
        v-for="group in skills"
        :key="group.group"
        class="min-w-0 rounded-2xl border border-line bg-surface p-6 sm:p-8"
        :aria-labelledby="slug(group.group)"
      >
        <h3 :id="slug(group.group)" class="font-display text-2xl font-bold tracking-[-0.02em]">{{ group.group }}</h3>
        <p class="mt-2 text-muted">{{ group.summary }}</p>

        <ul v-if="hasTools(group.items)" class="mt-6 flex flex-wrap gap-2">
          <li
            v-for="item in group.items"
            :key="item"
            class="inline-flex items-center gap-1.5 rounded-lg border px-2.5 py-1 text-[15px]"
            :class="usedInProducts.has(item.toLowerCase()) ? 'border-ink/70 font-medium text-ink' : 'border-line text-muted'"
          >
            <span v-if="usedInProducts.has(item.toLowerCase())" class="h-1.5 w-1.5 rounded-full bg-ink" aria-hidden="true" />
            {{ item }}
            <span v-if="usedInProducts.has(item.toLowerCase())" class="sr-only">(used in the products above)</span>
          </li>
        </ul>
        <ul v-else class="mt-6 grid gap-x-6 gap-y-2 text-[17px] sm:grid-cols-2">
          <li v-for="item in group.items" :key="item" class="flex items-baseline gap-2.5">
            <span class="h-px w-3 flex-none translate-y-[-0.3em] bg-muted" aria-hidden="true" />
            {{ item }}
          </li>
        </ul>
      </section>
    </div>
  </PageSection>
</template>

<script setup lang="ts">
import { building, shipped, skills } from "~/data/profile";

// Tools that appear in the stacks of the products shown on this page
const usedInProducts = new Set([...building, ...shipped].flatMap((p) => p.stack.map((t) => t.toLowerCase())));

// The "Ways of working" group has no tools, so it renders as a plain list
const hasTools = (items: string[]) => items.some((item) => usedInProducts.has(item.toLowerCase()));

const slug = (text: string) => `skills-${text.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`;
</script>
