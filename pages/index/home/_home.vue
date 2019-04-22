<template>
  <section class="container">
    <index-list v-for="(ite,ind) in dataList" :key="ind" :sendIte="ite"/>
    <div class="paging">
      <div class="block">
        <el-pagination
          layout="total, prev, pager, next, jumper"
          :pager-count="5"
          :total="allessay"
          @current-change="currentChange"
          :current-page="currentPage"
        >
        </el-pagination>
      </div>
    </div>
  </section>
</template>
<script>
import contleft from '~/components/contleft'
import indexList from '~/components/indexList'
import { SimplePagination } from '~/assets/js/SimplePagination'
import servers from '~/plugins/axios'

export default {

  async asyncData ({ params, error, store }) {

    console.log('params',params.home)

    let sendParams = {}
    sendParams.pageType = params.home.split('-')[0]
    sendParams.pageNow = params.home.split('-')[1]
    sendParams.pageSize = 5
    console.log('sendParams',sendParams)
    // 文章列表
    let dataList = await servers.getessayPage(sendParams)
    // 文章页码
    let getessayTiao = await servers.getessayPage({pageType: params.home.split('-')[0]})      
    let allessay = getessayTiao.data.length
    let currentPage = params.home.split('-')[1] * 1

    return {
      dataList: dataList.data,
      allessay:allessay,
      currentPage: currentPage
    }

  },
  components: {
    contleft,
    indexList,
  },
  data() {
    return {
      dataList: [],
      pageType: '',
      params: {},
      allessay: 0,
      currentPage: 1
    }
  },
  watch: {
　　// 利用watch方法检测路由变化：
　　'$route': function (to, from) {
      console.log('路由刷新')
      let scrollgo = document
        .getElementsByClassName('conttall')[0]
        .scrollTo(0, 0)
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
    // 选择页数
    currentChange(e) {
      console.log('currentChange', e)
      this.currentPage = e
      this.$router.push('/home/'+this.geturl('type')+'-' + e)
    },
  }
}
</script>
<style scoped lang="less">
@media screen and (max-width: 450px) {
  .paging {
    overflow-y: scroll;
  }
}
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
.el-pagination{
  
  /deep/ .number {
    background-color: transparent !important;
  }
  /deep/ .btn-prev {
    background-color: transparent !important;
  }
  /deep/ .btn-next {
    background-color: transparent !important;
  }
  /deep/ .el-icon.more {
    background-color: transparent !important;
  }
}
</style>
<style>
  #newBridge .icon-right-center{
    top: 85% !important;
  }
</style>