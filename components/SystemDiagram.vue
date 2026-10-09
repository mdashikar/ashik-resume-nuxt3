<template>
  <figure class="border border-line bg-surface">
    <div class="flex flex-wrap items-center justify-between gap-x-6 gap-y-2 border-b border-line px-4 py-3 sm:px-6">
      <p class="text-[15px] font-semibold">
        Consently in production
        <span class="font-normal text-muted">· consent management platform</span>
      </p>
      <ul class="flex flex-wrap gap-x-5 gap-y-1 font-mono text-[11px] text-muted tabular">
        <li><span class="text-ink">920+</span> clients</li>
        <li><span class="text-ink">894</span> domains</li>
        <li class="inline-flex items-center gap-1.5">
          <span class="h-1.5 w-1.5 rounded-full bg-ok" aria-hidden="true" /><span class="text-ink">99.99%</span> uptime
        </li>
      </ul>
    </div>

    <div class="px-3 py-5 sm:px-6 sm:py-7">
      <!-- Wide layout: reads left to right -->
      <svg
        class="hidden h-auto w-full text-ink lg:block"
        viewBox="0 0 980 300"
        role="img"
        aria-label="Customer websites on 894 domains send 672K+ consents a month to the Consent API on AWS ECS. The API writes consent records to MongoDB and enqueues jobs on a BullMQ and Redis queue, which workers consume to run compliance jobs. Everything behind the API is managed with Terraform."
      >
        <defs>
          <marker id="arrow-wide" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
            <path d="M0 0L10 5L0 10z" fill="currentColor" />
          </marker>
          <marker id="arrow-wide-accent" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
            <path d="M0 0L10 5L0 10z" class="fill-accent" />
          </marker>
        </defs>

        <!-- Terraform boundary -->
        <rect x="330" y="14" width="640" height="276" rx="6" fill="none" class="stroke-line" stroke-width="1.5" stroke-dasharray="6 6" />
        <text x="346" y="36" class="fill-muted font-mono" font-size="10" letter-spacing="0.8">TERRAFORM-MANAGED</text>

        <!-- Many customer sites -->
        <rect x="22" y="48" width="220" height="76" rx="4" class="fill-surface stroke-line" stroke-width="1.5" />
        <rect x="16" y="54" width="220" height="76" rx="4" class="fill-surface stroke-line" stroke-width="1.5" />
        <g>
          <rect x="10" y="60" width="220" height="76" rx="4" class="fill-surface" stroke="currentColor" stroke-width="1.5" />
          <text x="26" y="92" fill="currentColor" font-size="15" font-weight="600">Customer websites</text>
          <text x="26" y="116" class="fill-muted font-mono" font-size="10.5">894 domains · 11M+ views/mo</text>
        </g>

        <g v-for="node in wideNodes" :key="node.title">
          <rect :x="node.x" :y="node.y" width="220" height="76" rx="4" class="fill-surface" stroke="currentColor" stroke-width="1.5" />
          <text :x="node.x + 16" :y="node.y + 32" fill="currentColor" font-size="15" font-weight="600">{{ node.title }}</text>
          <text :x="node.x + 16" :y="node.y + 56" class="fill-muted font-mono" font-size="10.5">{{ node.sub }}</text>
        </g>

        <!-- Incoming consent traffic: the one highlighted path -->
        <line x1="230" y1="98" x2="366" y2="98" class="stroke-accent flow" stroke-width="2" marker-end="url(#arrow-wide-accent)" />
        <text x="274" y="70" text-anchor="middle" class="fill-accent tabular" font-size="14" font-weight="700">672K+</text>
        <text x="274" y="86" text-anchor="middle" class="fill-muted font-mono" font-size="10">consents/mo</text>

        <line x1="590" y1="98" x2="716" y2="98" stroke="currentColor" stroke-width="1.5" marker-end="url(#arrow-wide)" />
        <text x="655" y="88" text-anchor="middle" class="fill-muted font-mono" font-size="10.5">writes</text>

        <line x1="480" y1="136" x2="480" y2="192" stroke="currentColor" stroke-width="1.5" marker-end="url(#arrow-wide)" />
        <text x="492" y="170" class="fill-muted font-mono" font-size="10.5">enqueues jobs</text>

        <line x1="590" y1="234" x2="716" y2="234" stroke="currentColor" stroke-width="1.5" marker-end="url(#arrow-wide)" />
        <text x="655" y="224" text-anchor="middle" class="fill-muted font-mono" font-size="10.5">consumes</text>
      </svg>

      <!-- Tall layout for narrow screens: reads top to bottom -->
      <svg
        class="mx-auto block h-auto w-full max-w-sm text-ink lg:hidden"
        viewBox="0 0 340 512"
        role="img"
        aria-label="Customer websites on 894 domains send 672K+ consents a month to the Consent API on AWS ECS. The API writes consent records to MongoDB and enqueues jobs on a BullMQ and Redis queue, which workers consume to run compliance jobs. Everything behind the API is managed with Terraform."
      >
        <defs>
          <marker id="arrow-tall" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
            <path d="M0 0L10 5L0 10z" fill="currentColor" />
          </marker>
          <marker id="arrow-tall-accent" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
            <path d="M0 0L10 5L0 10z" class="fill-accent" />
          </marker>
        </defs>

        <rect x="8" y="122" width="324" height="382" rx="6" fill="none" class="stroke-line" stroke-width="1.5" stroke-dasharray="6 6" />
        <text x="20" y="142" class="fill-muted font-mono" font-size="9.5" letter-spacing="0.8">TERRAFORM-MANAGED</text>

        <rect x="32" y="2" width="296" height="64" rx="4" class="fill-surface stroke-line" stroke-width="1.5" />
        <rect x="26" y="7" width="296" height="64" rx="4" class="fill-surface stroke-line" stroke-width="1.5" />
        <rect x="20" y="12" width="296" height="64" rx="4" class="fill-surface" stroke="currentColor" stroke-width="1.5" />
        <text x="34" y="38" fill="currentColor" font-size="14" font-weight="600">Customer websites</text>
        <text x="34" y="60" class="fill-muted font-mono" font-size="10">894 domains · 11M+ views/mo</text>

        <g v-for="node in tallNodes" :key="node.title">
          <rect :x="node.x" :y="node.y" :width="node.w" height="64" rx="4" class="fill-surface" stroke="currentColor" stroke-width="1.5" />
          <text :x="node.x + 14" :y="node.y + 26" fill="currentColor" font-size="14" font-weight="600">{{ node.title }}</text>
          <text :x="node.x + 14" :y="node.y + 48" class="fill-muted font-mono" font-size="10">{{ node.sub }}</text>
        </g>

        <line x1="168" y1="76" x2="168" y2="152" class="stroke-accent flow" stroke-width="2" marker-end="url(#arrow-tall-accent)" />
        <text x="180" y="96" class="fill-accent tabular" font-size="13" font-weight="700">672K+</text>
        <text x="180" y="111" class="fill-muted font-mono" font-size="9.5">consents/mo</text>

        <line x1="90" y1="220" x2="90" y2="286" stroke="currentColor" stroke-width="1.5" marker-end="url(#arrow-tall)" />
        <text x="100" y="258" class="fill-muted font-mono" font-size="9.5">writes</text>

        <line x1="250" y1="220" x2="250" y2="286" stroke="currentColor" stroke-width="1.5" marker-end="url(#arrow-tall)" />
        <text x="260" y="258" class="fill-muted font-mono" font-size="9.5">enqueues</text>

        <line x1="250" y1="354" x2="250" y2="420" stroke="currentColor" stroke-width="1.5" marker-end="url(#arrow-tall)" />
        <text x="260" y="392" class="fill-muted font-mono" font-size="9.5">consumes</text>
      </svg>
    </div>

    <figcaption class="border-t border-line px-4 py-3 text-sm text-muted sm:px-6">
      A simplified view of the Consently backend, which I designed, built and run.
    </figcaption>
  </figure>
</template>

<script setup lang="ts">
const wideNodes = [
  { x: 370, y: 60, title: "Consent API", sub: "Node.js · Express · AWS ECS" },
  { x: 720, y: 60, title: "MongoDB", sub: "consent records" },
  { x: 370, y: 196, title: "Job queue", sub: "BullMQ · Redis" },
  { x: 720, y: 196, title: "Workers", sub: "compliance jobs" },
];

const tallNodes = [
  { x: 20, y: 156, w: 300, title: "Consent API", sub: "Node.js · Express on AWS ECS" },
  { x: 20, y: 290, w: 140, title: "MongoDB", sub: "consent records" },
  { x: 180, y: 290, w: 140, title: "Job queue", sub: "BullMQ · Redis" },
  { x: 180, y: 424, w: 140, title: "Workers", sub: "compliance jobs" },
];
</script>

<style scoped>
svg text.font-mono {
  font-stretch: 87.5%;
}

.flow {
  stroke-dasharray: 6 5;
  animation: flow 1.2s linear infinite;
}

@keyframes flow {
  to {
    stroke-dashoffset: -22;
  }
}
</style>
