<template>
  <div style="position:relative">
    <h1>博客</h1>
    <Loading v-if="isLoading"/>
    <button @click="isLoading = !isLoading">切换显示/隐藏</button>
  </div>
  
</template>

<script>
import Loading from "@/components/Loading"

export default {
  components:{
    Loading
  },
  data(){
    return {
      isLoading: true,
      
    }
  }
}
</script>

<style>

</style>