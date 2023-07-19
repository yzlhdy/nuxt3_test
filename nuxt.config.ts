// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@unocss/nuxt',
    'nuxt-icon',
    '@nuxtjs/color-mode',
    '@nuxt/image',
    '@nuxtjs/i18n',
    '@vee-validate/nuxt',
  ],
  devtools: { enabled: true },
  app: {
    pageTransition: { name: 'page', mode: 'out-in' }
  },
  build: {
    transpile:
      process.env.NODE_ENV === 'production'
        ? [
          'naive-ui',
          'vueuc',
          '@css-render/vue3-ssr',
          '@juggle/resize-observer',
          'gsap'
        ]
        : ['@juggle/resize-observer']
  },
  vite: {
    optimizeDeps: {
      include:
        process.env.NODE_ENV === 'development'
          ? ['naive-ui', 'vueuc', 'date-fns-tz/esm/formatInTimeZone']
          : []
    }
  },
  i18n: {
    lazy: true,
    langDir: 'locales',
    defaultLocale: 'en-US',
    strategy: 'prefix_except_default',
    locales: [{
      code: 'en-US',
      iso: "en-US",
      name: "English",
      file: "en-US.json",
    },
    {
      code: 'zh-CN',
      iso: "zh-CN",
      name: "简体中文",
      file: "zh-CN.json",
    }
    ]


  }

})
