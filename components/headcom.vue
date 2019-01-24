<template>
  <div class="headercontall">
    <div class="header">
      <span>XiangJu</span>
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

      <el-menu-item disabled index="search">
        <input type="text" placeholder="搜索...">
      </el-menu-item>
      <el-menu-item index="/"  v-for="( ite0, ind0 ) in navList" :key="ind0" v-if="ite0.isChild == 0">
        <nuxt-link to="/msg">{{ite0.title}}</nuxt-link>
      </el-menu-item>
      <el-submenu :index="ite.title" v-for="( ite, ind ) in navList" :key="ind" v-if="ite.isChild == 1">
        <template slot="title">{{ite.title}}</template>
        <el-menu-item :index="ite.title + ind2" v-for="(ite2, ind2 ) in ite.data" :key="ind2" v-if="ite.data.length > 0">
            <nuxt-link to="/msg">{{ite2.title}}</nuxt-link>
        </el-menu-item>
      </el-submenu>
      <!-- <el-submenu index="html3">
        <template slot="title">H5部分</template>
        <el-menu-item index="html1">选项1</el-menu-item>
        <el-menu-item index="html2">选项2</el-menu-item>
        <el-menu-item index="html3">选项3</el-menu-item>
      </el-submenu> -->
      <!-- <el-submenu index="serve4">
        <template slot="title">服务端</template>
        <el-menu-item index="serve1">选项1</el-menu-item>
        <el-menu-item index="serve2">选项2</el-menu-item>
        <el-menu-item index="serve3">选项3</el-menu-item>
      </el-submenu> -->
      <!-- <el-submenu index="seo5">
        <template slot="title">SEO优化</template>
        <el-menu-item index="seo1">选项1</el-menu-item>
        <el-menu-item index="seo2">选项2</el-menu-item>
        <el-menu-item index="seo3">选项3</el-menu-item>
      </el-submenu> -->
      <!-- <el-menu-item index="4" disabled>消息中心</el-menu-item> -->
      <!-- <el-menu-item index="appstar">
        <a href="https://www.ele.me" target="_blank">软件获取</a>
      </el-menu-item>
      <el-menu-item index="about">
        <a href="https://www.ele.me" target="_blank">前端相关</a>
      </el-menu-item> -->
    </el-menu>
  </div>
</template>
<script>
import servers from '../plugins/axios'

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
      console.log(key, keyPath)
    },
    async getnav() {
      let data = await servers.navData()
      this.navList = data.data
      console.log(this.navList)
    }
  }
}
</script>
<style lang="less">
.headercontall {
  position: fixed;
  width: 100%;
  z-index: 10;
  .header {
    position: absolute;
    z-index: 9;
    width: 160px;
    text-align: center;
    span {
      line-height: 60px;
      font-size: 30px;
      font-family: -webkit-pictograph;
      font-weight: 700;
      color: #fff;
    }
  }
  .el-menu {
    padding-left: 160px;
  }
}
</style>