<template>
  <div class="container-site py-12 sm:py-16 print:p-0">
    <article class="mx-auto max-w-4xl rounded-2xl border border-line bg-surface p-5 sm:p-12 print:rounded-none print:border-0 print:p-0">
      <header class="flex flex-col gap-8 border-b border-line pb-8 sm:flex-row sm:items-start sm:justify-between">
        <div class="min-w-0">
          <h1 class="font-display text-4xl font-bold leading-none tracking-[-0.035em] sm:text-5xl">{{ profile.name }}</h1>
          <p class="mt-3 text-lg text-muted">{{ profile.title }} · {{ profile.focus }}</p>
          <ul class="mt-5 flex flex-wrap gap-x-5 gap-y-1.5 text-[15px]">
            <li><a :href="`mailto:${profile.email}`" class="link">{{ profile.email }}</a></li>
            <li><a :href="`tel:${profile.phone.replace(/\s/g, '')}`" class="link">{{ profile.phone }}</a></li>
            <li class="text-muted">{{ profile.location }}</li>
          </ul>
          <ul class="mt-1.5 flex flex-wrap gap-x-5 gap-y-1.5 text-[15px]">
            <li><a :href="site.url" class="link">ashik.dev</a></li>
            <li v-for="link in profile.links.slice(0, 2)" :key="link.label">
              <a :href="link.href" target="_blank" rel="noopener" class="link">{{ link.handle }}</a>
            </li>
          </ul>
          <p class="mt-4 text-[15px]">
            <span class="mark font-medium">{{ profile.availability }}</span>{{ " " }}<span class="text-muted">{{ profile.relocation }}</span>
          </p>
        </div>
        <div class="no-print flex flex-none gap-2">
          <a :href="site.resumePdf" download class="btn-primary">
            <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 4v12M6 10l6 6 6-6M5 20h14" /></svg>
            Download PDF
          </a>
          <button type="button" class="btn-ghost" @click="print">Print</button>
        </div>
      </header>

      <section class="resume-section">
        <h2 class="label pt-1">Summary</h2>
        <p class="leading-relaxed">{{ profile.summary }}</p>
      </section>

      <section class="resume-section">
        <h2 class="label pt-1">Now building</h2>
        <div class="space-y-6">
          <div v-for="product in building" :key="product.name" class="break-inside-avoid">
            <div class="flex flex-col justify-between gap-1 sm:flex-row sm:items-baseline">
              <h3 class="font-semibold">
                <a :href="product.url" target="_blank" rel="noopener" class="link">{{ product.url.replace("https://", "") }}</a>
                <span class="font-normal text-muted"> · {{ product.summary }}</span>
              </h3>
              <p class="flex-none font-mono text-xs text-muted">{{ product.role }}</p>
            </div>
            <p class="mt-1.5 text-[15px] text-muted">{{ product.audience }}</p>
            <p class="mt-1 text-sm text-muted"><span class="font-medium text-ink">Features:</span> {{ product.features.join(", ") }}</p>
          </div>
        </div>
      </section>

      <section class="resume-section">
        <h2 class="label pt-1">Experience</h2>
        <div class="space-y-8">
          <div v-for="role in experience" :key="role.title + role.start" class="break-inside-avoid">
            <div class="flex flex-col justify-between gap-1 sm:flex-row sm:items-baseline">
              <h3 class="font-semibold">
                {{ role.title }} <span class="font-normal text-muted">· {{ role.company }}</span>
              </h3>
              <p class="flex-none font-mono text-xs text-muted tabular">{{ role.start }} – {{ role.end }} · {{ role.location }}</p>
            </div>
            <ul class="mt-3 list-disc space-y-1.5 pl-5 text-[15px] leading-relaxed marker:text-muted">
              <li v-for="point in role.points" :key="point">{{ point }}</li>
            </ul>
            <p v-if="role.stack.length" class="mt-2.5 text-sm text-muted">
              <span class="font-medium text-ink">Tech:</span> {{ role.stack.join(", ") }}
            </p>
          </div>
        </div>
      </section>

      <section class="resume-section">
        <h2 class="label pt-1">Shipped at Dorik</h2>
        <div class="space-y-6">
          <div v-for="item in shipped" :key="item.name" class="break-inside-avoid">
            <div class="flex flex-col justify-between gap-1 sm:flex-row sm:items-baseline">
              <h3 class="font-semibold">
                <a :href="item.url" target="_blank" rel="noopener" class="link">{{ item.url.replace("https://", "") }}</a>
                <span class="font-normal text-muted"> · {{ item.tagline }}</span>
              </h3>
              <p class="flex-none font-mono text-xs text-muted">{{ item.year }} · {{ item.role }}</p>
            </div>
            <p class="mt-1.5 text-[15px]">{{ item.summary }}</p>
            <p class="mt-1.5 text-sm text-muted"><span class="font-medium text-ink">Tech:</span> {{ item.stack.join(", ") }}</p>
          </div>
        </div>
      </section>

      <section class="resume-section">
        <h2 class="label pt-1">Skills</h2>
        <dl class="space-y-2 text-[15px]">
          <div v-for="group in skills" :key="group.group" class="grid gap-1 sm:grid-cols-[9rem_minmax(0,1fr)]">
            <dt class="font-medium">{{ group.group }}</dt>
            <dd class="text-muted">{{ group.items.join(", ") }}</dd>
          </div>
        </dl>
      </section>

      <section class="resume-section">
        <h2 class="label pt-1">Education</h2>
        <div>
          <div class="flex flex-col justify-between gap-1 sm:flex-row sm:items-baseline">
            <h3 class="font-semibold">{{ education.degree }}</h3>
            <p class="font-mono text-xs text-muted">{{ education.years }}</p>
          </div>
          <p class="text-[15px] text-muted">{{ education.school }}, {{ education.location }}</p>
          <p class="mt-2 text-sm text-muted"><span class="font-medium text-ink">Coursework:</span> {{ education.coursework }}</p>
        </div>
      </section>
    </article>
  </div>
</template>

<script setup lang="ts">
import { building, education, experience, profile, shipped, site, skills } from "~/data/profile";

usePageSeo({
  title: "Resume — Md Ashiqur Rahman, Backend Engineer",
  description:
    "Resume of Md Ashiqur Rahman: full-stack engineer with 7+ years on Node.js, AWS and Terraform. Former backend lead at Dorik, now building Feevox and Erestro. Available for senior and lead backend roles.",
  path: "/resume",
});

const print = () => window.print();
</script>

<style scoped>
.resume-section {
  @apply grid gap-4 border-b border-line py-8 last:border-0 last:pb-0 md:grid-cols-[9rem_minmax(0,1fr)];
}
</style>
