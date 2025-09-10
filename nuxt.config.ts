// https://nuxt.com/docs/api/configuration/nuxt-config
import Aura from '@primeuix/themes/aura';
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['@/assets/scss/main.scss'],
  alias: {
    '@': '../app',
    '~': '../'
  },
  modules: ['@primevue/nuxt-module'],
  primevue: {
    components: {
        prefix: 'P',
        include: ['InputText','Select','Button','InputMask', 'Textarea', 'Form', 'FormField']
    },
    options: {
      theme: {
          preset: Aura
      }
    }
  },
})
