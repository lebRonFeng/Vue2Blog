<template>
  <div id="app">
    <h1>App组件</h1>
    <div class="test-container">
      <SiteAside />
    </div>

  </div>
</template>

<script>
import SiteAside from "./components/SiteAside"
export default {
  name: 'App',
  components: {
    SiteAside
  },

}

</script>

<style scoped lang="less">
@import "~@/styles/global.less";
.test-container {
  width: 250px;
  margin: 0 auto; 
}
</style>
