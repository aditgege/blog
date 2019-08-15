import pkg from './package'
import Contents from './contents/index.js'
const appTitle = `alakazam`
const productionUrl = 'https://alakazam.netlify.com/'
const path = require('path')
const routes = Contents.map(item => {
  item = `/${item}`
  return item
})

export default {
  mode: 'spa',

  /*
   ** Headers of the page
   */
  head: {
    title: `${appTitle}`,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description },

      { name: 'theme-color', content: '#68B2A0' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    ],
    noscript: [
      {
        innerHTML: 'This Website requires Javascript.',
        body: true
      }
    ]
  },
  generate: {
    routes
  },

  /*
   ** Customize the progress-bar color
   */
  loading: {
    color: '#50fa7b',
    height: '4px',
    continuous: true
  },

  /*
   ** Global CSS
   */
  css: [
    'node_modules/modern-normalize/modern-normalize.css',
    './assets/scss/global.scss'
  ],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    { src: '~/plugins/lazyload', ssr: false }
  ],
  sitemap: {
    hostname: productionUrl,
    cacheTime: 1000 * 60 * 15,
    gzip: true
  },
  webfontloader: {
    google: {
      families: ['Roboto Slab:400,700']
    }
  },
  /*
   ** Nuxt.js modules
   */
  modules: [
    '@nuxtjs/pwa',
    'nuxt-webfontloader',
    '@nuxtjs/sitemap',
    ['@nuxtjs/google-adsense', {
      id: 'ca-pub-4261922086288845'
    }]
  ],

  /*
   ** Build configuration
   */
  build: {
    postcss: {
      plugins: [
        require('autoprefixer')({
          browsers: ['last 2 versions']
        })
      ],
      preset: {
        features: {
          customProperties: false
        }
      }
    },
    /*
     ** You can extend webpack config here
     */
    extend (config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }

      config.module.rules.push({
        test: /\.md$/,
        loader: 'frontmatter-markdown-loader',
        include: path.resolve(__dirname, 'contents'),
        options: {
          vue: {
            root: 'content-markdown'
          }
        }
      })
    }
  }
}
