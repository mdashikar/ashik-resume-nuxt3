<template>
  <section id="top" class="container-site pb-4 pt-14 sm:pt-20">
    <p class="label flex flex-wrap gap-x-2">
      <span class="whitespace-nowrap">{{ profile.focus }} ·</span>
      <span class="whitespace-nowrap">{{ profile.years }} years ·</span>
      <span class="whitespace-nowrap">{{ profile.location }}</span>
    </p>

    <h1 class="font-display mt-6 max-w-[15ch] text-[2.6rem] font-bold leading-[1.02] tracking-[-0.04em] sm:text-6xl lg:text-[5.25rem]">
      Backend engineer, now building
      <template v-for="(product, i) in building" :key="product.name">
        <span class="mark">{{ product.name }}</span>{{ i === building.length - 1 ? "." : " and " }}
      </template>
    </h1>

    <div class="mt-12 grid items-start gap-10 lg:grid-cols-[minmax(0,1fr)_23rem] lg:gap-20">
      <div class="min-w-0">
        <p class="max-w-[56ch] text-lg leading-relaxed sm:text-xl">{{ profile.intro }}</p>
        <div class="mt-8 flex flex-wrap gap-3">
          <a :href="`mailto:${profile.email}`" class="btn-primary">Email me</a>
          <NuxtLink to="/resume" class="btn-ghost">Resume</NuxtLink>
          <ExternalLink :href="github.href" class="btn-ghost">GitHub</ExternalLink>
        </div>
      </div>

      <aside class="rounded-2xl border border-line bg-surface p-6" aria-label="Availability">
        <p class="flex items-center gap-2.5 font-semibold">
          <span class="relative flex h-2.5 w-2.5" aria-hidden="true">
            <span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-ok opacity-50" />
            <span class="relative inline-flex h-2.5 w-2.5 rounded-full bg-ok" />
          </span>
          Available now
        </p>
        <p class="mt-2 text-[15px] text-muted">
          Senior and lead backend roles. {{ profile.relocation }}
        </p>
        <div class="mt-5 border-t border-line pt-5">
          <p class="label">Email</p>
          <div class="mt-1.5 flex items-center justify-between gap-3">
            <span class="min-w-0 select-all break-all font-medium">{{ profile.email }}</span>
            <CopyButton :text="profile.email" label="email address" />
          </div>
        </div>
      </aside>
    </div>
  </section>
</template>

<script setup lang="ts">
import { building, profile } from "~/data/profile";

const github = profile.links.find((link) => link.label === "GitHub")!;
</script>
