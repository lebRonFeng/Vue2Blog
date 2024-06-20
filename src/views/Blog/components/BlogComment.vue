<template>
  <div class="blog-comment-container">
    <MessageArea title="评论列表" :subTitle="`(${data.total})`" :list="data.rows" :isListLoading="isLoading"
      @submit="handleSubmitForm" />
  </div>
</template>

<script>
import MessageArea from '@/components/MessageArea';
import fetchData from '@/mixins/fetchData.js';
import { getComments, postComment } from '@/api/blog'
export default {
  mixins: [fetchData({ total: 0, rows: [] })],
  components: {
    MessageArea
  },
  data() {
    return {
      page: 1,
      limit: 10
    }
  },
  methods: {
    async fetchData() {
      return await getComments(this.$route.params.id, this.page, this.limit)
    },
    async handleSubmitForm(formData, cb) {
      try {
        let resp = await postComment({
          blogId: this.$route.params.id,
          ...formData,
        });
        this.data.rows.unshift(resp);
        this.data.total++;
        cb('评论成功！')
      } catch (err) {
        console.log(err, 'err')
      }

    }
  }
}
</script>
<style scoped lang="less">
.blog-comment-container {
  margin: 30px 0;
}
</style>