<template>
  <section class="container">
    <div>
      <div class="contcent">
        <el-row>
          <el-col :span="4">
            <div class="grid-content bg-purple md_display">
              <contleft />
            </div>
          </el-col>
          <el-col :span="15" class="md_content">
            <div class="grid-content bg-purple-light conter_box">
              <nuxt-child/>
            </div>
          </el-col>
          <el-col :span="5">
            <div class="grid-content bg-purple-light md_display">
              <contright/>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
    <!-- <bgcon class="bgcon"/> -->
    <footercom/>
  </section>
</template>
<script>
import showcon from '~/pages/main'
import contleft from '~/components/contleft'
import contright from '~/components/contright'
import footercom from '~/components/footcom'
// import bgcon from '~/components/bgcon'

import servers from '../plugins/axios'

export default {
  data() {
    return {
      getData: {}
    }
  },
  components: {
    showcon,
    contleft,
    contright,
    footercom,
    // bgcon
  },
  mounted() {
    // console.log(this.getData)
    // this.geturl()
    // this.getnav()
    // this.getInfo()
    // this.getinsertData()
  },
  methods: {
    async geturl() {
      let data = await servers.rightData()
      // console.log(data)
    },
    async getnav() {
      let data = await servers.navData()
      // console.log(data)
    },
    async getInfo() {
      let data = await servers.userInfoData()
      // console.log(data)
    },
    // async getinsertData() {
    //   let data = await servers.insertData()
    //   // console.log(data)
    // }
  },
  mounted(){
        // let loadingInstance1 = Loading.service({ fullscreen: true });
  }
}
</script>
<style scoped lang="less">
@media screen and (max-width: 1200px) {
  .md_display {
    display: none;
  }
  .md_content {
    width: 100%;
  }
  .el-col {
    padding: 0 10px;
  }
}
.contcent {
  padding: 10px 0 0;
  max-width: 1200px;
  height: 100%;
}
.contcent {
  margin: auto;
}
.conter_box{
  min-height: 500px;
}
.el-col {
  box-sizing: border-box;
  padding-right: 10px;
  height: 100%;
  .grid-content {
    padding-top: 20px;
    background-color: rgba(250, 250, 250, 0.93);
    border-radius: 6px;
  }
}
.el-row {
  & > .el-col:nth-last-of-type(1) ,& > .el-col:nth-of-type(1)  {
    .grid-content {
      padding-top: 0;
      background-color: transparent;
    }
  }
}
.bgcon{
    width: 500px;
    height: 500px;
    background-color: transparent;
    position: fixed;
    left: 0;
    top: 0;
    z-index: -1;

}
</style>
