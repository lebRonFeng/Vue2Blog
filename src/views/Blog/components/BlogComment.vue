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
  created() {
    this.$bus.$on('mainScroll', this.handleScroll)
  },
  destroyed(){
    this.$bus.$off('mainScroll', this.handleScroll)
  },
  computed: {
    hasMore() {
      return this.data.rows.length < this.data.total;
    }
  },
  methods: {
    handleScroll(dom) {
      if(this.isLoading || !dom){
        // 目前正在加载更多
        return;
      }
      const range = 100; // 定一个可接受的范围，在这个范围内都算达到了底部
      const dec = Math.abs(dom.scrollTop + dom.clientHeight - dom.scrollHeight);
      if(dec <= range){
        this.fetchMore();
      }
    },
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

    },
    // 加载下一页
    async fetchMore(){
      if(!this.hasMore){
        // 没有更多了
        return;
      }
      this.isLoading = true;
      this.page++;
      const resp = await this.fetchData();
      this.data.total = resp.total;
      this.data.rows = this.data.rows.concat(resp.rows);
      this.isLoading = false;
    }
  }
}
</script>
<style scoped lang="less">
.blog-comment-container {
  margin: 30px 0;
}
</style>