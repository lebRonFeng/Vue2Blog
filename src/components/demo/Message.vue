<template>
  <div class="message-container">
    <div class="content">
      <slot></slot>
    </div>
    <button>确定</button>
    <button>关闭</button>
  </div>
</template>

<script>
export default {
  props:["msg"]
}
</script>
 
<style>
.message-container {
  /* width: 200px;
  height: 200px; */
  border: 1px solid #e6e6e6;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 20px;
}
</style>