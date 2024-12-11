import { defineConfig } from 'vitepress'
import {zhNavbar} from './navbar/zh.mjs'
import { zhSidebar } from './sidebar/zh.mjs'



export default defineConfig({
  //base: '/monika/',
  head: [
    ['link', { rel: 'icon', href: '/images/vitepress-logo-mini.svg' }],
    ['script', { src: '/live2d.js' }],
        ],    //标签栏图标
  title: "VitePress-study",
  description: "VUE驱动的静态网站生成器",
  markdown: {
      lineNumbers: true,
      image: {
        // 开启图片懒加载
        lazyLoading: true
      },                      
       // 组件插入h1标题下
    config: (md) => {
      md.renderer.rules.heading_close = (tokens, idx, options, env, slf) => {
          let htmlResult = slf.renderToken(tokens, idx, options);
          if (tokens[idx].tag === 'h1') htmlResult += `<ArticleMetadata />`; 
          return htmlResult;
      }
    }
    },
  locales: {
    en: {
      label: 'English',
      lang: 'en',
      
    },
    root: {
      label: '简体中文',
      lang: 'zh', // 可选，将作为 `lang` 属性添加到 `html` 标签中
      link: '/'
    },
    
  },

  themeConfig: {
    editLink: {
      pattern: 'https://github.com/dakeAa123456/vitepress/:path',
      text: '在 GitHub 上编辑此页面'
    },
    lastUpdated: {
      text: '最近一次更新时间',
      
    }, 
    logo: '/images/vitepress-logo-mini.svg',   //主页icon图标
    outlineTitle: '本页目录',                      //自定义右边栏
    outline:[2,6],                               //展示的标题级别
    nav:zhNavbar,                                 //导航栏
    sidebar:zhSidebar,                            //侧边栏

      //外部链接
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' },
      { 
        icon:
        {svg: '<svg t="1733906638335" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1162" width="32" height="32"><path d="M517.12 510.6176m-453.5808 0a453.5808 453.5808 0 1 0 907.1616 0 453.5808 453.5808 0 1 0-907.1616 0Z" fill="#D480F1" p-id="1163"></path><path d="M964.096 588.1344L819.2 428.4416l-185.5488-25.6-73.216-87.3472L416.768 419.84l-205.312 50.2784 134.7072 254.464-21.8624 68.7104 92.6208 159.7952a454.0928 454.0928 0 0 0 547.1744-364.9536z" fill="#A861E0" p-id="1164"></path><path d="M809.6256 490.8544a52.6336 52.6336 0 0 0-29.184-89.7536l-121.9584-17.7152a52.6336 52.6336 0 0 1-39.6288-28.8256l-54.528-110.4896a52.6336 52.6336 0 0 0-94.4128 0L415.3856 354.56a52.6336 52.6336 0 0 1-39.6288 28.8256l-121.9584 17.7152a52.6336 52.6336 0 0 0-29.184 89.7536l88.2688 86.016a52.6848 52.6848 0 0 1 15.36 46.592L307.2 744.9088a52.6336 52.6336 0 0 0 76.3392 55.5008l109.1072-57.344a52.3776 52.3776 0 0 1 48.9472 0l109.1072 57.344A52.6336 52.6336 0 0 0 727.04 744.9088l-20.8384-121.4464a52.6848 52.6848 0 0 1 15.36-46.592z m-129.7408-43.1104a20.48 20.48 0 0 1-20.224 17.3568 22.1184 22.1184 0 0 1-3.1744 0l-55.04-8.5504a47.4112 47.4112 0 0 1-35.1744-25.6l-29.7984-60.4672a20.48 20.48 0 1 1 36.9664-18.5856l29.8496 60.4672a6.5024 6.5024 0 0 0 4.7104 3.4816l55.04 8.5504a20.48 20.48 0 0 1 16.8448 23.3472z" fill="#FFFFFF" p-id="1165"></path></svg>'
        }, 
        link: 'https://limestart.cn/' 
      },
      { 
        icon: 
        {svg: '<svg t="1676025513460" class="icon" viewBox="0 0 1129 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2745" width="200" height="200"><path d="M234.909 9.656a80.468 80.468 0 0 1 68.398 0 167.374 167.374 0 0 1 41.843 30.578l160.937 140.82h115.07l160.936-140.82a168.983 168.983 0 0 1 41.843-30.578A80.468 80.468 0 0 1 930.96 76.445a80.468 80.468 0 0 1-17.703 53.914 449.818 449.818 0 0 1-35.406 32.187 232.553 232.553 0 0 1-22.531 18.508h100.585a170.593 170.593 0 0 1 118.289 53.109 171.397 171.397 0 0 1 53.914 118.288v462.693a325.897 325.897 0 0 1-4.024 70.007 178.64 178.64 0 0 1-80.468 112.656 173.007 173.007 0 0 1-92.539 25.75h-738.7a341.186 341.186 0 0 1-72.421-4.024A177.835 177.835 0 0 1 28.91 939.065a172.202 172.202 0 0 1-27.36-92.539V388.662a360.498 360.498 0 0 1 0-66.789A177.03 177.03 0 0 1 162.487 178.64h105.414c-16.899-12.07-31.383-26.555-46.672-39.43a80.468 80.468 0 0 1-25.75-65.984 80.468 80.468 0 0 1 39.43-63.57M216.4 321.873a80.468 80.468 0 0 0-63.57 57.937 108.632 108.632 0 0 0 0 30.578v380.615a80.468 80.468 0 0 0 55.523 80.469 106.218 106.218 0 0 0 34.601 5.632h654.208a80.468 80.468 0 0 0 76.444-47.476 112.656 112.656 0 0 0 8.047-53.109v-354.06a135.187 135.187 0 0 0 0-38.625 80.468 80.468 0 0 0-52.304-54.719 129.554 129.554 0 0 0-49.89-7.242H254.22a268.764 268.764 0 0 0-37.82 0z m0 0" fill="#20B0E3" p-id="2746"></path><path d="M348.369 447.404a80.468 80.468 0 0 1 55.523 18.507 80.468 80.468 0 0 1 28.164 59.547v80.468a80.468 80.468 0 0 1-16.094 51.5 80.468 80.468 0 0 1-131.968-9.656 104.609 104.609 0 0 1-10.46-54.719v-80.468a80.468 80.468 0 0 1 70.007-67.593z m416.02 0a80.468 80.468 0 0 1 86.102 75.64v80.468a94.148 94.148 0 0 1-12.07 53.11 80.468 80.468 0 0 1-132.773 0 95.757 95.757 0 0 1-12.875-57.133V519.02a80.468 80.468 0 0 1 70.007-70.812z m0 0" fill="#20B0E3" p-id="2747"></path></svg>'
        },
        link: 'https://www.bilibili.com/?spm_id_from=333.999.0.0' 
      },
    ],
    /*
    search: {
      provider: 'algolia',
      options: {
        appId: 'QERAK145PL',
        apiKey: 'd4b2a8826cab34ffdbe6f9b7f0493bdf',
        indexName: 'dakecn'
      }
    },
    */
    // 设置搜索框的样式
    search: {
      provider: "local",
      options: {
        translations: {
          button: {
            buttonText: "搜索文档",
            buttonAriaLabel: "搜索文档",
          },
          modal: {
            noResultsText: "无法找到相关结果",
            resetButtonTitle: "清除查询条件",
            footer: {
              selectText: "选择",
              navigateText: "切换",
            },
          },
        },
      },
    },

    footer: {
      message:'本文档免费提供学习及开发的接口需求，如有侵权请联系QQ邮箱:836843510@qq.com',
      copyright: 
      '<view style="margin-right:8px;">Copyright © 2022-2025，最终解释权、版权、知识产权归©小汤圆所有</view><a style="margin-right:15px;" href="https://beian.miit.gov.cn/?spm=5176.29458888.J_9220772140.60.7cf02868hQEYty#/Integrated/index">浙ICP备2024082002号</a><img style="width:20px;height:20px;margin-right:2px;margin-top:2px;vertical-align:top;display:inline-block;" src="/images/pic.png"><a style="margin-right:5px;" href="https://beian.mps.gov.cn/#/query/webSearch">浙公网安备33010802013695号</a>'
    }
  }
})
