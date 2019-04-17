<template>
  <section class="container">
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
              <!-- <contright/> -->

            <!-- <template> -->
              <section :class="[{'right_all':fixedar}]">
                <div class="cont_top" v-show="!fixedar">
                  <div class="right_title">
                    <h2>欢迎交流</h2>
                  </div>
                  <div class="right_cont linkmy">
                    <div>
                      <el-popover placement="bottom" width="200" trigger="hover">
                        <img class="qrcode" src="http://www.xiangjv.top/weixinqrcode.png" alt>
                        <img slot="reference" src="http://www.xiangjv.top/weixin.png">
                      </el-popover>
                      <el-popover placement="bottom" width="200" trigger="hover">
                        <img class="qrcode" src="http://www.xiangjv.top/QQqrcode.png" alt>
                        <img slot="reference" src="http://www.xiangjv.top/QQ.png">
                      </el-popover>
                      <!-- <el-popover
                        placement="bottom"
                        width="250"
                        trigger="hover">
                        <span>https://github.com/liuguangqing</span>
                        <img   slot="reference" src="http://www.xiangjv.top/github.png">
                      </el-popover>-->
                      <a href="https://github.com/liuguangqing">
                        <img slot="reference" src="http://www.xiangjv.top/github.png">
                      </a>
                      <a href="http://mail.qq.com/cgi-bin/qm_share?t=qm_mailme&email=1090464974@qq.com">
                        <img slot="reference" src="http://www.xiangjv.top/email.png">
                      </a>
                      <!-- <el-popover
                        placement="bottom"
                        width="200"
                        trigger="hover">
                        <span>http://mail.qq.com/cgi-bin/qm_share?t=qm_mailme&email=root@linhut.cn</span>
                        <img   slot="reference" src="http://www.xiangjv.top/email.png">
                      </el-popover>-->
                    </div>
                  </div>
                </div>
                <div class="cont_mid">
                  <div class="right_title">
                    <h2>最新博文</h2>
                  </div>
                  <div class="right_cont">
                    <div class="rev_list">
                      <div class="rev_item" v-for="(ite0, ind0) in essayList" :key="ind0">
                        <nuxt-link
                        :to="'/bk_front/indexDetail/' + ite0.es_id">
                          <h2 class="title">{{ite0.es_title}}</h2>
                          <div class="text">{{ite0.es_tags}}</div>
                          <div class="pick">时间 ： {{formatDatea(ite0.es_isTime)}}</div>
                        </nuxt-link>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="cont_foot">
                  <div class="right_title">
                    <h2>站点统计</h2>
                  </div>
                  <div class="right_cont">
                    <div class="classItem">
                      <!-- <nuxt-link v-for="ite in navList" :to="'/?type=' + ite.cont + '&pageNo=1'" :key="ite"> -->
                      <nuxt-link v-for="(ite, ind) in navList" :to="'/bk_front/home/' + ite.cont + '-1'" :key="ind">
                        <el-tag :type="ite.type">{{ite.title}}</el-tag>
                      </nuxt-link>
                    </div>
                  </div>
                </div>
              </section>
            <!-- </template> -->

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
    <footercom/>
  </section>
</template>
<script>
import showcon from '~/pages/main'
import contleft from '~/components/contleft'
import contright from '~/pages/contright'
import footercom from '~/components/footcom'
// import bgcon from '~/components/bgcon'
import urlIcon from '~/components/urlIcon'
import { formatDate } from '../assets/js/base.js'
import servers from '../plugins/axios'

export default {
  async asyncData ({ params, error, store }) {

    console.log('params',params)
    let colorArr = ['','success', 'info', 'warning', 'danger']
    let parmasTemp = {
      pageNow: 1,
      pageSize: 4,
      pageType: 'all'
    }
    // 最新文章
    let m = await servers.getessayPage(parmasTemp)
    // 导航 
    let data = await servers.navData()
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
    // this.navList = fn(data.data)
    return {
      essayList: m.data,
      navList: fn(data.data) 
    }
    console.log(this.navList)
    console.log(data)
    // let sendParams = {}
    // sendParams.pageType = params.home.split('-')[0]
    // sendParams.pageNow = params.home.split('-')[1]
    // sendParams.pageSize = 5
    // console.log('sendParams',sendParams)
    // // 文章列表
    // let dataList = await servers.getessayPage(sendParams)
    // // 文章页码
    // let getessayTiao = await servers.getessayPage({pageType: params.home.split('-')[0]})      
    // let allessay = getessayTiao.data.length
    // let currentPage = params.home.split('-')[1] * 1

    // return {
    //   dataList: dataList.data,
    //   allessay:allessay,
    //   currentPage: currentPage
    // }

  },
  data() {
    return {
      getData: {},
      fixedar: false
    }
  },
  components: {
    showcon,
    contleft,
    contright,
    footercom,
    urlIcon
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
  padding: 10px 0 0;
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
      // background-color: transparent;
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




<style lang="less" scoped>
.cont_mid{
  min-height: 200px;
}
.right_all{
  position: fixed;
  width: 240px;
}
a {
  display: inline-block;
  // padding: 0 5px 10px 0;
}
.el-col .grid-content {
  // background-color: transparent;
}
.asidetit {
  text-align: center;
  padding-top: 20px;
  img {
    width: 180px;
    height: 180px;
    border-radius: 100%;
    padding: 7px;
    background-color: rgba(0, 0, 0, 0.2);
  }
}
.qrcode {
  width: 100%;
}
section > div {
  padding: 10px;
  // background-color: rgba(250, 250, 250, 0.93);
  //   border-radius: 10px;
  margin-bottom: 10px;
  .right_title {
    h2 {
      padding: 8px 0;
      display: inline-block;
      width: 80px;
      border-bottom: 3px solid #1890ff;
      color: #555;
    }
    border-bottom: 2px solid #e9eaed;
  }
  .right_cont {
    font-size: 14px;
    color: #777;
    padding: 10px 6px 6px;
  }
  .linkmy {
    text-align: center;
    img {
      width: 30px;
      &::after {
        content: '';
        display: inline-block;
        background-color: #000;
        width: 1px;
        height: 2px;
      }
    }
  }
  .rev_item {
    margin-bottom: 8px;
    padding: 8px;
    // border-bottom: 1px solid #e9eaed;
    border-radius: 2px;
    background-color: #e9eaed;
    .title {
      font-size: 15px;
      color: #555;
      padding-bottom: 8px;
    }
    .text {
      font-size: 12px;
      color: #777;
      padding-bottom: 15px;
    }
    .pick {
      font-size: 14px;
      color: #409eff;
    }
  }
  .classItem {
    // padding: 20px;
    & > a {
      margin-right: 4px;
      margin-bottom: 4px;
    }
  }
}
</style>