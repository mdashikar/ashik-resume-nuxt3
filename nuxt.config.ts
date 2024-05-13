

export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss"],
  tailwindcss: {
    // add '~tailwind.config` alias
    exposeConfig: true,
  },
  nitro: {
    prerender: {
      autoSubfolderIndex: false
    }
  }
});


