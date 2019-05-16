<template>
  <section class="container">
    <header>
      <h2>{{essayDetail.es_title}}</h2>
      <div>{{essayDetail.es_author}} 发表于： {{formatDate(essayDetail.es_isTime)}} 分类： <i v-for="(ite,ind) in essayDetail.es_tagList" :key="ind">{{ite}} &nbsp;</i> </div>
      <!-- {{essayDetail.es_view}} {{essayDetail.es_good}} -->
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
    <!-- 篇幅 -->
    <div class="essayList">
      <div>
        <a :href="prveNext.next?'/indexDetail/' + prveNext.next.es_id:''" target="_bank">上一篇：{{prveNext.next?prveNext.next.es_title:'已经是第一篇'}}</a>
        <a :href="prveNext.prev?'/indexDetail/' + prveNext.prev.es_id:''" target="_bank">下一篇：{{prveNext.prev?prveNext.prev.es_title:'已经是最后一一篇'}}</a>
      </div>
    </div>
    <!-- 安装畅言 -->
    <div class="changyanBox">
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
    console.log('进入详情',params.indexDetail)
    let article = await  servers.getessayDetial({ essayId: params.indexDetail })
    article.data.es_content = article.data.es_content.replace(/!!&!!/g, "'")
    article.data.es_tagList = article.data.es_tags.split(',')
    article.data.es_pasList = article.data.es_keywords.split(',')
    let essays = await  servers.getessayPage({ pageType: 'all' })
    let currentPage = 0;
    essays.data.forEach((e , i) => {
      if(e.es_id == params.indexDetail) {
        currentPage = i
      }
    });
    let prveNext = { prev: essays.data[currentPage - 1]?essays.data[currentPage - 1]:'' , next: essays.data[currentPage + 1]?essays.data[currentPage + 1]:'' }
    return {
      essayDetail: article.data,
      prveNext
    }
  },
  head() {
    return {
      title: `${this.essayDetail.es_title} - 🍊 技术分享，前端技术博客(xiangjv.top)`,
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
    let essays = servers.getessayPage({ pageType: 'all' }).data
  },
  mounted() {
    console.log(this.$route)
    this.essayId = this.$route.params.indexDetail
    var createNs = function() {

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
      Prism.highlightAll()
    }, 500)
  },
  methods: {
    formatDate(date, fmt) {
      return formatDate(date, fmt)
    },
  }
}
</script>
<style scoped lang="less">
.container {
  // padding: 10px 10px 0;
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
header {
  border-bottom: 1px solid #c1c1c1;
  padding:0 10px;
}
header > h2 {
  font-size: 25px;
  color: #555;
  font-weight: 400;
  margin-bottom: 25px;
}
header > div {
  padding: 10px 0;
  font-size: 14px;
  color: #888;
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
main {
  padding: 20px 10px;
  line-height: 24px;
  border-radius: 4px;
  color: #444;
  font-size: 16px;
  /deep/ img {
    max-width: 100% !important;
  }
  
}
.essayList {
  padding: 16px  0 ;
  background: rgba(155, 155, 155, 0.3);
  div {
    padding: 20px 0;
    border-radius: 4px;
    background-color: rgba(250, 250, 250, 0.93);
    a {
      padding:4px 10px;
      color: #409EFF;
    }
  }

}
.changyanBox{
  padding: 0 10px ;
  border-radius: 4px;
  background-color: rgba(250, 250, 250, 0.93);
}
</style>
