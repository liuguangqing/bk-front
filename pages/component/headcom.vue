<template>
<div class="boxScroll">
  <section class="headerBox">
    <div class="headercontall">
      <div class="header">
        <a href="/home/all-1">
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
          :index="'/home/' + (ite0.cont?ite0.cont:'all') + '-1'"
          v-for="( ite0, ind0 ) in navList"
          :key="ind0"
          v-if="ite0.isChild == 0"
        >
          <nuxt-link :to="'/home/' + (ite0.cont?ite0.cont:'all') + '-1'">{{ite0.title}}</nuxt-link>
        </el-menu-item>
        <el-submenu
          :index="ite.cont + ind"
          v-for="( ite, ind ) in navList"
          :key="ind"
          v-if="ite.isChild == 1"
        >
          <template slot="title">{{ite.title}}</template>
          <el-menu-item
            :index="'/home/' + ite2.cont + '-1'"
            v-for="(ite2, ind2 ) in ite.data"
            :key="ind2"
            v-if="ite.data.length > 0"
          >
            <nuxt-link :to="'/home/' + ite2.cont + '-1'">{{ite2.title}}</nuxt-link>
          </el-menu-item>
        </el-submenu>
      </el-menu>
    </div>
  </section>
</div>
</template>
<script>
import servers from '~/plugins/axios'

export default {
  data() {
    return {
      activeIndex: '1',
      activeIndex2: '1',
    }
  },
  props: ['navList'],
  methods: {
    handleSelect(key, keyPath) {
    },
  }
}
</script>
<style lang="less">
@bgcolor:#fff;
@ftcolor:#666;

.headerBox{
  width: 100%;
  background-color: @bgcolor;
  height: 60px;
  position: fixed;
  z-index: 10;
  // min-width: 1040px;
}
@media screen and (max-width: 700px) {
  .headercontall {
    overflow-x: scroll !important;
  }
}
.headercontall {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto ;
  overflow-x: hidden;
  background-color: #fff;
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
      background: #fff;
    }
  }
  .el-menu {
    padding-left: 160px;
    background-color: @bgcolor !important;
    min-width: 1040px;
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