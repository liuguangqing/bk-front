const pkg = require('./package')

module.exports = {
  // mode: 'spa',
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: '香菊网 - 🍊 香菊网，前端技术博客(xiangjv.top)',
    meta: [{
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        name: 'baidu-site-verification',
        content: 'eizAp8z7ct'
      },
      {
        hid: 'keywords',
        name: 'keywords',
        content: 'xiangjv.top 博客 香菊 香菊网 nuxt CSDN h5 xiangjv'
      },
      {
        hid: 'description',
        name: 'description',
        content: 'xiangjv.top 提供给自己做笔记和联系的前端学习博客，nuxt框架 nodeJs+express  nginx+mysql'
      }, 
    ],
    link: [{
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.ico'
    }],
    script:[
      {
        src: '/js/share.js'
      }
      // ,{
      //   src: '/js/changyan.js'
      // }
    ]
  },

  /*
   ** Customize the progress-bar color
   */
  loading: {
    color: '#000'
  },

  /*
   ** Global CSS
   */
  css: [
    'element-ui/lib/theme-chalk/index.css',
    '~/assets/css/reset.css',
    '~/assets/css/style.css',
    // 'prismjs/themes/prism-dark.css',
  ],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    { src: '@/plugins/element-ui'},
    { src: '@/plugins/tongji.js', ssr: false },
    { src: '@/plugins/prism.js'},
    { src: '@/plugins/filters.js'},
    
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
        // target: 'http://172.20.54.151:2345/api',
        target: 'http://47.107.171.45:2345/api',
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
  },
  router: {
    // mode: 'hash'
  }
  // generate: {
  //   routes: function () {
  //     return axios.get('https://my-api/users')
  //     .then((res) => {
  //       return res.data.map((user) => {
  //         return '/users/' + user.id
  //       })
  //     })
  //   }
  // }
}