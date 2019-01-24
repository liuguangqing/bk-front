<template>
  <section>
    <div class="cont_top">
      <div class="right_title">
        <h2>公告</h2>
      </div>
      <div class="right_cont">
        <div>本站采用Nuxtjs+Wordpress Rest Api渲染页面，源码存放在Github</div>
        <div>github</div>
      </div>
    </div>
    <div class="cont_mid">
      <div class="right_title">
        <h2>最新博文</h2>
      </div>
      <div class="right_cont">
        <div class="rev_list">
          <div class="rev_item">
            <h2 class="title">Grid布局</h2>
            <div class="text">text布局</div>
            <div class="pick">时间 ： 2018-12-10</div>
          </div>
          <div class="rev_item">
            <h2 class="title">Grid布局</h2>
            <div class="text">text布局</div>
            <div class="pick">时间 ： 2018-12-10</div>
          </div>
          <div class="rev_item">
            <h2 class="title">Grid布局</h2>
            <div class="text">text布局</div>
            <div class="pick">时间 ： 2018-12-10</div>
          </div>
        </div>
      </div>
    </div>
    <div class="cont_foot">
      <div class="right_title">
        <h2>站点统计</h2>
      </div>
      <div class="right_cont">
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
        <!-- <div>github</div> -->
      </div>
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {}
  },
  components: {},
  mounted() {}
}
</script>
<style lang="less" scoped>
.el-col .grid-content {
  background-color: transparent;
}
.asidetit {
  text-align: center;
  padding-top: 20px;
  img {
    width: 180px;
    height: 180px;
    border-radius: 100%;
    padding: 7px;
    background-color: rgba(0, 0, 0, 0.2);
  }
}
section > div {
  padding: 10px;
  background-color: rgba(250, 250, 250, 0.93);
  //   border-radius: 10px;
  margin-bottom: 10px;
  .right_title {
    h2 {
      padding: 8px 0;
      display: inline-block;
      width: 80px;
      border-bottom: 3px solid #1890ff;
      color: #555;
    }
    border-bottom: 2px solid #e9eaed;
  }
  .right_cont {
    font-size: 14px;
    color: #777;
    padding: 10px 6px 6px;
  }
  .rev_item {
    margin-bottom: 8px;
    padding: 8px  ;
    // border-bottom: 1px solid #e9eaed;
    background-color: #e9eaed;
    .title {
      font-size: 18px;
      color: #555;
      padding-bottom: 8px;
    }
    .text {
      font-size: 14px;
      color: #777;
      padding-bottom: 4px;
    }
    .pick {
      font-size: 14px;
      color: #409eff;
    }
  }
  .classItem {
    // padding: 20px;
    & > span {
      margin-right: 4px;
      margin-bottom: 10px;
    }
  }
}
</style>