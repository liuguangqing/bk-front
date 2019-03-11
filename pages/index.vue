<template>
  <section class="container">
    <div>
      <div class="contcent">
        <el-row>
          <el-col :span="4">
            <div class="grid-content bg-purple">
              <contleft/>
            </div>
          </el-col>
          <el-col :span="15">
            <div class="grid-content bg-purple-light">
              <nuxt-child/>
            </div>
          </el-col>
          <el-col :span="5">
            <div class="grid-content bg-purple-light">
              <contright/>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
    <footercom/>
  </section>
</template>
<script>
import showcon from '~/pages/main'
import contleft from '~/components/contleft'
import contright from '~/components/contright'
import footercom from '~/components/footcom'

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
    footercom
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
    async getinsertData() {
      let data = await servers.insertData()
      // console.log(data)
    }
  },
  mounted(){
        // let loadingInstance1 = Loading.service({ fullscreen: true });
  }
}
</script>
<style scoped lang="less">
.contcent {
  padding: 10px 0 0;
  width: 1200px;
  height: 100%;
}
.contcent {
  margin: auto;
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
</style>
