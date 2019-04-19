<template>
    <div class="err_bg">
        <div class="err_tain">
            <h2 v-if="error.statusCode == 404">404页面不存在</h2>
            <h2 v-else>500服务器错误</h2>
            <nuxt-link to="/home/all-1">返回首页</nuxt-link>
        </div>
    </div>
</template>
<script>
import servers from '~/plugins/axios'

export default {
  props: ['error']
}
</script>
<style lang="less">
.err_bg {
    padding: 10px;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    .err_tain {
        padding: 10px;
        box-sizing: border-box;
        width: 100%;
        height: 100%;
        height: 100%;
        min-height: 400px;
        border-radius: 10px;
        background:#fff url(http://xiangjv.top/xiangjv_404.png) no-repeat center top / 40%;
        text-align: center;
        padding-top: 33%;
        color: #2e2e2e;
        font-size: 16px;
        font-family: cursive;
        h2 {
            padding: 10px;
        }
    }
}
</style>