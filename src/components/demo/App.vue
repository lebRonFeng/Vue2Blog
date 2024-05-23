<template>
  <div>
    <p ref="para">some paragraph</p>
    <ChildComp ref="comp" />
    <button @click="handleClick">查看所有引用</button>
  </div>
</template>

<script>
import ChildComp from "./ChildComp.vue"
export default {
  components:{
    ChildComp
  },
  methods: {
    handleClick(){
      console.log(this.$refs.comp.a)
      this.$refs.comp.a = 3
    }
  }
  /*
  通过ref可以直接操作dom元素，甚至可以直接改动子组件，这些都不符合
  vue的设计理念。除非迫不得已，否则不要使用ref
  */
}
</script>

<style>

</style>