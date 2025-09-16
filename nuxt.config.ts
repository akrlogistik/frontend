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
  modules: ['@primevue/nuxt-module','vue-yandex-maps/nuxt', ['nuxt-mail', {
    message: {
      to: 'ceo@akrlog.ru',
    },
    smtp: {
      service: 'timeweb',
      auth: {
        user: 'ceo@akrlog.ru',
        pass: '$8IM;u{{hap)CB',
      },
      host: "smtp.timeweb.ru",
      port: 465,
      secure: true,
      requireTLS: true,
    },
  }]],
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
  yandexMaps: {
    apikey: '945f01a7-a58e-47ff-8c0a-cda2f3d720c0',
  },
})