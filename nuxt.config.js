import pkg from './package'
import Contents from './contents/index.js'

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
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description },

      { name: 'theme-color', content: '#ff0000' },
      { name: 'theme-color', content: '#bd93f9' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
      { rel: 'icon', type: 'image/png', sizes: '96x96', href: '/favicon-96x96.png' },
      { rel: 'icon', type: 'image/png', sizes: '192x192', href: '/android-icon-192x192.png' }
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
    path: '/sitemap.xml',
    hostname: 'https://blog',
    cacheTime: 1000 * 60 * 15,
    gzip: true,
    generate: true
  },
  webfontloader: {
    google: {
      families: ['Merriweather Sans:400,700']
    }
  },
  /*
   ** Nuxt.js modules
   */
  modules: [
    '@nuxtjs/pwa',
    '@nuxtjs/sitemap',
    'nuxt-webfontloader'
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
