<template>
  <section id="contact" class="container-site py-20 sm:py-28">
    <div class="relative overflow-hidden rounded-3xl bg-ink px-6 py-14 text-paper sm:px-12 sm:py-20">
      <div class="contact-glow pointer-events-none absolute inset-0" aria-hidden="true" />
      <div class="relative">
        <p class="font-mono text-xs uppercase tracking-[0.14em] text-paper/60">05 — Contact</p>
        <h2 class="mt-5 max-w-3xl text-4xl font-semibold tracking-[-0.035em] sm:text-6xl">
          Have a backend that needs to scale — or a team that needs a lead?
        </h2>
        <p class="mt-5 max-w-xl text-lg text-paper/70">
          I'm open to senior and lead engineering roles, remote or on-site, and happy to relocate. EU work sponsorship
          welcome.
        </p>

        <div class="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
          <a
            :href="`mailto:${profile.email}`"
            class="btn bg-paper text-ink hover:bg-accent hover:text-paper"
          >
            {{ profile.email }}
          </a>
          <button
            type="button"
            class="btn border border-paper/25 text-paper hover:border-paper"
            @click="copyEmail"
          >
            {{ copied ? "Copied ✓" : "Copy email" }}
          </button>
        </div>

        <ul class="mt-12 flex flex-wrap gap-x-6 gap-y-2 text-sm text-paper/70">
          <li v-for="link in profile.links" :key="link.label">
            <a :href="link.href" target="_blank" rel="noopener" class="transition-colors hover:text-paper">
              {{ link.label }} ↗
            </a>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { profile } from "~/data/profile";

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

<style scoped>
.contact-glow {
  background: radial-gradient(40rem 20rem at 100% 0%, rgb(var(--accent) / 0.35), transparent 70%);
}
</style>
