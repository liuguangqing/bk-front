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
        <span>所属标签：</span>
        <a href="" v-for="(ite,ind) in essayDetail.es_tagList" :key="ind">{{ite}}</a>
      </div>
      <!-- <div class="shareBox">
        <div class="sharetitle">分享内容到：</div>
        <div class="bdsharebuttonbox">
          <a href="#" class="bds_more" data-cmd="more"></a>
          <a href="#" class="bds_qzone" data-cmd="qzone"></a>
          <a href="#" class="bds_tsina" data-cmd="tsina"></a>
          <a href="#" class="bds_tqq" data-cmd="tqq"></a>
          <a href="#" class="bds_renren" data-cmd="renren"></a>
          <a href="#" class="bds_weixin" data-cmd="weixin"></a>
        </div>
      </div> -->
    </main>
    <div>
      <!-- <el-rate v-model="value5" disabled show-score text-color="#ff9900" score-template="{value}"></el-rate> -->
      <!-- <div class="block">
        <el-rate v-model="value2" :colors="['#99A9BF', '#F7BA2A', '#FF9900']"></el-rate>
      </div> -->
    </div>
    <div class="bdsharebuttonbox"><a href="#" class="bds_more" data-cmd="more"></a><a href="#" class="bds_qzone" data-cmd="qzone" title="分享到QQ空间"></a><a href="#" class="bds_tsina" data-cmd="tsina" title="分享到新浪微博"></a><a href="#" class="bds_tqq" data-cmd="tqq" title="分享到腾讯微博"></a><a href="#" class="bds_renren" data-cmd="renren" title="分享到人人网"></a><a href="#" class="bds_weixin" data-cmd="weixin" title="分享到微信"></a></div>
    <!-- <script>window._bd_share_config={"common":{"bdSnsKey":{},"bdText":"","bdMini":"2","bdPic":"","bdStyle":"0","bdSize":"16"},"share":{}};with(document)0[(getElementsByTagName('head')[0]||body).appendChild(createElement('script')).src='http://bdimg.share.baidu.com/static/api/js/share.js?v=89860593.js?cdnversion='+~(-new Date()/36e5)];</script> -->
  </section>
</template>
<script>
import contleft from '~/components/contleft'
import servers from '~/plugins/axios'
import { formatDate } from '~/assets/js/base.js'
export default {
  head() {
    return {
      title: this.essayDetail.es_title,
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
    contleft
  },
  mounted() {
    this.load = this.$loading({ fullscreen: true })
    console.log(this.$route)
    this.essayId = this.$route.params.indexDetail
    this.getGoodsDetil(this.essayId)
    // var block = document.getElementById('some-code')
    // Prism.highlightElement(block);
    setTimeout(() => {
      // Vue.use(VuePrism , {pscss})
      Prism.highlightAll()
    }, 500)
  },
  methods: {
    formatDate(date, fmt) {
      return formatDate(date, fmt)
    },
    async getGoodsDetil() {
      let params = { essayId: this.essayId }
      let data = await servers.getessayDetial(params)
      this.load.close()
      data.data.es_content = data.data.es_content.replace(/!!&!!/g, /'/)
      data.data.es_tagList = data.data.es_tags.split(',')
      this.essayDetail = data.data
      console.log('essayDetail',this.essayDetail)
    }
  }
}
</script>
<style scoped>
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
.tagList{
  margin-top: 4px;
}
.tagList a {
    display: inline-block;
    margin-right: 10px ; 
    padding: 2px 6px; 
    background-color: skyblue;
    border-radius: 4px;
    color: #fff;
}
pre::-webkit-scrollbar-thumb >>> {
    background-color: #eebc8e;
    border-radius: 10px;
}
</style>
