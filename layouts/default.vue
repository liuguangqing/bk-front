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
    headecom
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
  background: url(../assets/images/bkbg.jpeg) repeat center top / 100%;
  background-attachment: fixed;
  height: 100%;
  box-sizing: border-box;
  overflow-y: scroll;
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