<template>
    <div>
        <div class="user_icon" @click="showinfoFn">
            <img src="http://xiangjv.top/xiaoxin.png" alt="">
        </div>
        <div class="user_list" v-show="showinfo" @click="showinfoFn">
            <nuxt-link to="/bk_front/home/all-1">首页</nuxt-link>
            <!-- <nuxt-link to="/bk_front/msg">公告</nuxt-link> -->
            <nuxt-link to="/bk_front/tag">标签云</nuxt-link>
            <nuxt-link to="/bk_front/frontAbout">前端相关</nuxt-link>
            <nuxt-link to="/bk_front/links">友链</nuxt-link>
            <nuxt-link to="/bk_front/self">博主相关</nuxt-link>
            <nuxt-link to="/bk_front/about">关于</nuxt-link>
        </div>
    </div>
</template>
<script>
export default {
 data(){
     return {
         showinfo: false
     }
 },
 methods:{
     showinfoFn(){
         this.showinfo= !this.showinfo
     }
 }   
}
</script>
<style lang="less">
.user_icon {
    width: 40px;
    height: 40px;
    position: fixed;
    top: 100px;
    left: 20px;
    border-radius: 100%;
    // background-color: red;
    img {
        width: 100%;
        height: 100%;
    }
}
.user_list {
    position: fixed;
    top: 150px;
    left: 20px;
    background-color: #fff;   
    border-radius: 10px;
    box-shadow: 2px 2px 8px rgba(100, 100, 100, .4);
    padding: 20px 20px ;
    a {
        padding: 4px 0;
    }
}

</style>
