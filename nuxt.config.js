const pkg = require('./package')

module.exports = {
  mode: 'universal',

  /*
   ** Headers of the page
   */
  head: {
    title: pkg.name,
    meta: [{
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: pkg.description
      }
    ],
    link: [{
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.ico'
    }],
  },

  /*
   ** Customize the progress-bar color
   */
  loading: {
    color: '#fff'
  },

  /*
   ** Global CSS
   */
  css: [
    'element-ui/lib/theme-chalk/index.css',
    '~/assets/css/reset.css',
    '~/assets/css/style.css'
  ],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    '@/plugins/element-ui'
  ],

  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    '@nuxtjs/axios', "@nuxtjs/proxy"
  ],
  /*
   ** Axios module configuration
   */
  // axios: {
  //   // See https://github.com/nuxt-community/axios-module#options
  //   prefix: '/api',
  //   proxy: true 
  // },
  proxy: [
    [
      '/api',{
        target: 'http://172.20.47.245:2345/api',
        changeOrigin:true,
        pathRewrite: {
        '^/api': '/'
        }
      }
    ],
    // [
    //   '/proxy', {
    //     target: 'http://172.20.47.245:2345',
    //     // target: 'http://192.168.1.29:8080',
    //     // changeOrigin:true,
    //     pathRewrite: {
    //       '^/proxy': '/'
    //     }
    //   }
    // ]
  ],
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {

    },
    rules: [{
      test: /\.less$/,
      use: ['style-loader', 'css-loader', 'less-loader']
    }]
  }
}
