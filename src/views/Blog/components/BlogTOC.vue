<template>
  <div class="blog-toc-container">
    <h2>目录</h2>
    <RightList :list="toWidthSelect" @select="handleSelect" />
  </div>
</template>

<script>
import RightList from "./RightList";
import { debounce } from '@/utils';
export default {
  components: {
    RightList,
  },
  props: {
    toc: {
      type: Array,
    },
  },
  data() {
    return {
      activeAnchor: "article-md-title-1",
      isLocation: true,
    }
  },
  created() {
    this.setSelectDebounce = debounce(this.setSelect, 50)
    this.$bus.$on("mainScroll", this.setSelectDebounce)
  },
  destroyed(){
    this.$bus.$off("mainScroll", this.setSelectDebounce)
  },
  updated(){
    const hash = location.hash;
    location.hash = "";
    this.isLocation = false;
    this.isLocation && setTimeout(() => {
      loaction.hash = hash;
    },50);
  },
  methods: {
    handleSelect(item) {
      location.hash = item.anchor;
    },
    // 设置activeAnchor为正确的值
    setSelect() {
      const range = 200;
      for (const dom of this.doms) {
        // 看一下当前这个dom元素是不是应该被选中
        if (!dom) {
          continue;
        }
        // 得到元素离视口顶部的距离
        const top = dom.getBoundingClientRect().top;
        if (top >= 0 && top <= range) {
          // 在规定的范围内
          this.activeAnchor = dom.id;
        } else if (top > range) {
          // 在规定的范围下方
          return;
        } else {
          // 在规定的范围上方
          this.activeAnchor = dom.id; // 先假设自己是激活的，燃火继续看后面
        }
      }
    }
  },
  computed: {
    // 根据toc属性以及activeAnchor得到带有isSelect属性的toc数组
    toWidthSelect() {
      const getTOC = (toc = []) => {
        return toc.map(t => ({
          ...t,
          isSelect: t.anchor === this.activeAnchor,
          children: getTOC(t.children)
        }))
      }
      return getTOC(this.toc)
    },
    // 根据toc得到它们对应的元素数组
    doms() {
      const doms = [];
      const addToDoms = (toc) => {
        for (const t of toc) {
          doms.push(document.getElementById(t.anchor));
          if (t.children && t.children.length) {
            addToDoms(t.children)
          }
        }
      }
      addToDoms(this.toc);
      return doms;
    }
  }
};
</script>

<style scoped lang="less">
.blog-toc-container {
  width: 300px;

  h2 {
    font-weight: bold;
    letter-spacing: 2px;
    font-size: 1em;
    margin: 0;
  }
}
</style>
