<template>
  <section id="testimonials" class="border-t border-line bg-surface/50">
    <div class="container-site py-20 sm:py-28">
      <SectionHeading index="04" label="Kind words">
        What people I've worked with say.
      </SectionHeading>

      <div class="grid gap-5 md:grid-cols-2">
        <figure
          v-for="item in testimonials"
          :key="item.name"
          class="flex flex-col rounded-2xl border border-line bg-paper p-6 sm:p-8"
        >
          <span class="font-serif text-6xl leading-none text-accent" aria-hidden="true">&ldquo;</span>
          <blockquote class="-mt-4 flex-1 text-[17px] leading-relaxed">
            {{ item.quote }}
          </blockquote>
          <figcaption class="mt-8 flex items-center gap-3">
            <span class="grid h-10 w-10 flex-none place-items-center rounded-full border border-line bg-surface font-mono text-xs" aria-hidden="true">
              {{ initials(item.name) }}
            </span>
            <span>
              <span class="block font-medium">{{ item.name }}</span>
              <span class="block text-sm text-muted">{{ item.role }}</span>
            </span>
          </figcaption>
        </figure>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { testimonials } from "~/data/profile";

const initials = (name: string) =>
  name
    .split(" ")
    .map((part) => part[0])
    .join("");
</script>
