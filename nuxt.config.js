export default {
  mode: 'spa',
  /*
   ** Headers of the page
   */
  head: {
    title: 'Newsgradient BIH',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          'Top pet događaja o kojima je izvještavala bosanskohercegovačka štampa poredani su prema strančkoj pristranosti'
      },
      { property: 'og:image', content: 'https://imgur.com/a/xBRacq3' },
      { property: 'ogs:image:width', content: '1200' },
      { property: 'og:image:height', content: '630' },
      { property: 'og:title', content: 'Newsgradient BIH' },
      {
        property: 'og:description',
        content:
          'Top pet događaja o kojima je izvještavala bosanskohercegovačka štampa poredani su prema strančkoj pristranosti.'
      },
      { property: 'twitter:card', content: 'summary' },
      { property: 'twitter:title', content: 'Newsgradient BIH' },
      {
        property: 'twitter:description',
        content:
          'Top pet događaja o kojima je izvještavala bosanskohercegovačka štampa poredani su prema strančkoj pristranosti.'
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://use.typekit.net/rwb3jbn.css'
      }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: ['@/assets/style/main.scss'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    'bootstrap-vue/nuxt'
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {
    proxy: false,
    baseURL: process.env.NODE_ENV !== 'production' ? 'http://localhost:20000' : 'https://ng-api.arcus-dev.si'
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
}
