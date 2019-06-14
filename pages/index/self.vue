<template>
  <section class="container">
    <div>
      <div class="mylinkTitle">个人简介</div>
      <div>
        <p>网名：幻雨焉缘</p>
        <p>出生：1994年04月</p>
        <p>职业：WEB前端开发攻城狮</p>
      </div>
    </div>
    <div>
      <div class="mylinkTitle">博客经历</div>
      <div>
        <p>2019年02月15日正式上线 框架 nuxt + vue-element-admin + nodeJs-express + sql</p>
        <p>本站源码，https://github.com/liuguangqing/bkfront</p>
        <p>用途： 存方学习笔记 小案例，分享学习经验。。。</p>
      </div>
    </div>
    <div>
      <div class="mylinkTitle">专业技能</div>
      <div>
        <p>熟悉使用vue全家桶, nuxt, 了解nodeJs 和 nginx</p>
      </div>
    </div>
    <div>
      <div class="mylinkTitle">信仰编程</div>
      <div>
        <p>优美胜于丑陋 (menVscode)</p>
      </div>
    </div>
    <div>
      <div class="mylinkTitle">博客</div>
      <div>
        <p>前端使用 nuxtJs + elementsUI , 脱离 csr 完成 ssr 渲染 </p>
        <p>后端使用 nodeJs + express + multer 。完成数据库操作 文件上传</p>
        <p>数据库 mySQL</p>
        <p>代理 nginx  , pm2 守护进程</p>
      </div>
    </div>
    <div>
      <div class="mylinkTitle">微语</div>
      <div>
        <p>种一棵树最好的培养时间是十年前，其次是现在。。加油  (ง •_•)ง</p>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  head() {
    return {
      title: `博主相关 - 🍊 技术分享，香菊网-前端技术博客(www.xiangjv.top)`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: `博主相关 - 🍊 技术分享，香菊网-前端技术博客(www.xiangjv.top)`
        }
      ]
    }
  },
}
</script>
<style scoped lang="less">
  .mylinkTitle {
    line-height: 30px;
    // border-radius: 10px;
    border-left: 5px solid #06aaff;
    background: #f0f2f7;
    padding: 0 10px;
    margin: 20px 0 10px 0;
    color: #777;
  }
.container{
  padding: 10px  20px  0;
  height: 900px !important;
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
p {
  padding: 4px 0;
  color: #2e2e2e;
  font-size: 14px;
}
</style>
