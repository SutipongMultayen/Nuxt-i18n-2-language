export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'Test-i18n2',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    'bootstrap-vue/nuxt',
    [
      'nuxt-i18n',
      {
        parsePages: false,
        pages: require('./assets/route/pages.json'),
        encodePaths: false,
      },
    ],
  ],
  /*
   ** i18n configuration
   */
  i18n: {
    locales: [
      {
        code: 'en',
        iso: 'en-US',
        name: 'English',
      },
      {
        code: 'th',
        iso: 'th-TH',
        name: 'ไทย',
      },
      {
        code: 'la',
        iso: 'la-LA',
        name: 'ລາວ',
      },
    ],
    defaultLocale: 'th',
    vueI18n: {
      messages: {
        // eslint-disable-next-line global-require
        th: require('./assets/lang/th.json'),
        // eslint-disable-next-line global-require
        en: require('./assets/lang/en.json'),
        la: require('./assets/lang/la.json'),
      },
    },
  },
  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},
}
