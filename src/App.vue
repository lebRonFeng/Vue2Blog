<template>
  <div id="app">
    <h1>App组件</h1>
    <Avartar :url="require('@/assets/cq.webp')" :size="50"/>
  </div>
</template>

<script>
import Avartar from "./components/Avatar"
export default {
  name: 'App',
  components: {
    Avartar
  }
}
</script>

<style></style>
