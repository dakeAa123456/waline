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
      { 
        icon:
        {svg: '<svg t="1733906638335" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1162" width="48" height="48"><path d="M517.12 510.6176m-453.5808 0a453.5808 453.5808 0 1 0 907.1616 0 453.5808 453.5808 0 1 0-907.1616 0Z" fill="#D480F1" p-id="1163"></path><path d="M964.096 588.1344L819.2 428.4416l-185.5488-25.6-73.216-87.3472L416.768 419.84l-205.312 50.2784 134.7072 254.464-21.8624 68.7104 92.6208 159.7952a454.0928 454.0928 0 0 0 547.1744-364.9536z" fill="#A861E0" p-id="1164"></path><path d="M809.6256 490.8544a52.6336 52.6336 0 0 0-29.184-89.7536l-121.9584-17.7152a52.6336 52.6336 0 0 1-39.6288-28.8256l-54.528-110.4896a52.6336 52.6336 0 0 0-94.4128 0L415.3856 354.56a52.6336 52.6336 0 0 1-39.6288 28.8256l-121.9584 17.7152a52.6336 52.6336 0 0 0-29.184 89.7536l88.2688 86.016a52.6848 52.6848 0 0 1 15.36 46.592L307.2 744.9088a52.6336 52.6336 0 0 0 76.3392 55.5008l109.1072-57.344a52.3776 52.3776 0 0 1 48.9472 0l109.1072 57.344A52.6336 52.6336 0 0 0 727.04 744.9088l-20.8384-121.4464a52.6848 52.6848 0 0 1 15.36-46.592z m-129.7408-43.1104a20.48 20.48 0 0 1-20.224 17.3568 22.1184 22.1184 0 0 1-3.1744 0l-55.04-8.5504a47.4112 47.4112 0 0 1-35.1744-25.6l-29.7984-60.4672a20.48 20.48 0 1 1 36.9664-18.5856l29.8496 60.4672a6.5024 6.5024 0 0 0 4.7104 3.4816l55.04 8.5504a20.48 20.48 0 0 1 16.8448 23.3472z" fill="#FFFFFF" p-id="1165"></path></svg>'
        }, 
        link: 'https://limestart.cn/' 
      },
      {
        icon:
        {svg: '<svg t="1735094888881" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6253" width="48" height="48"><path d="M929.22159408 398.18581333l-110.03979853-190.60053333c-40.65659259-70.42692741-115.81667555-113.81418667-197.14199703-113.81418667H401.96020148c-81.32532148 0-156.47326815 43.38725925-197.14199703 113.81418667l-110.03979853 190.60053333c-40.66872889 70.42692741-40.66872889 157.20144592 0 227.64050964l110.03979853 190.60053333c40.66872889 70.42692741 115.81667555 113.81418667 197.14199703 113.81418667h220.07959704c81.32532148 0 156.48540445-43.38725925 197.14199703-113.81418667l110.03979853-190.60053333c40.66872889-70.4390637 40.66872889-157.21358222 0-227.64050964z" fill="#E8B45E" p-id="6254"></path><path d="M764.92041482 541.13924741c0-103.06142815-19.86711703-163.81572741-68.60648297-200.40666074-36.00839111-27.02753185-65.8515437-43.60571259-100.69485037-51.85839408 92.76984889-67.80548741 153.58482963-43.46007703 153.58482963-43.46007704 49.12772741 23.11964445 15.4130963 108.85044148 15.4130963 108.85044148s47.1980563-107.87953778-14.44219259-121.36296295c-77.16257185-16.88158815-148.63322075 36.90647703-168.14838519 53.22979555-14.62423703-2.48794075-30.29219555-3.66516148-47.74418963-3.66516148-75.7062163 0-139.22759111 26.05662815-188.12472889 65.99717926-36.67588741 29.96451555-68.55793778 104.62701037-77.72084148 151.25466074 0 0 86.68956445-120.40419555 213.65949629-164.00990815C356.08500148 414.95817482 283.83762963 568.11823408 283.83762963 568.11823408c-8.66531555 16.3718637-72.62359703 157.72330667-23.11964445 202.27565037 17.0514963 15.34027852 44.30961778 28.89652148 81.87145482 22.14874073 68.30307555-12.25765925 136.9823763-49.71026963 126.56943408-59.64989629-40.83863703 20.15838815-102.66093037 39.83132445-154.0460089 36.85793186-42.01585778-2.42725925-35.80207408-55.52355555-35.12244148-62.9509689 3.84720592-42.37994667 29.45479111-73.88577185 29.45479112-73.88577185 9.69690075 17.51267555 16.46895408 22.44001185 36.70016 44.05475555 43.15666963 46.08151703 111.19274667 59.90475852 186.91109926 59.90475853 59.94116741 0 111.98160592-14.17519408 156.14558814-42.51344593s69.40747852-65.70590815 75.7062163-112.0786963l-166.09735111-0.70390518s-5.84969482 25.32845037-27.93775408 39.49150815c-22.07592297 14.17519408-48.1568237 11.55375408-48.1568237 11.55375407s-23.96918518 3.9200237-53.94583704-19.26030222c-29.96451555-23.19246222-24.07841185-72.24737185-24.07841184-72.24737185H764.92041482z m-306.7327526-118.47452444c22.14874075-32.7558637 66.45835852-29.86742518 66.45835853-29.86742519s31.78496-3.50738963 64.40732443 27.71930074c19.43021037 18.59280592 10.72848592 53.19338667 10.72848593 53.19338666l-154.10669036-0.92235851s-4.44188445-25.06145185 12.51252147-50.1229037z" fill="#FFFFFF" p-id="6255"></path></svg>'},
        link: 'https://erp.dakecn.top/'
      },
      { 
        icon: 
        {svg: '<svg t="1676025513460" class="icon" viewBox="0 0 1129 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2745" width="200" height="200"><path d="M234.909 9.656a80.468 80.468 0 0 1 68.398 0 167.374 167.374 0 0 1 41.843 30.578l160.937 140.82h115.07l160.936-140.82a168.983 168.983 0 0 1 41.843-30.578A80.468 80.468 0 0 1 930.96 76.445a80.468 80.468 0 0 1-17.703 53.914 449.818 449.818 0 0 1-35.406 32.187 232.553 232.553 0 0 1-22.531 18.508h100.585a170.593 170.593 0 0 1 118.289 53.109 171.397 171.397 0 0 1 53.914 118.288v462.693a325.897 325.897 0 0 1-4.024 70.007 178.64 178.64 0 0 1-80.468 112.656 173.007 173.007 0 0 1-92.539 25.75h-738.7a341.186 341.186 0 0 1-72.421-4.024A177.835 177.835 0 0 1 28.91 939.065a172.202 172.202 0 0 1-27.36-92.539V388.662a360.498 360.498 0 0 1 0-66.789A177.03 177.03 0 0 1 162.487 178.64h105.414c-16.899-12.07-31.383-26.555-46.672-39.43a80.468 80.468 0 0 1-25.75-65.984 80.468 80.468 0 0 1 39.43-63.57M216.4 321.873a80.468 80.468 0 0 0-63.57 57.937 108.632 108.632 0 0 0 0 30.578v380.615a80.468 80.468 0 0 0 55.523 80.469 106.218 106.218 0 0 0 34.601 5.632h654.208a80.468 80.468 0 0 0 76.444-47.476 112.656 112.656 0 0 0 8.047-53.109v-354.06a135.187 135.187 0 0 0 0-38.625 80.468 80.468 0 0 0-52.304-54.719 129.554 129.554 0 0 0-49.89-7.242H254.22a268.764 268.764 0 0 0-37.82 0z m0 0" fill="#20B0E3" p-id="2746"></path><path d="M348.369 447.404a80.468 80.468 0 0 1 55.523 18.507 80.468 80.468 0 0 1 28.164 59.547v80.468a80.468 80.468 0 0 1-16.094 51.5 80.468 80.468 0 0 1-131.968-9.656 104.609 104.609 0 0 1-10.46-54.719v-80.468a80.468 80.468 0 0 1 70.007-67.593z m416.02 0a80.468 80.468 0 0 1 86.102 75.64v80.468a94.148 94.148 0 0 1-12.07 53.11 80.468 80.468 0 0 1-132.773 0 95.757 95.757 0 0 1-12.875-57.133V519.02a80.468 80.468 0 0 1 70.007-70.812z m0 0" fill="#20B0E3" p-id="2747"></path></svg>'
        },
        link: 'https://www.bilibili.com/?spm_id_from=333.999.0.0' 
      },
      {
        icon:
        {svg: '<svg t="1735096551616" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4994" width="48" height="48"><path d="M590.1312 284.0576c5.63712 16.896 5.63712 39.424-5.632 56.32l-56.2176 84.3264c-11.25888 11.2128-28.16 11.2128-39.36768 0L432.64 340.3776c-16.896-16.896-16.896-45.056-5.632-61.9008l16.896-33.7408c11.264-22.528 33.7408-33.792 56.2176-33.792h16.896c22.52288 0 50.5856 16.896 56.21248 39.424l16.90112 33.6896z" fill="#9571E9" p-id="4995"></path><path d="M893.2864 0H130.7136C58.5216 0 0 58.2656 0 129.9456v606.6688c0.2048 71.9872 58.7264 130.2016 130.7136 130.04288h43.52l84.8384 123.6992c1.1264 1.6384 2.4064 3.2256 3.7888 4.608 13.2096 13.4656 34.816 13.7216 48.2816 0.512l131.1232-128.8192h451.0208c72.19712 0 130.7136-58.3168 130.7136-129.9968V129.9456C1024 58.2144 965.4784 0 893.2864 0z m-117.5552 559.7184c0 106.79808-78.7456 191.1808-275.6096 191.1808-168.704 0-275.5584-84.3776-275.5584-191.1808v-11.264c95.5904 5.632 388.04992 28.16 551.168 0v11.264z m22.528-129.3824v50.6368c0 5.632-5.63712 11.264-11.264 11.264-174.3872 39.3216-494.9504 5.632-562.432 0-5.632 0-11.264-5.632-11.264-11.264v-45.056c-39.3728 0-101.2736-28.0576-101.2736-78.7456 0-33.6896 56.2688-67.4816 84.3776-89.9072 61.8496-67.5328 151.8592-163.1232 309.3504-163.1232 163.1232 0 253.1328 89.9584 309.3504 163.1232 22.52288 22.4256 84.37248 61.8496 84.37248 89.9072 0.00512 50.688-50.63168 67.5328-101.21728 73.1648z" fill="#9571E9" p-id="4996"></path></svg>'},
        link: 'https://zj.122.gov.cn/#/index'
      },
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' },
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
