<template>
  <section id="contact" class="bg-ink text-paper">
    <div class="container-site py-20 sm:py-28">
      <p class="label !text-paper/60">Contact</p>
      <h2 class="font-display mt-3 max-w-[18ch] text-4xl font-bold tracking-[-0.035em] sm:text-6xl">
        Hiring for a senior or lead backend role?
      </h2>
      <p class="mt-5 max-w-[52ch] text-lg text-paper/70">
        I'm available now, remote or on-site. {{ profile.relocation }} I also like hearing from people using Feevox
        or Erestro.
      </p>

      <div class="mt-10 flex flex-wrap items-center gap-x-6 gap-y-4">
        <a
          :href="`mailto:${profile.email}`"
          class="font-display break-all text-2xl font-bold tracking-[-0.02em] underline decoration-accent decoration-[3px] underline-offset-[6px] sm:text-4xl"
        >
          {{ profile.email }}
        </a>
        <button
          type="button"
          class="btn border border-paper/25 !py-2 text-paper hover:border-paper"
          @click="copyEmail"
        >
          {{ copied ? "Copied" : "Copy address" }}
        </button>
      </div>

      <ul class="mt-14 flex flex-wrap gap-x-8 gap-y-3 border-t border-paper/15 pt-8 text-[15px] text-paper/70">
        <li v-for="link in profile.links" :key="link.label">
          <a :href="link.href" target="_blank" rel="noopener" class="transition-colors hover:text-paper">{{ link.label }} ↗</a>
        </li>
        <li>
          <a :href="site.resumePdf" download class="transition-colors hover:text-paper">Resume PDF ↓</a>
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { profile, site } from "~/data/profile";

const copied = ref(false);

const copyEmail = async () => {
  try {
    await navigator.clipboard.writeText(profile.email);
    copied.value = true;
    setTimeout(() => (copied.value = false), 2000);
  } catch {
    window.location.href = `mailto:${profile.email}`;
  }
};
</script>
