<template>
  <section class="container">
    <header>
      <h2>友情链接</h2>
    </header>
    <div class="mylinks">
      <div class="mylinkTitle">我的链接</div>
      <div class="mylinkCon">
        <a href="http://www.baidu.com" v-for="(ite, ind) in friendList" :key="ind">
          <div class="mylinkItem">
            <img :src="ite.icon" alt>
            <div class>{{ite.title}}</div>
          </div>
        </a>

        <!-- <div class="mylinkItem">
          <img src="https://www.xuanmo.xin/wp-content/uploads/2016/03/favicon.png" alt>
          <div class>清客居</div>
        </div>
        <div class="mylinkItem">
          <img src="https://www.xuanmo.xin/wp-content/uploads/2018/05/Head.png" alt>
          <div class>林小屋博客</div>
        </div>
        <div class="mylinkItem">
          <img src="https://www.xuanmo.xin/wp-content/uploads/2018/06/avatar.jpeg" alt>
          <div class>樱花博客</div>
        </div>-->
      </div>
    </div>
  </section>
</template>
<script>
import contleft from '~/components/contleft'

import servers from '../../plugins/axios'
export default {
  components: {
    contleft
  },
  data() {
    return {
      friendList: []
    }
  },
  mounted() {
    this.togetData()
    console.log(123)
  },
  methods: {
    async togetData() {
      let data = await servers.getfriend()
      this.friendList = data.data
    }
  }
}
</script>
<style scoped lang="less">
.container {
  padding: 10px 10px 0;
  min-height: 900px !important;
}
.contcent {
  margin: auto;
}
a {
  display: inline-block;
}
.el-col {
  box-sizing: border-box;
  padding-right: 10px;
  .grid-content {
    height: 200px;
    background-color: rgba(250, 250, 250, 0.9);
  }
}
header {
  & > h2 {
    text-align: left;
    font-size: 30px;
    color: #555;
    margin-bottom: 20px;
  }
}
.mylinks {
  .mylinkTitle {
    line-height: 30px;
    // border-radius: 10px;
    border-left: 5px solid #06aaff;
    background: #f0f2f7;
    padding: 0 10px;
    color: #777;
  }
  .mylinkCon {
    .mylinkItem {
      display: inline-block;
      align-items: center;
      width: 120px;
      margin-top: 20px;
      text-align: center;
      img {
        width: 40px;
        height: 40px;
        margin-bottom: 14px;
        border-radius: 8px;
        box-shadow: 0 0 10px #d2d2d2;
      }
      div {
        font-size: 15px;
        color: #666;
      }
    }
  }
}
</style>
