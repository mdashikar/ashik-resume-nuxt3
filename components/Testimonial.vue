<template>
  <PageSection id="testimonials" title="Colleagues">
    <div class="grid gap-10 lg:grid-cols-2 lg:gap-12">
      <figure v-for="item in testimonials" :key="item.name" class="flex min-w-0 flex-col border-t border-line pt-6">
        <blockquote class="flex-1 text-lg leading-relaxed">
          <p>“{{ item.quote }}”</p>
        </blockquote>
        <figcaption class="mt-6">
          <span class="block font-semibold">{{ item.name }}</span>
          <span class="block text-[15px] text-muted">{{ item.role }}</span>
        </figcaption>
      </figure>
    </div>
  </PageSection>
</template>

<script setup lang="ts">
import { testimonials } from "~/data/profile";
</script>
