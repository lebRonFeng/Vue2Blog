import Vue from 'vue'
import App from './App.vue'
import "./styles/global.less"
import router from './router'
Vue.config.productionTip = false

// 测试一下纯DOM操作
import styles from "./styles/message.module.less";
console.log(styles)
const div = document.createElement("div");
div.className = styles.message;
div.innerText = "qwert";
document.body.appendChild(div)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
