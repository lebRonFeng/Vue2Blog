
/**
 * 第一种写法：
 * @param {*} el 
 * @param {*} binding 
 * export default {
      bind(el, binding){
        // 创建一个img元素，放到el元素内部
      },
      update(el, binding){
        // 根据binding.value的值，决定创建或删除img元素
      }
    }  
 */

import loadingUrl from '@/assets/loading.svg'
import styles from "./loading.module.less"
// 得到el中loading效果的img元素
function getLoadingImage(el){
  return el.querySelector('img[data-role=loading]')
} 

function createLoadingImg(){
  const img = document.createElement('img')
  img.dataset.role = "loading"
  img.src = loadingUrl;
  img.className = styles.loading;
  return img;
}

// 第二种写法：
// 导出指令的配置对象
export default function(el, binding){
  // 根据binding.value的值，决定创建或删除img元素
  const curImg = getLoadingImage(el);
  if(binding.value){
    if(!curImg){
      const img = createLoadingImg();
      el.appendChild(img);
    }
  }else {
    if(curImg){
      curImg.remove();
    }
  }
  
}