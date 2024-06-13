// 公共的远程获取数据的代码
// 具体的组件中，需要提供一个远程获取数据的方法
export default function (defaultDataValue = null) {
  return {
    data() {
      return {
        isLoading: true,
        banners: defaultDataValue
      }
    },
    async created() {
      this.banners = await this.fetchData1() || defaultDataValue;
      setTimeout(() => {
        this.isLoading = false;
      },3000)
    }
  }
}