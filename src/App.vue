<template>
  <div class="app-container">
    <Layout>
      <template #left>
        <div class="aside">
          <SiteAside />
        </div>
      </template>
      <div class="main">
        <RouterView />
      </div>
    </Layout>
    <ToTop/>
  </div>
</template>

<script>
import Layout from "./components/Layout"
import SiteAside from "./components/SiteAside"
import ToTop from "./components/ToTop"
export default {
  name: 'App',
  components: {
    Layout,
    SiteAside,
    ToTop
  },
}

</script>

<style scoped lang="less">
@import "~@/styles/mixin.less";

.app-container {
  .self-fill(fixed);
}

.aside {
  width: 250px;
  height: 100%;
}
</style>
