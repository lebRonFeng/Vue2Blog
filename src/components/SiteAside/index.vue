<template>
  <div class="site-aside-container">
    <Avatar :size="150" :url="cq" />
    <h1 class="title">庆余年的小窝</h1>
    <Menu />
    <Contact />
    <p class="footer">
      黑ICP备17001719号
    </p>
  </div>
</template>

<script>
import cq from "@/assets/cq.webp"
import Avatar from "@/components/Avatar";
import Menu from "./Menu"
import Contact from "./Contact"
export default {
  components: {
    Avatar,
    Menu,
    Contact
  },
  data() {
    return {
      cq: cq
    }
  }
}
</script>

<style scoped lang="less">
.site-aside-container {
  width: 100%;
  height: 100%;
  padding: 20px 0;
  box-sizing: border-box;
  background: #202020;
  overflow-x: hidden;
  overflow-y: auto;
}

.footer {
  text-align: center;
  font-size: 12px;
  color: #c1bfbf;
}

.title {
  text-align: center;
  color: #fff;
  font-size: 1.2em;
}
</style>