<template>
  <PageSection id="testimonials" title="What colleagues say">
    <div class="grid gap-12 lg:grid-cols-2 lg:gap-16">
      <figure v-for="item in testimonials" :key="item.name" class="flex min-w-0 flex-col">
        <blockquote class="flex-1 text-lg leading-relaxed sm:text-xl">
          <p>“{{ item.quote }}”</p>
        </blockquote>
        <figcaption class="mt-6 flex items-center gap-3">
          <span class="grid h-10 w-10 flex-none place-items-center rounded-full bg-sunken font-mono text-xs" aria-hidden="true">
            {{ initials(item.name) }}
          </span>
          <span>
            <span class="block font-semibold">{{ item.name }}</span>
            <span class="block text-[15px] text-muted">{{ item.role }}</span>
          </span>
        </figcaption>
      </figure>
    </div>
  </PageSection>
</template>

<script setup lang="ts">
import { testimonials } from "~/data/profile";

const initials = (name: string) =>
  name
    .split(" ")
    .map((part) => part[0])
    .join("");
</script>
