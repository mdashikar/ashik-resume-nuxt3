import VueGtag, { trackRouter } from 'vue-gtag-next'


export default defineNuxtPlugin((nuxtApp) => {

  nuxtApp.vueApp.use(VueGtag, {
    property: {
      id: 'G-KL523KK9E9'
    }
  })
  trackRouter(useRouter())
})
