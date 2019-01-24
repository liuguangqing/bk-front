<template>
  <section class="container">

    <index-list v-for="(ite,ind) in dataList" :key="ind" :sendIte="ite"/>
    <div class="paging">
      <div class="paging_child"></div>
      <form action id="page-go">
        <input type="text" id="page-num">
        <input type="submit" id="goto" value="Go">
      </form>
    </div>
  </section>
</template>
<script>
import contleft from '~/components/contleft'
import indexList from '~/components/indexList'
import {SimplePagination} from '~/assets/js/SimplePagination'

import servers from '../../plugins/axios'
export default {
  components: {
    contleft,
    indexList
  },
  data(){
    return {
      dataList: []
    }
  },
  mounted() {
    this.getessay()
    const slp = new SimplePagination(50)
    slp.init({
      container: '.paging_child',
      btnDom: 'a',
      routerhead: '?pageNo=',
      dataNumberAttr: 'href',
      maxShowBtnCount: 3,
      onPageChange: state => {
        console.log('pagination change:', state.pageNumber)
      }
    })
    console.log(this.$route.query)
    if(this.$route.query.pageNo){
      slp.gotoPage(this.$route.query.pageNo*1)
    }
    document.getElementById('page-go').addEventListener('submit', e => {
      e.preventDefault()
      slp.gotoPage(+document.getElementById('page-num').value)
    })
  },
  methods: {
    async getessay(){
      let data = await servers.getessay()
      this.dataList = data.data
      console.log(data)
    }
  },
}
</script>
<style scoped lang="less">
.container {
  padding: 10px 20px 0;
  // height: 900px !important;
  .paging {
    text-align: center;
    padding: 10px 0;
  }
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
</style>