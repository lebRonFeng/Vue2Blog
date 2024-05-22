<template>
  <div id="app">
    <h1>App组件</h1>
    <div class="test-container">
      <Menu />
    </div>

  </div>
</template>

<script>
import Menu from "./components/Menu"
export default {
  name: 'App',
  components: {
    Menu
  },

}

</script>

<style scoped lang="less">
.test-container {
  width: 400px;
  height: 400px;
  border: 2px solid red;
  background: #000;
  margin: 0 auto;
}
</style>
