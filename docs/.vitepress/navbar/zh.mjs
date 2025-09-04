export const zhNavbar = [
	//单层
	{
		text: '首页',
		link: '/',
		//该元素将一直处于激活状态,
	    //activeMatch: '/',
	},
	// 五个外部链接
	{
		text: '金顺电机官网',
		link: 'https://www.jinyigroup.com.cn/#/',
		externalLinkIcon: true
	},
	{
		text: 'DeepSeek',
		link: 'https://chat.deepseek.com/',
		externalLinkIcon: true
	},
	{
		text: '数据可视化',
		link: 'https://www.dakecn.top/Echarts/index.html#/',
		externalLinkIcon: true
	},

		//两层嵌套
	{
		text: '宝塔面板',
		items:
			[
				{
					text: '入口地址',
					items:
						[   { text: '圣传创智(139.224.248.130)', link: 'http://139.224.248.130:22285/1b95e313' },
							{ text: '马上有车(139.196.192.1)', link: 'http://139.196.192.1:36102/60334b9a' },
							{ text: '马上有车test(139.196.195.114)', link: 'http://139.196.195.114:10086/jhtd2022/' },
							{ text: '京海通达(47.102.96.218)', link: 'https://47.102.96.218:8888/81f8c1a5/' },
							{ text: 'My Services(8.133.18.22)', link: 'https://8.133.18.22:8899/b36f1310' }
	
						]
				}
			
			],
	},

		//两层嵌套
	{
		text: '官网入口',
		items:
			[
				{
					text: '入口地址',
					items:
						[   { text: '金翌车业', link: 'https://www.jinyigroup.com.cn/#/' },
							{ text: '京海通达', link: 'https://jycy.jyqjlm.com/' },
							{ text: '金顺电机', link: 'https://www.czjsjd.com/' },
							{ text: 'JHTD框架', link: 'https://abc.dakecn.top/' }
							
	
						]
				}
			
			],
	},
    
	//两层嵌套
	{
		text: '链接工具',
		items:
			[
				{
					text: '内部链接',
					items:
						[
							{ text: 'DataV组件库', link: 'http://datav.jiaminghi.com/' },
							{ text: 'Map Data', link: 'https://datav.aliyun.com/portal/school/atlas/area_selector' },
							{ text: 'emoji表情库', link: 'https://github.com/ikatyang/emoji-cheat-sheet' },
							{ text: 'Uni-app官网', link: 'https://uniapp.dcloud.net.cn/' }

						]
				},
				{
					text: '外部链接',
					items:
						[
							{ text: 'MSDN', link: 'https://next.itellyou.cn/Identity/Account/Login?ReturnUrl=%2FOriginal%2F' },
							{ text: 'Monkey', link: 'http://www.blog.zjh2002.icu/#/' },					
							{ text: 'ChatGPT', link: 'https://chat18.aichatos96.com/#/chat/1733903088495' },
							{ text: 'ohMyLive2D', link: 'https://oml2d.hacxy.cn/' },
							{ text: '翻译一下', link: 'https://fanyi.baidu.com/mtpe-individual/multimodal?ext_channel=Aldtype' },
							

						]
				},
			],
	},
	
	
	//两层嵌套
	{
		text: '个人站点',
		items:
			[
				{
					text: '我的项目',
					items:
						[   { text: '时政新闻', link: 'https://www.dakecn.top/myblog/index.html#/' },
							{ text: '小熊猫壁纸', link: 'https://www.dakecn.top/xxmwallClient/index.html#/' },
							{ text: '扫码出入库', link: 'https://www.dakecn.top/dakescan/index.html#/' },
							{ text: '小熊猫壁纸后台', link: 'https://www.dakecn.top/xxmwallAdmin/index.html#/uni_modules/uni-id-pages/pages/login/login-withpwd?uniIdRedirectUrl=%252Fpages%252Factivity%252Fdaylist' }
	
						]
				},
				{
					text: 'CRMEB',
					items:
						[
							{ text: 'PHP后台', link: 'http://php.dakecn.top/login.php' },
							{ text: 'CRMEB商城', link: 'https://bt.dakecn.top/' },
							{ text: 'CRMEB商城后台管理', link: 'https://bt.dakecn.top/admin' }
						]

				},
				{
					text: '发行下载',
					items:
						[
							
							{ text: '时政发行页', link: 'https://www.dakecn.top/portal/indexblog.html' },
							{ text: '壁纸发行页', link: 'https://www.dakecn.top/portal/Client_images.html' },
							{ text: '扫码发行页', link: 'https://www.dakecn.top/portal/index.html' }
						]
				},
			],
	},
	
]