<template>
  <section>
    <div>
      <div id="SOHUCS" :sid="sendEssayId"></div>
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {}
  },
  props: ['sendEssayId'],
  mounted() {
    window.changyan.api.config({
      appid: 'cyu8TykID',
      conf: 'prod_f93bf75ab6b5618003d9a02c4e56cc6d'
    })
  }
}
</script>
<style lang="less">
</style>
