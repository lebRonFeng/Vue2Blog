<template>
  <div v-loading="isLoading" class="home-container" ref="container" @wheel="dealWheel">
    <ul class="carousel-container" :style="{
    marginTop,
  }" @transitionend="handleTransitionEnd">
      <li v-for="item in banners" :key="item.id">
        <CarouselItem :carousel="item" />
      </li>
    </ul>
    <div v-show="index >= 1" @click="switchTo(index - 1)" class="icon icon-up">
      <Icon type="arrowUp" />
    </div>
    <div v-show="index < banners.length - 1" @click="switchTo(index + 1)" class="icon icon-down">
      <Icon type="arrowDown" />
    </div>
    <ul class="indicator">
      <li :class="{
    active: i === index,
  }" v-for="(item, i) in banners" :key="item.id" @click="switchTo(i)"></li>
    </ul>
  </div>
</template>

<style lang="less" scoped>
@import "~@/styles/mixin.less";
@import "~@/styles/var.less";

.home-container {
  width: 100%;
  height: 100vh;
  position: relative;
  overflow: hidden;

  // 测试
  // width:60%;
  // height: 40vh;
  // height: 300px;
  // overflow:visible;
  // border: 2px solid #008c8c;
  // margin: 100px auto;

  ul {
    margin: 0;
    list-style: none;
    padding: 0;
    position: relative;
  }
}

.carousel-container {
  width: 100%;
  height: 100%;
  transition: 500ms;

  li {
    width: 100%;
    height: 100%;
  }
}

.icon {
  .self-center();
  font-size: 30px;
  @gap: 25px;
  color: @gray;
  cursor: pointer;
  transform: translateX(-50%);

  &.icon-up {
    top: @gap;
    animation: jump-up 2s infinite;
  }

  &.icon-down {
    top: auto;
    bottom: @gap;
    animation: jump-down 2s infinite;
  }

  @jump: 5px;

  @keyframes jump-up {
    0% {
      transform: translate(-50%, @jump);
    }

    50% {
      transform: translate(-50%, -@jump);
    }

    100% {
      transform: translate(-50%, @jump);
    }
  }

  @keyframes jump-down {
    0% {
      transform: translate(-50%, -@jump);
    }

    50% {
      transform: translate(-50%, @jump);
    }

    100% {
      transform: translate(-50%, -@jump);
    }
  }
}

.indicator {
  .self-center();
  transform: translateY(-50%);
  left: auto;

  right: 20px;

  li {
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: @words;
    cursor: pointer;
    margin-bottom: 10px;
    border: 1px solid #fff;
    box-sizing: border-box;

    &.active {
      background: #fff;
    }
  }
}
</style>

<script>
// import { getBanners } from "@/api/banner";
import CarouselItem from "./Carouselitem";
import Icon from "@/components/Icon";
import bannersData from "./banners";
import featchData from "./fetchData";
export default {
  components: {
    CarouselItem,
    Icon,
  },
  mixins: [featchData([])],
  data() {
    return {
      // banners: [],
      index: 0, // 当前显示的是第几张轮播图
      containerHeight: 0, // 整个容器的高度
      switching: false,
      // isLoading: true,
    };
  },
  // created() {
    // this.banners = await getBanners();
    // setTimeout(() => {
    //   this.banners = bannersData;
    //   this.isLoading = false
    // }, 3000)
    // this.banners = bannersData
  // },
  mounted() {
    this.containerHeight = this.$refs.container.clientHeight;
    window.addEventListener("resize", this.handleResize)
  },
  destroyed() {
    window.removeEventListener("resize", this.handleResize)
  },
  computed: {
    marginTop() {
      return -this.index * this.containerHeight + "px";
    },
  },
  methods: {
    // 切换轮播图
    switchTo(i) {
      this.index = i;
    },
    dealWheel(e) {
      if (this.switching || (e.deltaY <= 5 && e.deltaY >= -5)) {
        return
      }
      if (e.deltaY < -5 && this.index > 0) {
        this.switching = true;
        this.index--;
      } else if (e.deltaY > 5 && this.index < this.banners.length - 1) {
        this.switching = true;
        this.index++;
      }
    },
    handleTransitionEnd() {
      this.switching = false;
    },
    handleResize() {
      this.containerHeight = this.$refs.container.clientHeight;
    },
    async fetchData1() {
      return await this.getBannersLit()
    },
    getBannersLit() {
      setTimeout(() => {
        this.banners = bannersData;
      }, 3000)
    }
  },
};
</script>
