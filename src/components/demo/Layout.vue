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

<style>

</style>