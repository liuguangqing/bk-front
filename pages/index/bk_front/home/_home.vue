<template>
  <section class="container">
    <index-list v-for="(ite,ind) in dataList" :key="ind" :sendIte="ite"/>
    <div class="paging">
      <div class="paging_child"></div>
      <!-- <form action id="page-go">
        <input type="text" id="page-num">
        <input type="submit" id="goto" value="Go">
      </form> -->
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
      let _this = this
      this.pageType = this.geturl('type')
      console.log(this.pageType)
      if (this.pageType && this.pageType != '') {
        this.params.pageType = this.pageType
      }
      this.params.pageNow = this.geturl('pageNo')
      this.params.pageSize = 5
      console.log('this.params', this.params)
      // console.log('params', params)
      // 导航
      // let navList = await servers.navData()
      // function fn(arrs) {
      //   let arrtemp = ''
      //   rec(arrs)
      //   function rec(arrs) {
      //     if (arrs.length > 0) {
      //       arrs.forEach(element => {
      //         if (element.rank == 'yi' && element.data.length > 0) {
      //           rec(element.data)
      //         } else {
      //           console.log(_this.pageType)
      //           if(_this.pageType == element.cont && _this.pageType != 'all') {
      //             arrtemp =  element.title
      //           }else if( _this.pageType == 'all') {
      //             arrtemp = '首页'
      //           }
      //         }
      //       })
      //     }
      //   }
      //   return arrtemp
      // }
      // let getTitle = fn(navList.data)
      // this.params.pageTypeTitle =  getTitle
      // console.log('getTitle',this.params.pageTypeTitle)


      let data = await servers.getessayPage(this.params)
      this.dataList = data.data
      console.log('this.dataList', this.dataList)
      let res  = await servers.getessayPage({pageType:this.params.pageType})
      console.log('resresresresresres', res)
      let ceiling = Math.ceil(res.data.length / this.params.pageSize)
      this.fenPage(ceiling)
    },
    fenPage(alllist) {
      console.log('alllist', alllist)
      let tmepUrl = location.href
      if (this.geturl('pageNo')) {
        tmepUrl = '/bk_front/home/'+this.geturl('type')+'-'
      }
      console.log('tmepUrltmepUrltmepUrltmepUrltmepUrl',tmepUrl)

      var slp = new SimplePagination(alllist)
      slp.init({
        container: '.paging_child',
        btnDom: 'a',
        routerhead: tmepUrl,
        dataNumberAttr: 'href',
        maxShowBtnCount: 3,
        onPageChange: state => {
          console.log('pagination change New :', state.pageNumber)
          // location.href = '/bk_front/home/' + this.geturl('type') + '-' + state.pageNumber
          // params.pageNow = state.pageNumber
          // params.pageSize = 3
          // this.getessayPage(params)
        }
      })
      // 定位当前页
      if (this.geturl('pageNo')) {
        console.log('定位到当前页')
        slp.gotoPage(this.geturl('pageNo') * 1)
      }
      // try {
      //   document.getElementById('page-go').addEventListener('submit', e => {
      //     e.preventDefault()
      //     console.log('123132')
      //     slp.gotoPage(+document.getElementById('page-num').value)
      //   })
      // } catch (error) {
      // }
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