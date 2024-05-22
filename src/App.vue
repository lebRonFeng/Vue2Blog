<template>
  <div id="app">
    <h1>App组件</h1>
    <div class="test-container">
      <Contact />
    </div>

  </div>
</template>

<script>
import Contact from "./components/Contact"
export default {
  name: 'App',
  components: {
    Contact
  },
  data() {
    return {

    }
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
  padding-top: 200px;
}
</style>
