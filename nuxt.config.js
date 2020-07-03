const OG_TITLE = 'Newsgradient BiH'
const OG_DESCRIPTION =
  'Top pet događaja o kojima je izvještavala bosanskohercegovačka štampa poredani su prema strančkoj pristranosti.'
const OG_IMAGE = 'TODO og image'

export default {
  mode: 'spa',
  /*
   ** Headers of the page
   */
  head: {
    title: OG_TITLE,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'description', content: OG_DESCRIPTION },
      { property: 'og:image', content: OG_IMAGE },
      { property: 'og:image:width', content: '1200' },
      { property: 'og:image:height', content: '628' },
      { property: 'og:title', content: OG_TITLE },
      { property: 'og:description', content: OG_DESCRIPTION },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: OG_TITLE },
      { name: 'twitter:image', content: OG_IMAGE },
      { name: 'twitter:description', content: OG_DESCRIPTION }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://use.typekit.net/rwb3jbn.css' }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#e50001' },
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
