<template>
    <div>
        <div class="asidetit">
            <img src="../assets/images/user.png" alt="">
        </div>
        <div class="asidecon">
            <nuxt-link to="/">首页</nuxt-link>
            <nuxt-link to="/msg">公告</nuxt-link>
            <nuxt-link to="/tag">标签云</nuxt-link>
            <nuxt-link to="/tag">前端相关</nuxt-link>
            <nuxt-link to="/links">友链</nuxt-link>
            <nuxt-link to="/self">博主相关</nuxt-link>
            <nuxt-link to="/about">关于</nuxt-link>
        </div>
    </div>
</template>
<script>
  export default{
    data(){
      return {
      }
    },
    components : {
    },
    mounted () {

    }
  }
</script>
<style lang="less" scoped>
.asidetit{
    text-align: center ;
    padding-top: 20px ;
    img{
        width: 55%;
        height: auto;
        border-radius: 100%;
        padding: 7px;
        background-color: rgba(0, 0, 0, 0.2);
    }

}
.asidecon{
    padding: 20px  0 20px 40px ;
    a{
        line-height: 40px ;
        font-size: 20px ;
        &:hover{
            color: #ea8279 ;
        }
    }
}
</style>