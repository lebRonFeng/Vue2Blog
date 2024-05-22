<template>
  <div id="app">
    <div class="test-container">
      <Layout>
        <template #left>
          <div class="left">
            左边栏区域，宽度适应内容，溢出隐藏
          </div>
        </template>
        <div class="main">
          主区域，宽度占满剩余空间，溢出隐藏 主区域，宽度占满剩余空间，溢出隐藏 主区域，宽度占满剩余空间，溢出隐藏 主区域，宽度占满剩余空间，溢出隐藏
        </div>
        <template #right>
          <div class="right">
            右边栏区域，宽度适应内容，溢出隐藏
          </div>
        </template>
      </Layout>
    </div>
  </div>
</template>

<script>
import Layout from "./components/Layout"
// import SiteAside from "./components/SiteAside"
export default {
  name: 'App',
  components: {
    Layout,
    // SiteAside
  },

}

</script>

<style scoped lang="less">
.test-container {
  width: 80%;
  height: 600px;
  border: 2px solid;
  margin: 0 auto;
}

.left {
  width: 200px;
  height: 100%;
  background: lightcoral;
}

.main {
  width: 100%;
  height: 100%;
  background: lightblue;
}

.right {
  width: 150px;
  height: 100%;
  background: rgb(89, 227, 92);
}
</style>
