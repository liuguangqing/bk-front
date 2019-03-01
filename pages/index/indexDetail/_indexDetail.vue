<template>
  <section class="container">
    <header>
      <h2>{{essayDetail.es_title}}</h2>
      <div>{{essayDetail.es_author}} 发表于： {{essayDetail.es_isTime}} 分类： {{essayDetail.es_tags}} {{essayDetail.es_view}} {{essayDetail.es_good}}</div>
    </header>
    <main class="context">
      <div class="conList">
        <div class="essayContent" v-html="essayDetail.es_content"></div>
      </div>

      <div class="shareBox">
        <div class="sharetitle">
          分享内容到：
        </div>
        <div class="bdsharebuttonbox">
          <a href="#" class="bds_more" data-cmd="more"></a>
          <a href="#" class="bds_qzone" data-cmd="qzone"></a>
          <a href="#" class="bds_tsina" data-cmd="tsina"></a>
          <a href="#" class="bds_tqq" data-cmd="tqq"></a>
          <a href="#" class="bds_renren" data-cmd="renren"></a>
          <a href="#" class="bds_weixin" data-cmd="weixin"></a>
        </div>
      </div>
    </main>
    <div>
      <!-- <el-rate v-model="value5" disabled show-score text-color="#ff9900" score-template="{value}"></el-rate> -->
      <div class="block">
        <el-rate v-model="value2" :colors="['#99A9BF', '#F7BA2A', '#FF9900']"></el-rate>
      </div>
    </div>
  </section>
</template>
<script>
import contleft from '~/components/contleft'
import servers from '~/plugins/axios'

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
      essayDetail: {}
    }
  },
  components: {
    contleft,
  },
  mounted() {
    console.log(this.$route)
    this.essayId = this.$route.params.indexDetail
    this.getGoodsDetil(this.essayId)
    // var block = document.getElementById('some-code')
    // Prism.highlightElement(block);
    setTimeout(() => {
      // Vue.use(VuePrism , {pscss})
      Prism.highlightAll()
    }, 500);
  },
  methods: {
    async getGoodsDetil() {
      let params = { essayId: this.essayId }
      let data = await servers.getessayDetial(params)
      data.data.es_content = data.data.es_content.replace(/!!&!!/g, /'/)
      this.essayDetail = data.data
      console.log(Prism)
      // console.log('执行强制刷新', Prism.highlightAll())
      // var block = document.getElementsByClassName('essayContent')
      // Prism.highlightElement(block);
      // console.log(block)
    }
  }
}
</script>
<style scoped >
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
.sharetitle{
  float: left;
  margin-top: 2px;
}
</style>
