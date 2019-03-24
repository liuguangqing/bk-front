<template>
  <section class="headerBox">
    <div class="headercontall">
      <div class="header">
        <a href="/bk_front/home/all-1">
          <h1>XiangJv</h1>
        </a>
      </div>
      <el-menu
        :default-active="activeIndex2"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
        background-color="#545c64"
        :router="true"
        text-color="#fff"
        active-text-color="#ffd04b"
      >
        <!-- <el-menu-item disabled index="search">
        <input type="text" placeholder="搜索...">
        </el-menu-item>-->
        <el-menu-item
          :index="'/bk_front/home/' + (ite0.cont?ite0.cont:'all') + '-1'"
          v-for="( ite0, ind0 ) in navList"
          :key="ind0"
          v-if="ite0.isChild == 0"
        >
          <nuxt-link to="/bk_front/home">{{ite0.title}}</nuxt-link>
        </el-menu-item>
        <el-submenu
          :index="ite.cont + ind"
          v-for="( ite, ind ) in navList"
          :key="ind"
          v-if="ite.isChild == 1"
        >
          <template slot="title">{{ite.title}}</template>
          <el-menu-item
            :index="'/bk_front/home/' + ite2.cont + '-1'"
            v-for="(ite2, ind2 ) in ite.data"
            :key="ind2"
            v-if="ite.data.length > 0"
          >
            <nuxt-link to="/bk_front/home">{{ite2.title}}</nuxt-link>
          </el-menu-item>
        </el-submenu>
        <!-- <el-submenu index="html3">
        <template slot="title">H5部分</template>
        <el-menu-item index="html1">选项1</el-menu-item>
        <el-menu-item index="html2">选项2</el-menu-item>
        <el-menu-item index="html3">选项3</el-menu-item>
        </el-submenu>-->
        <!-- <el-submenu index="serve4">
        <template slot="title">服务端</template>
        <el-menu-item index="serve1">选项1</el-menu-item>
        <el-menu-item index="serve2">选项2</el-menu-item>
        <el-menu-item index="serve3">选项3</el-menu-item>
        </el-submenu>-->
        <!-- <el-submenu index="seo5">
        <template slot="title">SEO优化</template>
        <el-menu-item index="seo1">选项1</el-menu-item>
        <el-menu-item index="seo2">选项2</el-menu-item>
        <el-menu-item index="seo3">选项3</el-menu-item>
        </el-submenu>-->
        <!-- <el-menu-item index="4" disabled>消息中心</el-menu-item> -->
        <!-- <el-menu-item index="appstar">
        <a href="https://www.ele.me" target="_blank">软件获取</a>
      </el-menu-item>
      <el-menu-item index="about">
        <a href="https://www.ele.me" target="_blank">前端相关</a>
        </el-menu-item>-->
      </el-menu>
    </div>
  </section>
</template>
<script>
import servers from '~/plugins/axios'

export default {
  data() {
    return {
      activeIndex: '1',
      activeIndex2: '1',
      navList: []
    }
  },
  mounted() {
    this.getnav()
  },
  methods: {
    handleSelect(key, keyPath) {
      // console.log(key, keyPath)
      // console.log(key.split('=')[1])
      // location.href = '/?type=' + key.split('=')[1]
      // location.reload()
    },
    async getnav() {
      let data = await servers.navData()
      this.navList = data.data
      // console.log(this.navList)
    }
  }
}
</script>
<style lang="less">
@bgcolor:#fff;
@ftcolor:#666;

.headerBox{
  width: 100%;
  background-color: @bgcolor;
  position: fixed;
  z-index: 10;
  min-width: 1000px;
}
.headercontall {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto ;
  .header {
    position: absolute;
    z-index: 9;
    width: 160px;
    text-align: center;
    a {
      line-height: 60px;
      font-size: 30px;
      font-family: -webkit-pictograph;
      font-weight: 700;
      color: @ftcolor;
    }
  }
  .el-menu {
    padding-left: 160px;
    background-color: @bgcolor !important;
    .el-menu-item ,.el-submenu__title{
      color: @ftcolor !important;
      font-size: 14px;
      background-color: @bgcolor !important;
    }

  }

}
.el-menu--popup-bottom-start{
  background-color: @bgcolor !important;
  .el-menu-item{
    background-color: @bgcolor !important;
  }
}
</style>