<template>
  <div id="all_cont">
    <!-- <headecom :navList="navList"/> -->

    <!-- <div class="boxScroll">
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
          </el-menu>
        </div>
      </section>
    </div> -->
  
    <div class="conttall">
      <nuxt/>
    </div>
  </div>
</template>
<script>
// import headecom from '~/components/headcom'
import servers from '~/plugins/axios'
import { Loading } from 'element-ui';

export default {

  async asyncData ({ params, error, store }) {

    console.log('head_nav')

    // 导航
    let navList = await servers.navData()
    console.log(navList)
    return {
      navList: navList.data
    }

  },

  data() {
    return {
      navList: [],
      activeIndex: '1',
      activeIndex2: '1',
    }
  },
  methods: {
    handleSelect(key, keyPath) {
    },
  },
}
</script>
<style lang="less">
#__nuxt,
#__layout,
#all_cont {
  height: 100%;
}
.conttall {
  // padding-top: 60px;
  // background: url(../assets/images/bkbg.jpeg) repeat center top / 100%;
  // background: url(../assets/images/bkbg.jpeg) repeat center top / 100%;
  // background-attachment: fixed;
  // background-color: #e9eaed;
  background-color: rgba(155, 155, 155, .3);
  height: 100%;
  box-sizing: border-box;
  overflow-y: scroll;
}
/*定义滚动条轨道*/
::-webkit-scrollbar-track {
    background-color: transparent;
    -webkit-box-shadow: transparent;
}

/*定义滚动条*/
::-webkit-scrollbar-thumb {
    background-color: #bbb;
    border-radius: 10px;
}
/*定义滚动条高宽及背景*/
::-webkit-scrollbar {
    background-color: transparent;
    // -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.22);
    width: 5px;
    height:2px;
}
.loading_box {
  width: 100%;
  height: 100%;
  position: fixed;
  display: none;
  top: 0;
  left: 0;
  background-color: rgba(0,0,0,.4);
  img {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50% , -50%)
  }
}
#pop_ad {
  display: none;
}
</style>