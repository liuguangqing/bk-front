<template>
  <div>
    <nuxt-link :to="'/indexDetail/' + sendIte.es_id">

    <!-- <nuxt-link :to="{path: '/xiangjv/indexDetail',params:{dealNmae: sendIte.es_id}}"> -->
      <ul class="bk_list">
        <li class="bk_item">
          <div class="img">
            <img
              :src="sendIte.es_icon?sendIte.es_icon:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1550495190139&di=358aa8108d0d7f61845cea10336b86b5&imgtype=0&src=http%3A%2F%2Fpic.58pic.com%2F58pic%2F16%2F00%2F41%2F35q58PICscU_1024.jpg'"
              alt
            >
          </div>
          <div class="text">
            <h2>{{sendIte.es_title}}</h2>
            <p>{{sendIte.es_desc}}</p>
            <div class="crumbs">
              <tag-crumbs :tags="sendIte.es_tags"/>
            </div>
            <div class="date">
              <span>发布时间：{{sendIte.es_isTime}}</span>
              <span>查看：{{sendIte.es_view}}</span>
              <span>点赞：{{sendIte.es_good}}</span>
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