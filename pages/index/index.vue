<template>
  <section class="container">
    <div v-if="showSearch" class="searchTit">搜索结果：共 {{dataList.length}} 条与  <span style="color:red;">{{searchTxt}}</span> 相关的文章</div>
    <index-list v-for="(ite,ind) in dataList" :key="ind" :sendIte="ite"/>
    <div class="paging">
      <div class="block" v-if="!showSearch">
        <el-pagination
          layout="total, prev, pager, next, jumper"
          :pager-count="7"
          :total="allessay"
          @current-change="currentChange"
          :current-page="currentPage"
          :page-size="7">
        </el-pagination>
      </div>
    </div>
  </section>
</template>
<script>
import indexList from '~/components/indexList'
import { SimplePagination } from '~/assets/js/SimplePagination'
import servers from '~/plugins/axios'

export default {
  async asyncData ({ params, error, store }) {
    console.log('首页index', params)
    let sendParams = {}
    sendParams.pageType = 'all'
    sendParams.pageNow = 1
    sendParams.pageSize = 7
    console.log('首页index',sendParams)
    // 文章列表
    let dataList = await servers.getessayPage(sendParams)
    console.log('dataList.data', dataList.data)
    let currentPage = sendParams.pageNow
    return {
      dataList: dataList.data,
      currentPage: currentPage
    }
  },
  components: {
    indexList,
  },
  data() {
    return {
      dataList: [],
      pageType: '',
      params: {},
      allessay: 0,
      currentPage: 1,
      showSearch: false,
      searchTxt: ''
    }
  },
  watch: {
　　// 利用watch方法检测路由变化：
　　'$route': function (to, from) {
      console.log('路由刷新index' , to ,from)
      if (this.$route.path == '/' && this.$route.query.searText) {
        this.searchWord()
      }else if (this.$route.path == '/') {
        this.pageInit()
      }
      let scrollgo = document
        .getElementsByClassName('conttall')[0]
        .scrollTo(0, 0)
　　}
  },
  created() {
    this.pageInit()
    // 搜索词
    this.searchWord()
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
    // 页码初始化
    async pageInit() {
      // 文章页码
      let getessayTiao = await servers.getessayPage({pageType: 'all'})      
      let allessay = getessayTiao.data.length
      this.allessay = allessay
    },
    // 选择页数
    currentChange(e) {
      console.log('currentChange', e)
      this.currentPage = e
      this.$router.push('/home/'+'all'+'-' + e)
    },
    async searchWord () {
      this.searchTxt = this.$route.query.searText
      if (this.searchTxt) {
        let getessayTiao = await servers.searchPage({Val: this.searchTxt})      
        let allessay = getessayTiao.data
        
        if(allessay && allessay.length > 0) {
          this.showSearch = true
          this.dataList = allessay 
        }else {
          this.$message('没有搜索到相关文章');
        }
      }
    }
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
.searchTit {
  margin-bottom: 20px;
  background-color: #f0f0f0;
  line-height:30px;
  padding-left:8px;
  font-size:14px;
}
</style>
<style>
  #newBridge .icon-right-center{
    top: 85% !important;
  }
</style>