<template>
  <NuxtLayout>
    <section class="container-site py-24 sm:py-32">
      <p class="label">Error {{ error?.statusCode ?? 404 }}</p>
      <h1 class="font-display mt-4 max-w-[18ch] text-4xl font-bold tracking-[-0.035em] sm:text-6xl">
        {{ notFound ? "This page doesn't exist." : "Something went wrong." }}
      </h1>
      <p class="mt-5 max-w-[52ch] text-lg text-muted">
        {{ notFound ? "The link may be old or mistyped." : "Please try again in a moment." }}
        You can go back to the home page or read my resume.
      </p>
      <div class="mt-8 flex flex-wrap gap-3">
        <button type="button" class="btn-primary" @click="leave('/')">Home page</button>
        <button type="button" class="btn-ghost" @click="leave('/resume')">Resume</button>
      </div>
    </section>
  </NuxtLayout>
</template>

<script setup lang="ts">
import type { NuxtError } from "#app";

const props = defineProps<{ error: NuxtError }>();
const leave = (path: string) => clearError({ redirect: path });
const notFound = computed(() => (props.error?.statusCode ?? 404) === 404);

useHead({
  title: notFound.value ? "Page not found — Md Ashiqur Rahman" : "Error — Md Ashiqur Rahman",
  meta: [{ name: "robots", content: "noindex" }],
});
</script>
