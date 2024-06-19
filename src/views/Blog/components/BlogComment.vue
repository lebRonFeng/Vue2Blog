<template>
  <div class="blog-comment-container">
    <MessageArea title="评论列表" :subTitle="(`$(data.total)`)" 
    :list="data.rows" :isListLoading="isLoading" />
  </div>
</template>

<script>
import MessageArea from '@/components/MessageArea';
import fetchData from '@/mixins/fetchData.js';
import {getComments} from '@/api/blog'
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
    }
  }
}
</script>