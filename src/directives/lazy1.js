import eventBus from "@/eventBus";
import {debounce} from '@/utils';

let imgs = [];

function setImage(img){
  // 处理图片
  console.log('已处理', img.src);
  imgs = imgs.filter(i > i===img);
}

// 希望，调用该函数，就可以设置那些合适的图片
function setImages() {
  for(const img of imgs){
  // 处理该图片
  setImage(img); 
  }
}

function handleScroll() {
  setImages();
}

// setInterval(() => {
//   console.log('imgs', imgs)
// }, 2000);

eventBus.$on("mainScroll", debounce(handleScroll, 50))

export default {
  bind(el,bindings){
    const img = {
      dom: el,
      src: bindings.value,
      handled: false
    }
    imgs.push(img);
    // 立即处理
    setImage(img)
  },
  unbind(el){
    imgs = imgs.filter(img => img.dom !== el)
  }
};