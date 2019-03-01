<template>
  <section class="container">
    <div>
      <div>个人简介</div>
      <hr>
      <div>
        <span>网名：</span>
        <span>幻雨焉缘</span>
      </div>
      <div>
        <span>出生：</span>
        <span>1994年04月</span>
      </div>
      <div>
        <span>职业：</span>
        <span>WEB前端开发攻城狮</span>
      </div>
      <div>
        <span>出生：</span>
        <span>1994年04月</span>
      </div>
      <div>
        <span>出生：</span>
        <span>1994年04月</span>
      </div>
    </div>
    <div>
      <div>博客经历</div>
      <hr>
      <div>
        <p>201902月15日正式上线 框架 nuxt + vue-element-admin + nodeJs-express + sql</p>
        <p>本站源码，https://github.com/liuguangqing/bkfront</p>
        <p>用途： 存方学习笔记 小案例，分享学习经验。。。</p>
      </div>
    </div>
    <div>
      <div>专业技能</div>
      <hr>
      <div>
        <p>熟悉使用sqlmap,xss和Kali系统.</p>
      </div>
    </div>
    <div>
      <div>信仰编程</div>
      <hr>
      <div>
        <p>优美胜于丑陋 (menVscode)</p>
      </div>
    </div>
    <div>
      <div>微语</div>
      <hr>
      <div>
        <p>人需要去拼搏，拼搏会让你更加精彩.</p>
      </div>
    </div>
  </section>
</template>
<script>
import contleft from '~/components/contleft'
export default {
  components:{
    contleft
  }
}
</script>
<style scoped lang="less">
.container{
  padding: 10px  120px  0;
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
</style>
