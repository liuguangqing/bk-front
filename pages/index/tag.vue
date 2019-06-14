<template>
  <section class="container">
    <header class="classify">
      <h2>分类标签</h2>
    </header>
    <div class="classItem">
      <nuxt-link v-for="(ite, ind) in navList" :to="'/home/' + ite.cont + '-1'" :key="ind">
        <el-tag :type="ite.type">{{ite.title}}</el-tag>
      </nuxt-link>
    </div>
  </section>
</template>
<script>
import servers from '~/plugins/axios'
export default {
  head() {
    return {
      title: `标签云 - 🍊 技术分享，香菊网-前端技术博客(www.xiangjv.top)`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: `标签云 - 🍊 技术分享，香菊网-前端技术博客(www.xiangjv.top)`
        }
      ]
    }
  },
  async asyncData ({ params, error, store }) {
    let colorArr = ['','success', 'info', 'warning', 'danger']
    // 标签列表
    let tagdata = await servers.navData()
    function fn(arrs) {
      let arrtemp = []
      rec(arrs)
      function rec(arrs) {
        if (arrs.length > 0) {
          arrs.forEach(element => {
            if (element.rank == 'yi' && element.data.length > 0) {
              rec(element.data)
            } else {
              element.type = colorArr[parseInt(Math.random() * 5-1)]
              arrtemp.push(element)
            }
          })
        }
      }
      return arrtemp
    }
    return {
      navList: fn(tagdata.data)
    }
  }
}
</script>
<style scoped lang="less">
.container {
  padding: 10px 10px 0;
  min-height: 900px !important;
}
.contcent {
  margin: auto;
}
.el-col {
  box-sizing: border-box;
  padding-right: 10px;
  .grid-content {
    height: 200px;
    background-color: rgba(250, 250, 250, 0.9);
  }
}
.classify {
  & > h2 {
    text-align: left;
    font-size: 30px;
    color: #555;
    margin-bottom: 20px;
  }
}
.classItem {
  padding: 20px;
  & > span {
    margin-right: 10px;
    margin-bottom: 10px;
  }
}
a{
  display: inline-block;
  margin: 5px;
}
</style>