// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['assets/style/main.css'],
  modules: [
    [
      '@pinia/nuxt',
      { autoImports: ['defineStore'] },
    ],
    '@vueuse/nuxt',
  ],

})
