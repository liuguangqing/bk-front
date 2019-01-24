<template>
  <section class="container">
    <header class="classify">
      <h2>分类标签</h2>
    </header>
    <div class="classItem">
      <el-tag>前端笔记(27)</el-tag>
      <el-tag type="success">JavaScript(18)</el-tag>
      <el-tag type="info">demo(14)</el-tag>
      <el-tag type="warning">JavaScript(18)</el-tag>
      <el-tag type="warning">demo(14)</el-tag>
      <el-tag type="warning">tips(7)</el-tag>
      <el-tag type="warning">css3(6)</el-tag>
      <el-tag type="warning">Vue(6)</el-tag>
      <el-tag type="warning">html(5)</el-tag>
      <el-tag type="danger">bootstrap(3)</el-tag>
      <el-tag type="danger">WordPress(3)</el-tag>
      <el-tag type="danger">canvas(3)</el-tag>
      <el-tag type="danger">SASS(3)</el-tag>
    </div>
  </section>
</template>
<script>
import contleft from '~/components/contleft'
export default {
  components: {
    contleft
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
.classify{
  & >  h2{
    text-align: left;
    font-size: 30px ;
    color: #555;
    margin-bottom: 20px   
  }
}
.classItem{
  padding: 20px ;
  & > span {
    margin-right: 10px ;
    margin-bottom: 10px 
  }
}
</style>