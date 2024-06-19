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
    <LoadingButtonVue :click="dealBtn" />
  </div>
</template>

<script>
import LoadingButtonVue from './components/demo/LoadingButton.vue'
import Layout from "./components/Layout"
import SiteAside from "./components/SiteAside"
export default {
  name: 'App',
  components: {
    Layout,
    SiteAside,
    LoadingButtonVue
  },
  methods: {
    dealBtn(count) {
      console.log('子组件数据：', count)
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve('请填写账号')
        }, 3000);
      })

    }
  }
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
