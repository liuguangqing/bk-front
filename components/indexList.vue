<template>
  <div>
    <nuxt-link :to="'/indexDetail?essayId=' + sendIte.essayId">
      <ul class="bk_list">
        <li class="bk_item">
          <div class="img">
            <img
              :src="sendIte.icon"
              alt
            >
          </div>
          <div class="text">
            <h2>{{sendIte.title}}</h2>
            <p>{{sendIte.desc}}</p>
            <div class="crumbs">
              <tag-crumbs :tags="sendIte.tags"/>
            </div>
            <div class="date">
              <span>发布时间：{{sendIte.issueTime}}</span>
              <span>查看：{{sendIte.view}}</span>
              <span>点赞：{{sendIte.good}}</span>
            </div>
          </div>
        </li>
      </ul>
    </nuxt-link>
  </div>
</template>
<script>
import tagCrumbs from '~/components/crumbs'
export default {
  data() {
    return {}
  },
  components: {
    tagCrumbs
  },
  mounted() {
    console.log('print')
    console.log(this.sendIte)
  },
  props: ['sendIte']
}
</script>
<style lang="less" scoped>
.asidetit {
  text-align: center;
  padding-top: 20px;
  img {
    width: 55%;
    height: auto;
    border-radius: 100%;
    padding: 7px;
    background-color: rgba(0, 0, 0, 0.2);
  }
}
.asidecon {
  padding: 20px 0 20px 40px;
  a {
    line-height: 40px;
    font-size: 20px;
    &:hover {
      color: red;
    }
  }
}
.bk_list {
  .bk_item {
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #ccc;
    padding-top: 10px;
    .img {
      width: 260px;
      height: 145px;
      border-radius: 3px;
      transition: 0.4s;
      flex-grow: 0;
      flex-shrink: 0;
      margin-right: 20px;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .img:hover {
      transform: scale(1.1);
    }
    .text {
      flex-grow: 0;
      h2 {
        font-size: 24px;
      }
      p {
        margin: 10px 0;
        word-break: break-all;
        text-overflow: ellipsis;
        -webkit-line-clamp: 3;
        display: -webkit-box;
        height: 80px;
        overflow: hidden;
        -webkit-box-orient: vertical;
        line-height: 28px;
      }
      .crumbs {
        margin-bottom: 10px;
      }
      .crumbs:hover {
      }
      .date {
        margin-bottom: 10px;
        font-size: 14px;
        color: #E6A23C;
      }
    }
  }
}
</style>