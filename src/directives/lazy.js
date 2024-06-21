import eventBus from "@/eventBus"
import { debounce } from "@/utils"
import defaultGif from "@/assets/default.gif"

let imgs = [];

function setImage(img){
  img.dom.src = defaultGif; //先暂时使用默认图片
  // 处理图片，该图片是否在视口范围内
  const clientHeight = document.documentElement.clientHeight;
  const rect = img.dom.getBoundingClientRect();
  const height = rect.height || 150;
  if(rect.top >= - height || rect.top <= clientHeight){
    // 在视口范围内
    const tempImg = new Image();
    tempImg.onload = function(){
      // 当真实图片加载完之后
      img.dom.src = img.src;
    }
    tempImg.src = img.src;
    // img.dom.src = img.src;
    imgs = imgs.filter((i) => i !== img);
  }
}

// 希望，调用该函数，就可以设置那些合适的图片
function setImages(){
  for(const img of imgs){
    // 处理该图片
    setImage(img);
  }
}

function handleScroll(dom){
  setImages();
}

eventBus.$on("mainScroll", debounce(handleScroll, 50));

export default {
  inserted(el, bindings){
    const img = {
      dom: el,
      src: bindings.value,
    }
    imgs.push(img);
    // 立即处理它
    setImage(img)
  },
  unbind(el){
    imgs = imgs.filter(img => img.dom !== el)
  }
}


/**
 * 图片懒加载
 * ①首先使用v-lazy指令替换:src来替换图片加载
 * 导出指令，并注册到main.js全局指令，保证此时页面不报错；
 * 
 * ②引入eventBus，监听mainScroll滚动条事件，
 *  并调用【设置合适图片】的函数,函数中打印日志验证功能
 * 
 * ③滚动条事件触发太频繁，我们需要引入之前写的debounce函数防抖，
 * 滚动条事件mainScroll用debounce函数再包一层，此时需要
 * 将滚动条事件提到外部debounce(handleScroll, 50)
 * 
 * ④滚动条事件好了之后，我们需要关注图片设置相关的逻辑；
 * 首先我们需要一个盒子imgs存放视口内的图片，通过指令中bind来获取到dom(el)，
 * src(bindings.value)的值，当分页切换或者页面切换时，我们要随时更新盒子中图片。
 * 即unbind来解绑，当前图片dom与页面el不一致的更新盒子。
 * 
 * ⑤拿到最新盒子中的图片进行遍历处理，setImage处理图片逻辑
 * 
 * ⑥判断该图片是否在视口范围内，在inserted钩子中比较时，要插入到父组件中,
 * 当图片距离顶部距离 >= -图片高度【或者】图片距离顶部高度 <= 视口高度，在视口范围内；
 * 全部设置默认图片，当图片的onload加载完之后，将默认图片替换为真实图片。
 * 
 * 【注意事项】当图片在视口范围内，且还没加载出来时，会出现高度为0情况，
 * 我们判断逻辑，隐藏要设置默认高度150
 * 
 */