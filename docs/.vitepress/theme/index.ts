// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
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

//导航组件
import MNavLinks from './components/MNavLinks.vue'
import MNavLink from './components/MNavLink.vue'
//图片缩放
import mediumZoom from 'medium-zoom';
import { onMounted, watch, nextTick } from 'vue';
import { useRoute } from 'vitepress';

//giscus评论
import giscusTalk from 'vitepress-plugin-comment-with-giscus';
import { useData } from 'vitepress';






export default {

  extends: DefaultTheme,

  setup() {
    
     //图片缩放配置
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
     
    //giscus评论配置
    const { frontmatter } = useData();
    giscusTalk({
      repo: 'dakeAa123456/waline', //仓库
      repoId: 'R_kgDONCmwZA', //仓库ID
      category: 'Announcements', // 讨论分类
      categoryId: 'DIC_kwDONCmwZM4Cji21', //讨论分类ID
      mapping: 'pathname',
      inputPosition: 'bottom',
      lang: 'zh-CN',
      }, 
      {
        frontmatter, route
      },
      //默认值为true，表示已启用，此参数可以忽略；
      //如果为false，则表示未启用
      //您可以使用“comment:true”序言在页面上单独启用它
      true
    );

    
  },
  Layout: () => {
    const props: Record<string, any> = {}
    // 获取 frontmatter
    const { frontmatter } = useData()

    /* 添加自定义 class */
    if (frontmatter.value?.layoutClass) {
      props.class = frontmatter.value.layoutClass
     
    }

    return h(DefaultTheme.Layout, props, {
      'doc-footer-before': () => h(backtotop), // 使用doc-footer-before插槽
      'layout-top': () => h(notice), // 使用layout-top插槽  
    })

  
    
  },
 async enhanceApp({ app, router, siteData }) {
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
    
    if (!import.meta.env.SSR) {
      const { loadOml2d } = await import('oh-my-live2d');
      loadOml2d({
        models: [
         {
          //path: 'https://cdn.jsdelivr.net/gh/Eikanya/Live2d-model/Live2D/Senko_Normals/senko.model3.json'
          //path:'https://raw.githubusercontent.com/iCharlesZ/vscode-live2d-models/master/model-library/miku/miku.model.json',
          path:'https://model.oml2d.com/Senko_Normals/senko.model3.json',
   
         scale: 0.09,
         position: [-40, 60],
         stageStyle: {
          height: 300
        }
       
        }
         ],
         menus:{
             style:{
                left:0
             }
         },
         tips: (_, currentIndex) => {
          
          if (currentIndex === 0) {
            return {
              copyTips: {
                message: ["复制请注明出处哦！"]
              },
              idleTips: {
                wordTheDay: true
              }
            };
          } else {
            return {
              idleTips: {
                wordTheDay: false
              }
            };
          }
        }
      });
    }
  },


}
