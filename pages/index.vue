<template>
  <div>
    <div class="p-4">
      <div class="max-w-sm rounded overflow-hidden shadow-lg mb-4">
        <img
          class="w-full"
          src="https://tailwindcss.com/img/card-top.jpg"
          alt="Sunset in the mountains"
        />
        <div class="px-6 py-4 pb-2">
          <div class="font-bold text-xl mb-2">The Coldest Sunset</div>
          <p class="text-gray-700 text-base">
            The pain itself is a lot of pain For pleasure, no! While these
            symptoms were more enduring, there was no training present.
          </p>
        </div>
        <div class="px-6 py-4">
          <span class="badge mr-2">#photography</span>
          <span class="badge mr-2">#travel</span>
          <span class="badge">#winter</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="postcss" scoped>
.badge {
  @apply inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 cursor-pointer;
  &:hover {
    @apply bg-gray-300;
  }
}
</style>
