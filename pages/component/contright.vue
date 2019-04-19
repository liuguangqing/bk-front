<template>
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
          <a href="https://github.com/liuguangqing">
            <img slot="reference" src="http://www.xiangjv.top/github.png">
          </a>
          <a href="http://mail.qq.com/cgi-bin/qm_share?t=qm_mailme&email=1090464974@qq.com">
            <img slot="reference" src="http://www.xiangjv.top/email.png">
          </a>
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
            :to="'/indexDetail/' + ite0.es_id">
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
          <nuxt-link v-for="(ite, ind) in navList" :to="'/home/' + ite.cont + '-1'" :key="ind">
            <el-tag :type="ite.type">{{ite.title}}</el-tag>
          </nuxt-link>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import servers from '~/plugins/axios'
import { formatDate } from '~/assets/js/base.js'

export default {
  data() {
    return {
      navList: [],
      fixedar: false
    }
  },
  components: {},
  mounted() {
    this.scrollLIst()
    this.navList = this.rightNavList
  },
  props: ['rightNavList' , 'essayList'],
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
    }
  }
}
</script>
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
    & > a {
      margin-right: 4px;
      margin-bottom: 4px;
    }
  }
}
</style>