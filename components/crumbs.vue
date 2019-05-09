<template>
  <div>
    <el-tag v-for="(ite,ind) in dataTag" :key="ind"  size="mini"  type="warning">{{ite}}</el-tag>
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
    margin-right: 10px;
    padding: 0 16px;
    position: relative;
    border-left: none;
    border-right: none;
    &::before {
      content: '';
      display: inline-block;
      width: 0;
      height: 0;
      border: 10px solid transparent;
      border-left: 6px solid rgba(250, 250, 250, 0.93);
      position: absolute;
      left: 0;
      top: -1px;
    }
    &::after {
      content: '';
      display: inline-block;
      width: 0;
      height: 0;
      border: 10px solid transparent;
      border-right: 6px solid rgba(250, 250, 250, 0.93);
      position: absolute;
      right: 0;
      top: -1px;
    }
  }
</style>