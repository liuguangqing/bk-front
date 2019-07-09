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
    margin-bottom: 4px;
    border: 1px solid rgba(64,158,255,.2);
    color: #0b351a;
    background-color: rgba(46, 132, 89, 0.1);
    border-left: none;
    border-right: none;
    &::before {
      content: '';
      display: inline-block;
      width: 0;
      height: 0;
      border: 10px solid transparent;
      border-left: 4px solid rgba(250, 250, 250, 0.93);
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
      border-right: 4px solid rgba(250, 250, 250, 0.93);
      position: absolute;
      right: 0;
      top: -1px;
    }
  }
</style>