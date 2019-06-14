<template>
  <section class="container">
    <header>
      <h2>友情链接</h2>
    </header>
    <div class="mylinks">
      <div class="mylinkTitle">我的链接</div>
      <div class="mylinkCon">
        <a  :href="ite.cont" v-for="(ite, ind) in friendList" :key="ind"  target="_blank">
          <div class="mylinkItem">
            <img :src="ite.icon" alt>
            <div class>{{ite.title}}</div>
          </div>
        </a>
      </div>
    </div>
  </section>
</template>
<script>
import servers from '~/plugins/axios'
export default {
  head() {
    return {
      title: `友情链接 - 🍊 技术分享，香菊网-前端技术博客(www.xiangjv.top)`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: `友情链接 - 🍊 技术分享，香菊网-前端技术博客(www.xiangjv.top)`
        }
      ]
    }
  },
  async asyncData ({ params, error, store }) {
    // 友链列表
    let linkdata = await servers.getfriend()
    console.log(linkdata)
    return {
      friendList: linkdata.data
    }
  },
  mounted() {
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
a {
  display: inline-block;
}
.el-col {
  box-sizing: border-box;
  padding-right: 10px;
  .grid-content {
    height: 200px;
    background-color: rgba(250, 250, 250, 0.9);
  }
}
header {
  & > h2 {
    text-align: left;
    font-size: 30px;
    color: #555;
    margin-bottom: 20px;
  }
}
.mylinks {
  .mylinkTitle {
    line-height: 30px;
    // border-radius: 10px;
    border-left: 5px solid #06aaff;
    background: #f0f2f7;
    padding: 0 10px;
    color: #777;
  }
  .mylinkCon {
    & > a {
      padding: 20px 15px 0 0;
    }
    .mylinkItem {
      display: inline-block;
      align-items: center;

      text-align: center;
      img {
        width: auto;
        height: 40px;
        margin-bottom: 14px;
        border-radius: 8px;
        padding: 4px 4px;
        box-shadow: 0 0 10px #a1a1a1;
      }
      div {
        font-size: 15px;
        color: #666;
      }
    }
  }
}
</style>
