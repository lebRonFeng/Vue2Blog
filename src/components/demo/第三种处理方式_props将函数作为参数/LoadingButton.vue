<template>
  <div>
    <button @click="handleClick" :disabled="isLoading">
      {{ isLoading ? "loading": "submit" }}
    </button>
    <div class="err">{{ error }}</div>
  </div>
</template>

<script>
export default {
  props: {
    click: Function
  },
  data(){
    return {
      count: 0, //点击的次数
      isLoading: false,
      error: "wewe"
    }
  },
  methods:{
    async handleClick(){
      /**
       * 点击次数+1
       * 错误消息清空
       * 为了防止重复点击，需要先将isLoading设置为true
       * 通知父组件：【我被点击了】，并传递当前的点击数
       * 等待父组件处理（有可能是异步的），将父组件处理的结果设置到error
       */
      this.count++;
      this.error = "";
      this.isLoading = true;
      if(this.click){  // 判断父组件是否传递了时间处理函数click
        const err = await this.click(this.count);
        this.isLoading = false;
        this.error = err;
      }
      
    }
  }
}
</script>

<style>
.err{
  color: #f40;
  font-size: 12px;
}
</style>