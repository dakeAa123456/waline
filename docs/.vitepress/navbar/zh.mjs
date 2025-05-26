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
		text: '大可订单正式库',
		link: 'http://erp.dakecn.com/',
		externalLinkIcon: true
	},
	{
		text: 'OA系统',
		link: 'http://oa.dakecn.com:8080/login.jsp',
		
	},
	{
		text: '金蝶云星空',
		link: 'http://k3.dakecn.com/k3cloud/html5/index.aspx',
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
							{ text: '扫码出入库', link: 'https://www.dakecn.top/dakescan/index.html#/' }
	
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