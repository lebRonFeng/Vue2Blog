<template>
  <layout>
    <BlogList />
    <template #right>
      <BlogCategory />
    </template>
  </layout>
</template>

<script>
import Layout from '@/components/Layout';
import BlogCategory from "./BlogCategory";
import BlogList from "./BlogList";

export default {
  components: { Layout, BlogCategory, BlogList },
  data() {
    return {
      list: [
        {
          name: "a",
          isSelect: false,
        },
        {
          name: "b",
          isSelect: false,
        },
        {
          name: "c",
          isSelect: true,
          children: [
            { name: "c-1", isSelect: false },
            { name: "c-2", isSelect: false },
            {
              name: "c-3",
              isSelect: false,
              children: [
                { name: "c-3-1", isSelect: false },
                { name: "c-3-2", isSelect: false },
                { name: "c-3-3", isSelect: false },
              ],
            },
          ],
        },
        {
          name: "d",
          isSelect: false,
        },
      ],
    };
  },
  create() {
    console.log(this.$route);
  }
  // methods: {
  //   handleClick(item) {
  //     console.log(item, "item");
  //   },
  // },
};
</script>

<style></style>