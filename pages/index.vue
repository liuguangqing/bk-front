<template>
  <section class="container">

    <headecom :navList="headNav"/>

    <div>
      <div class="contcent">
        <el-row>
          <el-col :span="4">
            <div class="grid-content bg-purple md_display">
              <contleft />
            </div>
          </el-col>
          <el-col :span="15" class="md_content">
            <div class="grid-content bg-purple-light conter_box">
              <nuxt-child/>
            </div>
          </el-col>
          <el-col :span="5">
            <div class="grid-content bg-purple-light md_display">

              <contright :rightNavList="navList"  :essayList="essayList"/>

            </div>
          </el-col>
        </el-row>
      </div>
    </div>
    <!-- 背景 -->
    <!-- <bgcon class="bgcon"/> -->
    <!-- 移动端菜单 -->
    <div>
      <url-icon class="md_display_show" />
    </div>
    <!-- 底部友链 -->
    <footercom :friendList="friendList"/>
  </section>
</template>
<script>
import contleft from '~/components/contleft'
import contright from '~/pages/component/contright'
import headecom from '~/pages/component/headcom'
import footercom from '~/pages/component/footcom'
// import bgcon from '~/components/bgcon'
import urlIcon from '~/components/urlIcon'
import { formatDate } from '~/assets/js/base.js'
import servers from '~/plugins/axios'
export default {
  async asyncData ({ params, error, store }) {
    // 开始请求
    console.log(`xiangjv` + Math.random())
    let colorArr = ['','success', 'info', 'warning', 'danger']
    let parmasTemp = {
      pageNow: 1,
      pageSize: 4,
      pageType: 'all'
    }
    // 右侧最新文章
    let m = await servers.getessayPage(parmasTemp)
    // 右侧导航  && 上面导航
    let navData = await servers.navData()
    // 底部友链
    let friendList = await servers.getfriend()
    function fn(arrs) {
      let arrtemp = []
      rec(arrs)
      function rec(arrs) {
        if (arrs.length > 0) {
          arrs.forEach(element => {
            if (element.rank == 'yi' && element.data.length > 0) {
              rec(element.data)
            } else {
              element.type = colorArr[parseInt(Math.random() * 5-1)]
              arrtemp.push(element)
            }
          })
        }
      }
      return arrtemp
    }
    return {
      essayList: m.data,
      navList: fn(navData.data),
      headNav:navData.data,
      friendList:friendList.data
    }
  },
  data() {
    return {
      getData: {},
      fixedar: false
    }
  },
  components: {
    contleft,
    contright,
    footercom,
    urlIcon,
    headecom
    // bgcon
  },
  methods: {
    scrollLIst(){
      let _this = this
      let scrollright = document.getElementsByClassName('conttall')[0]
      scrollright.addEventListener('scroll', function(){
        if(scrollright.scrollTop >= 120){
          _this.fixedar = true
        }else {
          _this.fixedar = false
        }
      })
    },
    formatDatea(dats,fmt){
      return formatDate(dats)
    },
  },
}
</script>
<style scoped lang="less">
@media screen and (max-width: 1200px) {
  .md_display {
    display: none;
  }
  .md_display_show {
    display: block !important;
  }
  .md_content {
    width: 100%;
  }
  .el-col {
    padding: 0 10px;
  }
}
.md_display_show {
  display: none;
}
.contcent {
  padding: 65px 0 0;
  max-width: 1200px;
  height: 100%;
}
.contcent {
  margin: auto;
}
.conter_box{
  min-height: 500px;
}
.el-col {
  box-sizing: border-box;
  padding-right: 10px;
  height: 100%;
  .grid-content {
    padding-top: 20px;
    background-color: rgba(250, 250, 250, 0.93);
    border-radius: 6px;
  }
}
.el-row {
  & > .el-col:nth-last-of-type(1) ,& > .el-col:nth-of-type(1)  {
    .grid-content {
      padding-top: 0;
      background-color: transparent;
    }
  }
}
.bgcon{
    width: 500px;
    height: 500px;
    background-color: transparent;
    position: fixed;
    left: 0;
    top: 0;
    z-index: -1;

}
</style>