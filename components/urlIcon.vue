<template>
    <div>
        <div class="user_icon" @click="showinfoFn">
            <img src="http://xiangjv.top/xiangjv_user_icon.png" alt="">
        </div>
        <div class="user_list" v-show="showinfo" @click="showinfoFn">
            <a href="http://www.xiangjv.top">首页</a>
            <!-- <nuxt-link to="/msg">公告</nuxt-link> -->
            <nuxt-link to="/tag">标签云</nuxt-link>
            <nuxt-link to="/frontAbout">前端相关</nuxt-link>
            <nuxt-link to="/links">友链</nuxt-link>
            <nuxt-link to="/self">博主相关</nuxt-link>
            <nuxt-link to="/about">关于</nuxt-link>
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
    img {
        width: 100%;
        height: 100%;
        border-radius: 100%;
        padding: 1px;
        border: 1px solid #f0f0f0;
        box-sizing: border-box;
        background-color: #fff;
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
