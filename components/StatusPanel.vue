<template>
  <figure class="relative mx-auto w-full max-w-md lg:max-w-none">
    <div class="absolute -inset-3 -z-10 rounded-[1.75rem] bg-accent/10 blur-2xl" aria-hidden="true" />
    <div class="overflow-hidden rounded-2xl border border-line bg-surface shadow-[0_1px_0_rgb(var(--line)),0_24px_48px_-24px_rgb(0_0_0/0.25)]">
      <div class="flex items-center justify-between border-b border-line px-5 py-3.5">
        <div class="flex items-center gap-1.5" aria-hidden="true">
          <span class="h-2.5 w-2.5 rounded-full bg-line" />
          <span class="h-2.5 w-2.5 rounded-full bg-line" />
          <span class="h-2.5 w-2.5 rounded-full bg-line" />
        </div>
        <span class="font-mono text-[11px] text-muted">status / consently.net</span>
      </div>

      <div class="p-5 sm:p-6">
        <div class="flex items-center justify-between gap-4">
          <div>
            <p class="font-mono text-[11px] uppercase tracking-[0.14em] text-muted">Production</p>
            <p class="mt-1 font-medium">All systems operational</p>
          </div>
          <span class="inline-flex items-center gap-1.5 rounded-full bg-ok/10 px-2.5 py-1 font-mono text-[11px] text-ok">
            <span class="h-1.5 w-1.5 rounded-full bg-ok" /> 99.99%
          </span>
        </div>

        <div class="mt-5 flex h-7 gap-[3px]" aria-hidden="true">
          <span v-for="i in 45" :key="i" class="h-full flex-1 rounded-[2px] bg-ok/80" />
        </div>
        <div class="mt-1.5 flex justify-between font-mono text-[10px] text-muted" aria-hidden="true">
          <span>90 days ago</span><span>today</span>
        </div>

        <dl class="mt-6 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-line bg-line">
          <div v-for="stat in consently.stats" :key="stat.label" class="bg-surface px-4 py-3.5">
            <dt class="font-mono text-[10px] uppercase tracking-[0.12em] text-muted">{{ stat.label }}</dt>
            <dd class="mt-1 text-xl font-semibold tracking-tight">{{ stat.value }}</dd>
          </div>
        </dl>

        <div class="mt-5 rounded-xl bg-paper px-4 py-3 font-mono text-[11.5px] leading-relaxed text-muted">
          <p><span class="text-accent">$</span> stack --service consently</p>
          <p class="text-ink">node · mongodb · bullmq · redis · aws ecs · terraform</p>
        </div>
      </div>
    </div>
    <figcaption class="mt-3 text-center font-mono text-[11px] text-muted">
      Consently.net — backend architected and run by me
    </figcaption>
  </figure>
</template>

<script setup lang="ts">
import { projects } from "~/data/profile";

const consently = projects[0];
</script>
