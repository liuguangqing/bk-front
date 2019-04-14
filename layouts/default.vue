<template>
  <div id="all_cont">
    <headecom/>
    <div class="conttall">
      <nuxt/>
    </div>
  </div>
</template>
<script>
import headecom from '~/components/headcom'

import { Loading } from 'element-ui';
export default {
  data() {
    return {
      loadingInstance: {}
    }
  },
  components: {
    headecom
  },
  created(){
    let options = {
      fullscreen: true ,
      text: 'xiangjv',
      background: '#fff'
    }
    this.loadingInstance = Loading.service(options);
  },
  mounted() {
    this.$nextTick(() => { // 以服务的方式调用的 Loading 需要异步关闭
      setTimeout(() => {
        this.loadingInstance.close();
      }, 800);
    });
  }
}
</script>
<style lang="less">
#__nuxt,
#__layout,
#all_cont {
  height: 100%;
}
.conttall {
  padding-top: 60px;
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

</style>