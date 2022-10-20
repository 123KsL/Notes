//img 延迟加载1. <img src=''  loading='lazy'>  {return 'loading' in HTMLImageElement.prototype }判断浏览器是否支持
//loading='eager' 正常加载立即加载 
//loading='lazy' 延迟加载 当图像在视口附近或可见时才加载、
//img 延迟加载2.侦听滚动和调整大小事件以触发图像延迟加载 img.offsetTop < (window.innerHeight + scrollTop)