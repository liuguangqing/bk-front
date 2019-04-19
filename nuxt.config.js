const pkg = require('./package')

module.exports = {
  // mode: 'spa',
  mode: 'universal',

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
        content: 'xiangjv.top,博客,香菊,香菊网,nuxt,CSDN,h5,xiangjv'
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
      // 百度分享
      {src: '/js/share.js'},
      // 百度主推文章收录用
      {src: '/js/tijiao.js'},
      // 百度统计js，
      { src: '/js/tongji.js'}
    ]
  },

  // loading: { color: '#CEA75C' },
  loading: './components/Loading',

  css: [
    'element-ui/lib/theme-chalk/index.css',
    '~/assets/css/reset.css',
  ],

  plugins: [
    { src: '@/plugins/element-ui', ssr: true},
    { src: '@/plugins/prism.js', ssr: true} ,    
  ],

  /*
   ** Nuxt.js modules
   */
  modules: [
    '@nuxtjs/axios', "@nuxtjs/proxy"
  ],

  // 配置代理
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
  ],

  build: {

  },
  router: {
    // mode: 'hash'
  },
  env: {
    baseUrl: 'http://47.107.171.45:80'
    // baseUrl: 'https://www.xiangjv.top'
  }
}