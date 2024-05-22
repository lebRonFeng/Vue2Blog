<template>
  <div class="layout-container">
    <header>
      <slot name="left"></slot>
    </header>
    <main>
      <slot></slot>
    </main>
    <footer>
      <slot name="right"></slot>
    </footer>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped lang="less">
.layout-container{
  width: 100%;
  height: 100%;
  display: flex;
  .left, .right{
    flex: 0 0 auto;
  }
  .main{
    flex: 1 1 auto;
  }
}
</style>