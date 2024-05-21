<template>
  <div id="app">
    <h1>App组件</h1>
    <!-- <Icon type="home"/> -->
    <div class="test-container">
      <Empty/>
    </div>

  </div>
</template>

<script>
import Empty from "./components/Empty"
// import Icon from "./components/Icon.vue"
export default {
  name: 'App',
  components: {
    Empty
  }

}

</script>

<style scoped>
.test-container {
  width: 500px;
  height: 400px;
  border: 2px solid;
  margin: 0 auto;
  position: relative;
}
</style>
