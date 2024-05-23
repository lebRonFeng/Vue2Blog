import Vue from 'vue'
import App from './App.vue'
import "./styles/global.less"
import router from './router'
Vue.config.productionTip = false

// ①测试一下纯DOM操作 
// import styles from "./styles/message.module.less";
// console.log(styles)
// const div = document.createElement("div");
// div.className = styles.message;
// div.innerText = "qwert";
// document.body.appendChild(div)

// ②得到组件生成的根DOM
// function getComponentRootDom(comp, props){
//   const vm = new Vue({
//     render: (h) => h(comp, { props }),
//   });
//   vm.$mount();
//   return vm.$el;
// }
// import Icon from "./components/Icon";
// var dom = getComponentRootDom(Icon, { type: "home"})
// console.log(dom)

// ③向实例注入成员
Vue.prototype.$sayHello = function() {
  console.log("hello !!")
}
var vm = new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

vm.$sayHello()