<template>
  <layout>
    <div class="main-container" v-loading="isLoading">
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
    }
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