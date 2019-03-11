<template>
    <section  class="leftcontain" >
        <div :class="[{'right_all':fixedar}]">
            <div class="asidetit">
                <img src="http://xiangjv.top/xiaoxin.png" alt="">
            </div>
            <div class="asidecon">
                <nuxt-link to="/home/-1">首页</nuxt-link>
                <!-- <nuxt-link to="/msg">公告</nuxt-link> -->
                <nuxt-link to="/tag">标签云</nuxt-link>
                <nuxt-link to="/frontAbout">前端相关</nuxt-link>
                <nuxt-link to="/links">友链</nuxt-link>
                <nuxt-link to="/self">博主相关</nuxt-link>
                <nuxt-link to="/about">关于</nuxt-link>
            </div>
        </div>
        
    </section>
</template>
<script>
  export default{
    data(){
      return {
          fixedar: false
      }
    },
    components : {
    },
    mounted () {
        this.scrollLIst()
    },
    methods: {
            scrollLIst(){
      let _this = this
      let scrollright = document.getElementsByClassName('conttall')[0]
      scrollright.addEventListener('scroll', function(){
        console.log(scrollright.scrollTop)
        if(scrollright.scrollTop >= 120){
          _this.fixedar = true
        }else {
          _this.fixedar = false
        }
      })
    },
    },
  }
</script>
<style lang="less" scoped>
.right_all{
  position: fixed;
  width: 192px;
  background-color: rgba(250, 250, 250, 0.93);
  border-radius:4px;
}
.leftcontain {
  width: 192px;
  border-radius:4px;
  background-color: rgba(250, 250, 250, 0.93);
  min-height:20px;
}
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