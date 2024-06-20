<template>
  <layout>
    <div ref="mainContainer" class="main-container" v-loading="isLoading">
      <BlogDetail :blog="data" v-if="data"/>
      <BlogComment v-if="!isLoading"/>
    </div>
    <template #right>
      <div class="right-container" v-loading="isLoading">
        <BlogTOC :toc="data.toc" v-if="data" />
      </div>
    </template>
  </layout>
</template>

<script>
import fetchData from "@/mixins/fetchData";
import { getBlog } from "@/api/blog";
import Layout from '@/components/Layout';
import BlogDetail from './components/BlogDetail.vue';
import BlogTOC from "./components/BlogTOC.vue";
import BlogComment from "./components/BlogComment.vue";
export default {
  components: { Layout, BlogDetail, BlogTOC, BlogComment },
  mixins: [fetchData(null)],
  methods: {
    async fetchData() {
      return await getBlog(this.$route.params.id)
    },
    handleScroll(){
      this.$bus.$emit('mainScroll', this.$refs.mainContainer);
    },
    handleSetMainScroll(scrollTop){
      this.$refs.mainContainer.scrollTop = scrollTop;
    }
  },
  mounted(){
    this.$refs.mainContainer.addEventListener("scroll", this.handleScroll)
  },
  created(){
    this.$bus.$on("setMainScroll", this.handleSetMainScroll);
  },
  beforeDestroy() {
    this.$bus.$emit("mainScroll");
    this.$refs.mainContainer.removeEventListener("scroll", this.handleScroll);
    this.$bus.$off("setMainScroll", this.handleSetMainScroll);
  }
}
</script>

<style scoped lang="less">
.main-container{
  overflow-y: scroll;
  height: 100%;
  box-sizing: border-box;
  padding: 20px;
  position: relative;
}
</style>