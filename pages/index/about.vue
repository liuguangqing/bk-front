<template>
  <section class="container">
   博主很懒，该页面还没有文章。。。
  </section>
</template>
<script>
export default {
  head() {
    return {
      title: `关于香菊网 - 🍊 技术分享，香菊网-前端技术博客(www.xiangjv.top)`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: `关于香菊网 - 🍊 技术分享，香菊网-前端技术博客(www.xiangjv.top)`
        }
      ]
    }
  },
}
</script>
<style scoped lang="less">
.container{
  padding: 10px  20px  0;
  height: 700px !important;
}
.contcent {
  margin: auto ; 

}
.el-col{
  box-sizing: border-box ; 
  padding-right: 10px ;
  .grid-content{
    height: 200px ;
    background-color: rgba(250, 250,250, .9);
  }
}
</style>
