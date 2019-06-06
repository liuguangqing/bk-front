<template>
<div class="boxScroll">
  <section class="headerBox">
    <div class="headercontall">
      <div class="header">
        <a href="http://www.xiangjv.top">
          <h1>XiangJv</h1>
          <img src="http://www.xiangjv.top/xiangjv_trans_icon.png" alt="香菊网 - 🍊 香菊网，前端技术博客(xiangjv.top)">
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
        <el-menu-item disabled index="search">
          <i class="el-icon-search" v-if="showIcon" @click='searchIconFn'></i>
          <input v-if="!showIcon"  type="text" placeholder="搜索..." class="searchBox" v-model="searchVal" @blur='onblurFu'  @keyup.enter="searchFn">
        </el-menu-item>
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
      searchVal: '',
      showIcon: true
    }
  },
  props: ['navList'],
  methods: {
    handleSelect(key, keyPath) {
    },
    searchFn() {
      this.searchAjax(this.searchVal)
    },
    // 页码初始化
    async searchAjax(searchVal) {
      // 文章页码
      let getessayTiao = await servers.searchPage({Val: this.searchVal})      
      let allessay = getessayTiao.data
      if(allessay && allessay.length > 0) {
        this.$emit('searchSay',allessay )
      }else {
        this.$message('没有搜索到相关文章');
      }
    },
    searchIconFn(){
      this.showIcon = !this.showIcon 
    },
    onblurFu() {
      console.log('失去焦点')
      setTimeout(() => {
        this.showIcon = true
      }, 4000);
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
      font-size: 30px;
      font-family: -webkit-pictograph;
      font-weight: 700;
      color: @ftcolor;
      background: #fff;
      padding: 10px 0 0 0 ;
      height: 60px;
      box-sizing: border-box;
      h1 {
        position: fixed;
        left: -200px;
      }
      img {
        height: 50px;

      }
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
.el-menu-item.is-disabled {
  cursor: zoom-in ;
}
.el-icon-search {
  color: #000 !important;
  font-weight: 700;
  font-size: 32px !important;
}
.searchBox {
  width: 120px;
  border-radius: 17px;
  padding-left: 4px;
  height: 24px;
  border: 2px solid #0070d3;
  font-size: 16px;
  color: #000;
}
</style>