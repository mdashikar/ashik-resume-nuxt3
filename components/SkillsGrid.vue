<template>
  <section id="skills" class="container-site py-20 sm:py-28">
    <SectionHeading index="03" label="Toolbox">
      Mostly TypeScript and Node, running on AWS, provisioned with Terraform.
    </SectionHeading>

    <div class="grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2">
      <div v-for="group in skills" :key="group.group" class="bg-paper p-6 sm:p-8">
        <h3 class="eyebrow">{{ group.group }}</h3>
        <ul class="mt-5 flex flex-wrap gap-2">
          <li
            v-for="item in group.items"
            :key="item"
            class="rounded-lg border border-line bg-surface px-3 py-1.5 text-sm"
          >
            {{ item }}
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { skills } from "~/data/profile";
</script>
