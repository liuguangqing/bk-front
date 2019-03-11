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
// import contleft from '~/components/contleft'

// import servers from '../plugins/axios'
export default {
  // components: {
  //   // contleft
  // },
  data() {
    return {
      navList: []
    }
  },
  mounted() {
    this.getnav()
  },
  methods: {
    async getnav() {
      let colorArr = ['','success', 'info', 'warning', 'danger']
      let data = await servers.navData()
      // console.log("nav", fn(data.data));
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
      this.navList = fn(data.data)
      console.log(this.navList)
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