export default {
  mode: 'spa',
  /*
   ** Headers of the page
   */
  head: {
    title: 'NewsGradient',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      },
      { property: 'og:image', content: 'https://imgur.com/a/xBRacq3' },
      { property: 'ogs:image:width', content: '1200' },
      { property: 'og:image:height', content: '630' },
      { property: 'og:title', content: 'Otvorite parlamente' },
      {
        property: 'og:description',
        content:
          'Podpiši za otvaranje Parlamentarne skupštini Bosne i Hercegovine, Parlamenta Federacije BiH i Narodne skupštine Republike Srpske.'
      },
      { property: 'twitter:card', content: 'summary' },
      { property: 'twitter:title', content: 'Otvorite parlamente' },
      {
        property: 'twitter:description',
        content:
          'Podpiši za otvaranje Parlamentarne skupštini Bosne i Hercegovine, Parlamenta Federacije BiH i Narodne skupštine Republike Srpske.'
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
