<template>
    <section  class="leftcontain" >
        <div :class="[{'right_all':true}]">
            <div class="asidetit">
                <img src="http://www.xiangjv.top/xiangjv_user_icon.png" alt="香菊网">
            </div>
            <div class="asidecon">
                <a href="http://www.xiangjv.top">首页</a>
                <!-- <nuxt-link to="/msg">公告</nuxt-link> -->
                <nuxt-link to="/tag">标签云</nuxt-link>
                <nuxt-link to="/frontAbout">前端相关</nuxt-link>
                <nuxt-link to="/links">友链</nuxt-link>
                <nuxt-link to="/self">博主相关</nuxt-link>
                <nuxt-link to="/about">关于</nuxt-link>
            </div>
        </div>
        <div :class="['search_box', {'right_search': true}]">
          <input type="text" placeholder="搜索： nginx 启动 ..." :class="['searchInp', {'hover_Inp': fixedar}]" v-model="searchVal" @keyup.enter="searchFn">
          <div :class="['putText', {'hover_putText': fixedar}]">
            <span v-for="(ite, ind ) in btnBox" @click="gofor(ite)" :key="ind" :style="{'color': readomFn()}">{{ite}}</span>
          </div>
        </div>
        <div class="locat"><span> </span></div>
    </section>
</template>
<script>
  export default{
    data(){
      return {
          fixedar: false,
          searchVal: '',
          btnBox: ['微信', 'nginx', 'nuxt', 'PM2'],
          thems:['#F56C6C', '#67C23A', '#E6A23C' , '#409EFF', '#909399']
      }
    },
    components : {
    },
    mounted () {
        this.scrollLIst()
    },
    methods: {
      readomFn () {
        return this.thems[parseInt(Math.random() * 5)]
      },
      scrollLIst(){
        let _this = this
        let scrollright = document.getElementsByClassName('conttall')[0]
        scrollright.addEventListener('scroll', function(){
          if(scrollright.scrollTop >= 120){
            _this.fixedar = true
          }else {
            _this.fixedar = false
          }
        })
      },
      searchFn () {
        console.log(this.searchVal)
        if (this.searchVal) {
          this.$router.push({path: '/',query:{searText:this.searchVal}})
        }else {
          this.$router.push('/home/all-1')
        }
      },
      gofor (t) {
        this.$router.push({path: '/',query:{searText:t}})
      }
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
.right_search {
  position: fixed;
  width: 192px;
  top: 493px;
}
.locat {
  visibility: hidden;
}
.leftcontain {
  width: 192px;
  & > div {
    border-radius:4px;
    min-height:20px;
    margin-bottom: 10px;
    background-color: rgba(250, 250, 250, 0.93);
  }
  .search_box {
    padding: 6px 4px;
    box-sizing: border-box;
    & > .putText {
      width: 100%;
      height: 0;
      overflow: hidden;
      padding: 0 4px;
      box-sizing: border-box;
      transform: translateY(4px);
      font-size: 12px;
      line-height: 24px;
      color: #333;
      transition: height .8s;
      span {
        box-sizing: border-box;
        // border: 1px solid #b1b1b1;
        // border-radius: 4px;
        text-decoration: underline;
        padding: 0px 4px;
        margin: 0 6px 6px 0;
        cursor: pointer;
        display: inline-block;
      }
    }

    .searchInp {
      width: 100%;
      height: 40px;
      border-radius: 14px;
      box-sizing: border-box;
      padding: 4px 8px;
      opacity: .8;
      border: 2px solid #e85e20;
    }
    &:hover {
      .searchInp { 
        border: 2px solid #67C23A;
      }
      .putText {
        height: 60px;
      }
    }
    .hover_putText {
      height: 60px;
    }
    .hover_Inp {
        border: 2px solid #67C23A;
    }
  }
}
.asidetit{
    text-align: center ;
    padding-top: 20px ;
    img{
        width: 55%;
        height: auto;
        border-radius: 100%;
        padding: 5px;
        background-color: rgba(200, 200, 200, 0.4);
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