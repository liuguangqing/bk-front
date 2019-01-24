<template>
  <div>

    <el-tag v-for="(ite,ind) in dataTag" :key="ind">{{ite}}</el-tag>
    <!-- <el-tag type="success">标签二</el-tag>
    <el-tag type="info">标签三</el-tag>
    <el-tag type="warning">标签四</el-tag>
    <el-tag type="danger">标签五</el-tag> -->
  </div>
</template>
<script>
export default {
  data() {
    return {
      dataTag: []
    }
  },
  components: {},
  mounted() {
    this.dataTag = this.tags;
    this.dataTag = this.dataTag.split(',')
  },
  props: ['tags']
}
</script>
<style lang="less" scoped>
  .el-tag{
    margin-right: 10px
  }
</style>