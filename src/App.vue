<template>
  <div id="app">
    <h1>App组件</h1>
    <div class="test-container">
      <ImageLoader 
        src="https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?fit-crop&crop=entropy&w=3456&h=2304" 
        placeholder="https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?w=100" 
        :duration="3000"
        @load="handleLoaded"/>
    </div>

  </div>
</template>

<script>
import ImageLoader from "./components/ImageLoader"
export default {
  name: 'App',
  components: {
    ImageLoader
  },
  data() {
    return {

    }
  },
methods:{
  handleLoaded() {
    console.log("图片加载完成")
  }
}
}

</script>

<style scoped>
.test-container {
  width: 500px;
  height: 400px;
  border: 2px solid;
  margin: 0 auto;
  /* position: relative; */
}
</style>
