<template>
  <section class="container">
    <header>
      <h2>{{essayDetail.es_title}}</h2>
      <div>{{essayDetail.es_author}} 发表于： {{formatDate(essayDetail.es_isTime)}} 分类： {{essayDetail.es_tags}} {{essayDetail.es_view}} {{essayDetail.es_good}}</div>
    </header>
    <main class="context">
      <div class="conList">
        <div class="essayContent" v-html="essayDetail.es_content"></div>
      </div>
      <div class="tagList">
        <span>标签：</span>
        <i v-for="(ite,ind) in essayDetail.es_tagList" :key="ind">{{ite}}</i>
      </div>
      <!-- <div class="pas">
        <span>关键词:</span>
        <i v-for="(ite,ind) in essayDetail.es_pasList" :key="ind">{{ite}}</i>
      </div>-->
    </main>
    <div>
      <!-- 安装畅言 -->
      <changyan :sendEssayId="essayDetail.es_id"/>

    </div>
  </section>
</template>
<script>
// import contleft from '~/components/contleft'
import changyan from '~/components/changyan'
import servers from '~/plugins/axios'
import { formatDate } from '~/assets/js/base.js'
export default {
  async asyncData ({ params, error, store }) {
    // 文章详情
      let article = await  servers.getessayDetial({ essayId: params.indexDetail })
      article.data.es_content = article.data.es_content.replace(/!!&!!/g, "'")
      article.data.es_tagList = article.data.es_tags.split(',')
      article.data.es_pasList = article.data.es_keywords.split(',')
      return {
        essayDetail: article.data
      }
  },
  head() {
    return {
      title: `${this.essayDetail.es_title} - 🍊 香菊网，前端技术博客(xiangjv.top)`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.essayDetail.es_description
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content: this.essayDetail.es_keywords
        }
      ]
    }
  },
  data() {
    return {
      value2: null,
      value5: 3.7,
      essayId: '',
      essayDetail: {},
      load: ''
    }
  },
  components: {
    changyan
  },
  created() {
    
  },
  mounted() {
    // this.load = this.$loading({ fullscreen: true })
    console.log(this.$route)
    this.essayId = this.$route.params.indexDetail
    var createNs = function() {
      // if (window.changyan !== undefined) {
      //   return;
      // } else {
      window.changyan = {}
      window.changyan.api = {}
      window.changyan.api.config = function(conf) {
        window.changyan.api.tmpIsvPageConfig = conf
      }
      window.changyan.api.ready = function(fn) {
        window.changyan.api.tmpHandles = window.changyan.api.tmpHandles || []
        window.changyan.api.tmpHandles.push(fn)
      }
      window.changyan.ready = function(fn) {
        if (window.changyan.rendered) {
          fn && fn()
        } else {
          window.changyan.tmpHandles = window.changyan.tmpHandles || []
          window.changyan.tmpHandles.push(fn)
        }
      }
      // }
    }

    var createMobileNs = function() {
      if (window.cyan) {
        return
      }
      window.cyan = {}
      window.cyan.api = {}
      window.cyan.api.ready = function(fn) {
        window.cyan.api.tmpHandles = window.cyan.api.tmpHandles || []
        window.cyan.api.tmpHandles.push(fn)
      }
    }
    var loadVersionJs = function() {
      var loadJs = function(src, fun) {
        var head =
          document.getElementsByTagName('head')[0] ||
          document.head ||
          document.documentElement

        var script = document.createElement('script')
        script.setAttribute('type', 'text/javascript')
        script.setAttribute('charset', 'UTF-8')
        script.setAttribute('src', src)

        if (typeof fun === 'function') {
          if (window.attachEvent) {
            script.onreadystatechange = function() {
              var r = script.readyState
              if (r === 'loaded' || r === 'complete') {
                script.onreadystatechange = null
                fun()
              }
            }
          } else {
            script.onload = fun
          }
        }

        head.appendChild(script)
      }

      var ver = +new Date() + window.Math.random().toFixed(16)
      var url = 'https://changyan.itc.cn/upload/version-v3.js?' + ver
      loadJs(url)
    }
    createNs()
    createMobileNs()
    loadVersionJs()
    setTimeout(() => {
      // Vue.use(VuePrism , {pscss})
      Prism.highlightAll()
    }, 500)
  },
  methods: {
    formatDate(date, fmt) {
      return formatDate(date, fmt)
    },
    // async getGoodsDetil() {
    //   let params = { essayId: this.essayId }
    //   let data = await servers.getessayDetial(params)
    //   this.load.close()
    //   data.data.es_content = data.data.es_content.replace(/!!&!!/g, "'")
    //   data.data.es_tagList = data.data.es_tags.split(',')
    //   data.data.es_pasList = data.data.es_keywords.split(',')
    //   this.essayDetail = data.data
    //   console.log('essayDetail', this.essayDetail)
    // }
  }
}
</script>
<style scoped lang="less">
.container {
  padding: 10px 10px 0;
  min-height: 900px !important;
  font-family: PingFangSC-Regular, Microsoft Yahei;
}
.contcent {
  margin: auto;
}
.el-col {
  box-sizing: border-box;
  padding-right: 10px;
}
.el-col .grid-content {
  height: 200px;
  background-color: rgba(250, 250, 250, 0.9);
}
header {
  border-bottom: 1px solid #c1c1c1;
}
header > h2 {
  font-size: 36px;
  color: #555;
  font-weight: 600;
  margin-bottom: 25px;
}
header > div {
  padding: 10px 0;
  font-size: 16px;
  color: #888;
}
main {
  padding: 20px 0;
  line-height: 24px;
}
.sharetitle {
  float: left;
  margin-top: 2px;
}
.tagList {
  margin-top: 20px;
}
.tagList i,
.pas i {
  display: inline-block;
  margin-right: 10px;
  padding: 0px 6px;
  font-size: 13px;
  background-color: skyblue;
  border-radius: 4px;
  color: #fff;
}


</style>
