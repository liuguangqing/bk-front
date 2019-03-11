<template>
  <section class="container">
    <div>
      <div class="content-box" v-for="(ite,ind) in dataList" :key="ind">
        <div class="posts-default-img">
          <nuxt-link
            :to="'/indexDetail/' + ite.es_id"
          >
            <div class="overlay"></div>
            <img
              class="lazy thumbnail"
              :src="ite.es_icon?ite.es_icon:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1550495190139&di=358aa8108d0d7f61845cea10336b86b5&imgtype=0&src=http%3A%2F%2Fpic.58pic.com%2F58pic%2F16%2F00%2F41%2F35q58PICscU_1024.jpg'"
              style="display: inline-block;"
            >
          </nuxt-link>
        </div>
        <div class="posts-default-box">
          <div class="posts-default-title">
            <div class="post-entry-categories">
              <nuxt-link
                v-for="(iteImg, indImg) in ite.es_tagList"
                :key="indImg"
                :to="'/indexDetail/' + ite.es_id"
                rel="tag"
              >
                {{iteImg}}
              </nuxt-link>
            </div>
            <h2 class="font-h2">
              <nuxt-link
                :to="'/indexDetail/' + ite.es_id"
              >{{ite.es_title}}</nuxt-link>
            </h2>
          </div>
          <div class="posts-default-content">
            <div class="posts-default-info">
              <ul class="posts-text-ul">
                <li class="post-author">
                </li>
                <li class="ico-cat">
                  <i class="el-icon-tickets"></i>
                  <!-- <a href="http://www.linhut.cn/y/program/python"> -->
                    {{ite.es_author}}
                  <!-- </a> -->
                </li>
                <li class="ico-time">
                  <i class="el-icon-time"></i>
                  {{formatDate(ite.es_isTime)}}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import servers from '~/plugins/axios'
import { formatDate } from '~/assets/js/base.js'
export default {
  data() {
    return {
      dataList: []
    }
  },
  mounted() {
    let params = { cunt: 'css,js,H5', pageSize: 10 }
    this.getessayPage(params)
  },
  methods: {
    formatDate(date, fmt) {
      return formatDate(date, fmt)
    },
    async getessayPage(params) {
      let data = await servers.getFrontAbout(params)
      data.data.forEach(element => {
        element.es_tagList = element.es_tags.split(',')
      })
      // this.$loading({ fullscreen: false })
      this.dataList = data.data
    }
  }
}
</script>
<style scoped lang="less">
.container {
  padding: 10px 10px 0;
  min-height: 900px !important;
}
a {
  display: inline-block;
}
.posts-default-img {
  a {
    width: 100%;
  }
}
.content-box {
  widows: 100%;
  padding: 2% 2%;
  background-color: #fff;
  border-bottom: 1px solid #f5f4f4;
  margin-bottom: 10px;
  border-radius: 2px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);
  img {
    width: 100%;
    margin-bottom: 8px;
  }
  .post-entry-categories a {
    padding: 4px 10px;
    background-color: #19b5fe;
    color: white;
    font-size: 12px;
    line-height: 16px;
    font-weight: 400;
    margin: 0 5px 5px 0;
    border-radius: 2px;
    display: inline-block;
  }
  .font-h2 {
    font-size: 15px;
    margin: 0px 0px 5px 0px;
    line-height: 1.5;
    border-bottom-width: 0;
    padding: 0;
    font-weight: bold;
  }
  .posts-text-ul {
    margin-left: -14px;
    li {
      display: inline-block;
      margin-right: 3px;
      font-size: 12px;
      //   letter-spacing: -0.2px;
      //   float: left;
      padding: 0;
      margin: 0px 10px 0px 0px;
      color: #748594;
      position: relative;
    }
  }
}
</style>
