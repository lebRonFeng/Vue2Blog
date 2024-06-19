<template>
  <div class="app-container">
    <!-- <Layout>
        <template #left>
          <div class="aside">
            <SiteAside/>
          </div>
        </template>
<div class="main">
  <RouterView />
</div>
</Layout> -->
    <FormDemo />
  </div>
</template>

<script>
import FormDemo from './components/demo/formDemo'
import Layout from "./components/Layout"
import SiteAside from "./components/SiteAside"
export default {
  name: 'App',
  components: {
    Layout,
    SiteAside,
    FormDemo
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
