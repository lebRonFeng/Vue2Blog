<template>
  <div>
    <h1>首页</h1>
    <button @click="onClick">click</button>
  </div>
</template>

<script>
export default {
  methods: {
    onClick(){
      this.$sayHello()
    }
  }
}
</script>

<style>

</style>