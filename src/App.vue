<template>
    <div class="app-container">
      <Layout>
        <template #left>
          <div class="aside">
            <SiteAside/>
          </div>
        </template>
        <div class="main">
          <RouterView/>
          <AppTest/>
        </div>
      </Layout>
    </div>
</template>

<script>
import Layout from "./components/Layout"
import SiteAside from "./components/SiteAside"
import AppTest from "./components/demo/App.vue"
export default {
  name: 'App',
  components: {
    Layout,
    SiteAside,
    AppTest
  },

}

</script>

<style scoped lang="less">
@import "~@/styles/mixin.less";
.app-container {
  .self-fill(fixed);
}

.aside{
  width: 250px;
  height: 100%;
}

</style>
