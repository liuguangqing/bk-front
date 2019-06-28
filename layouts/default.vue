<template>
  <div id="all_cont">
    <div class="conttall">
      <nuxt/>
    </div>
  </div>
</template>
<script>
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
    background-color: #e85e20;
    border-radius: 10px;
}
/*定义滚动条高宽及背景*/
::-webkit-scrollbar {
    background-color: transparent;
    // -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.22);
    width: 6px;
    height:6px;
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