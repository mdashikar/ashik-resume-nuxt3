<template>
  <section id="ai" class="container-site pb-20 sm:pb-28" aria-labelledby="ai-title">
    <div class="rounded-3xl border border-on-band/10 bg-band p-7 text-on-band sm:p-12 lg:p-16">
      <div class="grid items-start gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-16">
        <div>
          <p class="label !text-on-band/70">Process</p>
          <h2 id="ai-title" class="font-display mt-3 text-4xl font-bold tracking-[-0.035em] sm:text-5xl">How I work with AI</h2>
          <p class="mt-5 max-w-[44ch] text-lg leading-relaxed text-on-band/80">{{ aiWorkflow.intro }}</p>
          <ul class="mt-7 flex flex-wrap gap-2" aria-label="Tools">
            <li
              v-for="tool in aiWorkflow.tools"
              :key="tool"
              class="rounded-lg border border-on-band/20 px-2.5 py-1 font-mono text-sm text-on-band/85"
            >
              {{ tool }}
            </li>
          </ul>
        </div>

        <ol class="divide-y divide-on-band/15 border-y border-on-band/15">
          <li v-for="(step, i) in aiWorkflow.steps" :key="step.title" class="grid grid-cols-[2.25rem_minmax(0,1fr)] gap-x-3 py-6 sm:grid-cols-[3rem_minmax(0,1fr)] sm:gap-x-4">
            <span class="font-mono text-lg font-medium text-accent tabular" aria-hidden="true">{{ String(i + 1).padStart(2, "0") }}</span>
            <div>
              <h3 class="text-xl font-semibold">{{ step.title }}</h3>
              <p class="mt-1 text-lg leading-relaxed text-on-band/80">{{ step.text }}</p>
            </div>
          </li>
        </ol>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { aiWorkflow } from "~/data/profile";
</script>
