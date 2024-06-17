<template>
  <div>
    <h1>博客</h1>
    <RightList :list="list" @select="handleClick" />
  </div>
</template>

<script>
import RightList from "./RightList";

export default {
  components: {
    RightList,
  },
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
  methods: {
    handleClick(item) {
      console.log(item, "item");
    },
  },
};
</script>

<style></style>