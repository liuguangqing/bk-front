<template>
  <section class="footerbox">
    <div class="foot_contain">
      <div class="fl">
        <div class="foot_links">
        <span>友情链接：</span>
          <a rel="nofollow" v-for="(ite,ind) in friendList" :key="ind" :href="ite.cont" target="_blank">
            <div class>{{ite.title}}</div>
          </a>
        </div>
        <div>Copyright © 2019 幻雨焉缘博客 | 浙ICP备19001843号-1</div>
        <div class="foot_line">----------------------------------</div>
        <pre>最可怕的不是止步不前， 而是安于现状。        ──── 前端攻城狮</pre>
      </div>
      <div class="fr">
        <el-button type="primary" icon="el-icon-share" circle></el-button>
        <el-button type="success" icon="el-icon-caret-top" circle @click="backTop"></el-button>
        <el-button type="info" icon="el-icon-message" circle></el-button>
        <el-button type="danger" icon="el-icon-time" circle></el-button>
      </div>
    </div>
  </section>
</template>
<script>
import servers from '../plugins/axios'

export default {
  data() {
    return {
      friendList: []
    }
  },
  mounted() {
    this.togetData()
  },
  methods: {
    async togetData() {
      let data = await servers.getfriend()
      this.friendList = data.data
    },
    backTop() {
      let scrollgo = document
        .getElementsByClassName('conttall')[0]
        .scrollTo(0, 0)

      //   var scrollToTop = window.setInterval(function() {
      //     var pos = window.pageYOffset
      //     console.log(pos)
      //     if (pos > 0) {
      //       scrollgo.scrollTo(0, pos - 10) // how far to scroll on each step
      //     } else {
      //       window.clearInterval(scrollToTop)
      //     }
      //   }, 16)
    }
  }
}
</script>
<style scoped lang="less">
@media screen and (max-width: 450px) {
  .foot_contain .fl {
    display: none;
  }
}
.footerbox {
  background-color: #333;
  height: 120px;
  width: 100%;
  margin-top: 20px;
  font-size: 14px;
  position: relative;
  z-index: 9;
  .foot_contain {
    color: #ddd;
    width: 100%;
    margin: 0 auto;
    padding: 20px 0 0 10px;
    box-sizing: border-box;
    max-width: 1040px;
    .foot_links {
      margin-bottom: 10px;
      a {
        color: lightseagreen;
        display: inline-block;
        margin-right: 15px;
      }
    }
    .foot_line {
      padding: 10px 0;
    }
    .fl {
      width: 70%;
    }
    .fr {
      width: 120px;
      text-align: center;
      line-height: 1;
      transform: translateY(-5px);
      button {
        margin: 0;
        margin: 0 10px 10px 0;
      }
    }
  }
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
}
.el-carousel__indicators {
  display: none !important;
}
.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>