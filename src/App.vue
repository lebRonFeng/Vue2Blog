<template>
  <div id="app">
    <h1>App组件</h1>
    <p>姓：{{firstName}}</p>
    <p>名：{{lastName}}</p>
    <!-- <p>全名：{{firstName + lastName}}</p> -->
    <p>全名：{{ getFullName() }}</p>
    <p>全名：{{ fullName }}</p>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return {
      firstName: "勒布朗",
      lastName: "詹姆斯"
    }
  },
  computed:{
    fullName() {
      return this.firstName + "·" + this.lastName;
    }
  },
  methods: {
    getFullName() {
      return this.firstName + "·" + this.lastName;
    }
  }


  // 复杂计算属性
  // computed:{
  //   fullName() {
  //     get(){
  //       return this.firstName + "·" + this.lastName;
  //     },
  //     set(val){
  //       this.firstName = val[0];
  //       this.lastName = val.substr(1)
  //     }
  //   }
  // },
}

</script>

<style></style>
