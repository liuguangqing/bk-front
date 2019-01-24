<template>
  <section class="container">
    <header>
      <h2>{{essayDetail.title}}</h2>
      <div>{{essayDetail.author}} 发表于： {{essayDetail.issueTime}} 分类： {{essayDetail.tags}} {{essayDetail.view}} {{essayDetail.good}}</div>
    </header>
    <main class="context">
      <div class="conList">
        <h2>介绍</h2>
        <div>CSS Grid可轻松构建复杂的Web设计。它的工作原理是将HTML元素转换为具有行和列的网格容器，以便将子元素放置在网格中所需的位置。</div>
        <div>通过将元素的父级设置display: grid;转化为网格布局。</div>
        <img src="https://upyun.xuanmo.xin/2951/20181025221537.png" alt>
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

import servers from '../../plugins/axios'
export default {
   head () {
    return {
      title: this.essayDetail.title,
      meta: [
        { hid: 'description', name: 'description', content: "Page 1 vhgjfjyfjyfjyfyrtr" },
        { hid: 'keywords', name: 'keywords', content: 'keyword11 1, keyword 2222'},
      ],
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
    contleft
  },mounted() {
    console.log(this.$route.query)
    this.essayId = this.$route.query.essayId
    this.getGoodsDetil(this.essayId)
  },
  methods: {
    
    async getGoodsDetil(){
      let params = {essayId: this.essayId}
      let data = await servers.getessayDetial(params)
      this.essayDetail = data.data
    }
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
  .grid-content {
    height: 200px;
    background-color: rgba(250, 250, 250, 0.9);
  }
}
header {
  border-bottom: 1px solid #c1c1c1;
  & > h2 {
    font-size: 36px;
    color: #555;
  }
  & > div {
    padding: 10px 0;
    font-size: 16px;
    color: #888;
  }
}
main {
  padding: 20px 0;
  line-height: 24px;
}
</style>
