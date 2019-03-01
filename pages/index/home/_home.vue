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
import { SimplePagination } from '~/assets/js/SimplePagination'

import servers from '~/plugins/axios'
export default {
  components: {
    contleft,
    indexList
  },
  data() {
    return {
      dataList: [],
      pageType: '',
      params: {}
    }
  },
  mounted() {
    

    this.getessayPage()
    console.log('home')
  },
  watch: {
　　// 利用watch方法检测路由变化：
　　'$route': function (to, from) {
      this.getessayPage()
　　　// 拿到目标参数 to.query.id 去再次请求数据接口
　　}
  },
  methods: {
    geturl(getParam) {
      let paramsTemp = this.$route.params.home + ''
      if(getParam == 'type'){
        return paramsTemp.split('-')[0]
      }else if(getParam == 'pageNo'){
        return paramsTemp.split('-')[1]
      }
    },
    async getessayPage(params) {
      this.pageType = this.geturl('type')
      if (this.pageType && this.pageType != '') {
        this.params.pageType = this.pageType
      }
      this.params.pageNow = this.geturl('pageNo')
      this.params.pageSize = 3
      console.log('this.params', this.params)
      // console.log('params', params)

      let data = await servers.getessayPage(this.params)
      this.dataList = data.data
      console.log('this.dataList', this.dataList)
      this.fenPage()
    },
    fenPage() {
      let tmepUrl = location.href
      if (this.geturl('pageNo')) {
        tmepUrl = '/home/'+this.geturl('type')+'-'
      }
      console.log('tmepUrltmepUrltmepUrltmepUrltmepUrl',tmepUrl)
      const slp = new SimplePagination(50)
      slp.init({
        container: '.paging_child',
        btnDom: 'a',
        routerhead: tmepUrl,
        dataNumberAttr: 'href',
        maxShowBtnCount: 3,
        onPageChange: state => {
          console.log('pagination change New :', state.pageNumber)
          // params.pageNow = state.pageNumber
          // params.pageSize = 3
          // this.getessayPage(params)
        }
      })
      // 定位当前页
      if (this.geturl('pageNo')) {
        slp.gotoPage(this.geturl('pageNo') * 1)
      }
      document.getElementById('page-go').addEventListener('submit', e => {
        e.preventDefault()
        slp.gotoPage(+document.getElementById('page-num').value)
      })
    }
  }
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
<style>
  #newBridge .icon-right-center{
    top: 85% !important;
  }
</style>