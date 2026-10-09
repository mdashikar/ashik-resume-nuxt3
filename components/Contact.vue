<template>
  <PageSection id="contact" title="Contact">
    <p class="max-w-[52ch] text-xl leading-snug">
      I'm looking for senior and lead backend roles, remote or on-site. I'm happy to relocate, and EU work sponsorship
      is welcome.
    </p>

    <div class="mt-10 border-y border-line py-8">
      <p class="label">Email</p>
      <div class="mt-3 flex flex-wrap items-center gap-x-6 gap-y-4">
        <a
          :href="`mailto:${profile.email}`"
          class="font-display break-all text-2xl font-bold tracking-[-0.02em] transition-colors hover:text-accent sm:text-4xl"
        >
          {{ profile.email }}
        </a>
        <button type="button" class="btn-ghost !py-2" @click="copyEmail">
          {{ copied ? "Copied" : "Copy address" }}
        </button>
      </div>
    </div>

    <dl class="mt-8 grid gap-x-8 gap-y-4 sm:grid-cols-2">
      <div v-for="link in profile.links" :key="link.label" class="min-w-0">
        <dt class="label">{{ link.label }}</dt>
        <dd class="mt-1 truncate">
          <a :href="link.href" target="_blank" rel="noopener" class="link">{{ link.handle }}</a>
        </dd>
      </div>
    </dl>
  </PageSection>
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
