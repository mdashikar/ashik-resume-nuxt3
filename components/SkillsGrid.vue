<template>
  <PageSection id="skills" title="Skills">
    <dl class="divide-y divide-line border-y border-line">
      <div v-for="group in skills" :key="group.group" class="grid gap-x-8 gap-y-3 py-6 lg:grid-cols-[9.5rem_minmax(0,1fr)]">
        <dt class="label pt-1.5">{{ group.group }}</dt>
        <dd>
          <ul class="flex flex-wrap gap-x-2 gap-y-2">
            <li v-for="item in group.items" :key="item" class="rounded-[3px] border border-line bg-surface px-2.5 py-1 text-[15px]">
              {{ item }}
            </li>
          </ul>
        </dd>
      </div>
    </dl>
  </PageSection>
</template>

<script setup lang="ts">
import { skills } from "~/data/profile";
</script>
