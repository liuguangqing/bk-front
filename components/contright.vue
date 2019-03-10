<template>
  <section>
    <div class="cont_top">
      <div class="right_title">
        <h2>欢迎交流</h2>
      </div>
      <div class="right_cont linkmy">
        <div>
          <el-popover
            placement="bottom"
            width="200"
            trigger="hover">
            <img class="qrcode" src="http://www.xiangjv.top/weixinqrcode.png" alt="">
            <img slot="reference" src="http://www.xiangjv.top/weixin.png">
          </el-popover>  
          <el-popover
            placement="bottom"
            width="200"
            trigger="hover">
            <img class="qrcode" src="http://www.xiangjv.top/QQqrcode.png" alt="">
            <img slot="reference" src="http://www.xiangjv.top/QQ.png">
          </el-popover>
          <!-- <el-popover
            placement="bottom"
            width="250"
            trigger="hover">
            <span>https://github.com/liuguangqing</span>
            <img   slot="reference" src="http://www.xiangjv.top/github.png">
          </el-popover> -->
          <a href="https://github.com/liuguangqing">
            <img   slot="reference" src="http://www.xiangjv.top/github.png">
          </a>
          <a href="http://mail.qq.com/cgi-bin/qm_share?t=qm_mailme&email=1090464974@qq.com">
            <img   slot="reference" src="http://www.xiangjv.top/email.png">
          </a>
          <!-- <el-popover
            placement="bottom"
            width="200"
            trigger="hover">
            <span>http://mail.qq.com/cgi-bin/qm_share?t=qm_mailme&email=root@linhut.cn</span>
            <img   slot="reference" src="http://www.xiangjv.top/email.png">
          </el-popover> -->
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
            <h2 class="title">{{ite0.es_title}}</h2>
            <div class="text">{{ite0.es_tags}}</div>
            <div class="pick">时间 ： {{ite0.es_isTime}}</div>
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
          <nuxt-link v-for="(ite, ind) in navList" :to="'/home/' + ite.cont + '-1'" :key="ind">
            <el-tag>{{ite.title}}</el-tag>
          </nuxt-link>
          <!-- <el-tag type="success">JavaScript(18)</el-tag>
          <el-tag type="info">demo(14)</el-tag>
          <el-tag type="warning">JavaScript(18)</el-tag>
          <el-tag type="warning">demo(14)</el-tag>
          <el-tag type="warning">tips(7)</el-tag>
          <el-tag type="warning">css3(6)</el-tag>
          <el-tag type="warning">Vue(6)</el-tag>
          <el-tag type="warning">html(5)</el-tag>
          <el-tag type="danger">bootstrap(3)</el-tag>
          <el-tag type="danger">WordPress(3)</el-tag>
          <el-tag type="danger">canvas(3)</el-tag>
          <el-tag type="danger">SASS(3)</el-tag>--> 
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import servers from '../plugins/axios'

export default {
  data() {
    return {
      navList: [],
      essayList: []
    }
  },
  components: {},
  mounted() {
    this.getnav()
    this.getessay()
  },
  methods: {
    async getessay(){
      let parmasTemp = {
        pageNow:1,
        pageSize:3
      }
      let m = await servers.getessayPage(parmasTemp)
      this.essayList = m.data
    },
    async getnav() {
      let data = await servers.navData()
      // console.log("nav", fn(data.data));
      function fn(arrs) {
        let arrtemp = []
        rec(arrs)
        function rec(arrs) {
          if (arrs.length > 0) {
            arrs.forEach(element => {
              if (element.rank == 'yi' && element.data.length > 0) {
                rec(element.data)
              } else {
                arrtemp.push(element)
              }
            })
          }
        }
        return arrtemp
      }
      this.navList = fn(data.data)
      console.log(this.navList)
    }
  }
}
</script>
<style lang="less" scoped>
a{
  display: inline-block;
  padding: 0 5px 10px 0
}
.el-col .grid-content {
  background-color: transparent;
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
  background-color: rgba(250, 250, 250, 0.93);
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
  .linkmy{
    text-align: center;
    img{
      width: 30px;
      &::after {
        content: '';
        display: inline-block;
        background-color: #000;
        width: 1px;
        height: 2px
      }
    }
  }
  .rev_item {
    margin-bottom: 8px;
    padding: 8px;
    // border-bottom: 1px solid #e9eaed;
    background-color: #e9eaed;
    .title {
      font-size: 18px;
      color: #555;
      padding-bottom: 8px;
    }
    .text {
      font-size: 14px;
      color: #777;
      padding-bottom: 4px;
    }
    .pick {
      font-size: 14px;
      color: #409eff;
    }
  }
  .classItem {
    // padding: 20px;
    & > span {
      margin-right: 4px;
      margin-bottom: 10px;
    }
  }
}
</style>