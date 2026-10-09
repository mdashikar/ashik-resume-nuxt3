<template>
  <section id="contact" class="bg-band text-on-band">
    <div class="container-site py-20 sm:py-28">
      <p class="label !text-on-band/70">Contact</p>
      <h2 class="font-display mt-3 max-w-[18ch] text-4xl font-bold tracking-[-0.035em] sm:text-6xl">
        Hiring for a senior or lead backend role?
      </h2>
      <p class="mt-5 max-w-[52ch] text-lg text-on-band/75">
        I'm available now. {{ profile.relocation }} I also like hearing from people using Feevox or Erestro.
      </p>

      <div class="mt-10 flex flex-wrap items-center gap-x-6 gap-y-4">
        <a
          :href="`mailto:${profile.email}`"
          class="font-display break-all text-2xl font-bold tracking-[-0.02em] underline decoration-accent decoration-[3px] underline-offset-[6px] sm:text-4xl"
        >
          {{ profile.email }}
        </a>
        <CopyButton :text="profile.email" label="email address" on-band />
      </div>

      <ul class="mt-14 flex flex-wrap gap-x-8 gap-y-3 border-t border-on-band/15 pt-8 text-[15px] text-on-band/75">
        <li v-for="link in profile.links" :key="link.label">
          <ExternalLink :href="link.href" class="transition-colors hover:text-on-band">{{ link.label }}</ExternalLink>
        </li>
        <li>
          <a :href="site.resumePdf" download class="transition-colors hover:text-on-band">Resume PDF</a>
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup lang="ts">
import { profile, site } from "~/data/profile";
</script>
