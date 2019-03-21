<template>
  <div id="all_cont">
    <headecom/>
    <div class="conttall">
      <nuxt/>
    </div>
    <div class="loading_box">
      <img src="../assets/images/earth-loading.svg" alt>
    </div>
  </div>
</template>
<script>
import headecom from '~/components/headcom'

export default {
  data() {
    return {}
  },
  components: {
    headecom,
  },
  mounted() {
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
  background-color: rgba(155, 155, 155, .6);
  height: 100%;
  box-sizing: border-box;
  overflow-y: scroll;
}
/*定义滚动条轨道*/
.conttall::-webkit-scrollbar-track {
    background-color: transparent;
    // -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.42);
    -webkit-box-shadow: transparent;
}

/*定义滚动条*/
.conttall::-webkit-scrollbar-thumb {
    background-color: #bbb;
    border-radius: 10px;
}
/*定义滚动条高宽及背景*/
.conttall::-webkit-scrollbar {
    background-color: transparent;
    // -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.22);
    width: 5px;
    height:5px;
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