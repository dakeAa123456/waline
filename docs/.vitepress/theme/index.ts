// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import { useData } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
//引入插槽
import backtotop from "./components/backtotop.vue"
//引入首页视觉变幻插件
import MyLayout from './components/MyLayout.vue'
//引入公告
import notice from "./components/notice.vue"
//引入首页下划线
import HomeUnderline from "./components/HomeUnderline.vue"
//import './style.css'
import './style/index.css'
//引入五彩纸屑组件
import confetti from "./components/confetti.vue"
import github from "./components/github.vue"
/** @type {import('vitepress').Theme} */
//引入字数及阅读时间
import ArticleMetadata from "./components/ArticleMetadata.vue"
//看板娘
//import { useLive2d } from 'vitepress-theme-website'
//waline评论插件
//import { useWaline } from 'vitepress-theme-website'
//导航组件
import MNavLinks from './components/MNavLinks.vue'
import MNavLink from './components/MNavLink.vue'
//图片缩放
import mediumZoom from 'medium-zoom';
import { onMounted, watch, nextTick } from 'vue';
import { useRoute } from 'vitepress';


export default {
  extends: DefaultTheme,
 
  //图片缩放配置

  setup() {
    const route = useRoute();
    const initZoom = () => {
      // mediumZoom('[data-zoomable]', { background: 'var(--vp-c-bg)' }); // 默认
      mediumZoom('.main img', { background: 'var(--vp-c-bg)' }); // 不显式添加{data-zoomable}的情况下为所有图像启用此功能
    };
    onMounted(() => {
      initZoom();
    });
    watch(
      () => route.path,
      () => nextTick(() => initZoom())
    )
    
    
  },
  Layout: () => {  
    const props: Record<string, any> = {}
    // 获取 frontmatter
    const { frontmatter } = useData()

    /* 添加自定义 class */
    if (frontmatter.value?.layoutClass) {
      props.class = frontmatter.value.layoutClass
    }
    
    return h(DefaultTheme.Layout, props,  {
      'doc-footer-before': () => h(backtotop), // 使用doc-footer-before插槽
      'layout-top': () => h(notice), // 使用layout-top插槽  
    })

    
    
  },
  enhanceApp({ app, router, siteData }) {
    //五彩纸屑
    app.component("confetti", confetti);
    app.component("github", github);
    //字数及阅读时间
    app.component('ArticleMetadata' , ArticleMetadata);
    //下划线
    app.component('HomeUnderline' , HomeUnderline)

    //导航组件
    app.component('MNavLinks' , MNavLinks)
    app.component('MNavLink' , MNavLink)

    
  },
  

}
