<template>
  <section class="container">
    <div class="contcent">
      <!-- <el-row>
        <el-col :span="5">
          <div class="grid-content bg-purple">
            <contleft/>
          </div>
        </el-col>
        <el-col :span="15">
          <div class="grid-content bg-purple-light">
            <nuxt-child :foobar="123"/>
          </div>
        </el-col>
        <el-col :span="4">
          <div class="grid-content bg-purple-light">
            <contright/>
          </div>
        </el-col>
      </el-row> -->
    </div>
    <div></div>
  </section>
</template>
<script>
// import contleft from '~/components/contleft'
// import contright from '~/components/contright'
// import api from '~/utils/request.js'
// inter.userLogin()
export default {
  components: {
  },
  data() {
    return {
      getData: {}
    }
  },
  // asyncData({}) {
  //   return api.getAds().then(res => {
  //     return {getData: res}
  //   })
  // },
  mounted() {
    // this.$axios.get('/proxy/getnav').then( res => {console.log(res)});
    console.log('getData>>>')
    console.log(this.getData)
    // let loadingInstance1 = Loading.service({ fullscreen: true });
    this.$loading({ fullscreen: true })
  }
}
</script>
<style scoped lang="less">
.container {
  padding: 10px 120px 0;
  height: 100%;
}
.contcent {
  margin: auto;
}
.el-col {
  box-sizing: border-box;
  padding-right: 10px;
  .grid-content {
    padding-top: 20px;
    background-color: rgba(250, 250, 250, 0.93);
    border-radius: 10px;
  }
}

</style>
