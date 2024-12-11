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
		text: 'OA系统入口',
		link: 'http://oa.dakecn.com:8080/login.jsp',
		
	},
	{
		text: '金蝶云星空入口',
		link: 'http://k3.dakecn.com/k3cloud/html5/index.aspx',
		externalLinkIcon: true
	},
	{
		text: '翻译一下',
		link: 'https://fanyi.baidu.com/mtpe-individual/multimodal?ext_channel=Aldtype',
		externalLinkIcon: true
	},
	{
		text: '百度一下',
		link: 'https://www.baidu.com',
		externalLinkIcon: true
	},
    
	//两层嵌套
	{
		text: '重要链接',
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
							{ text: '小红书', link: 'https://www.xiaohongshu.com/explore' },
							{ text: '空中投送', link: 'https://www.airportal.cn/' },
							{ text: '今日头条', link: 'https://www.toutiao.com/?wid=1733906835697' },
							{ text: 'ChatGPT', link: 'https://chat18.aichatos96.com/#/chat/1733903088495' }
							

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
							{ text: '小熊猫壁纸', link: 'https://static-mp-26c5c57d-e54d-41c6-9b3c-4c4d0d4ecebb.next.bspapp.com/dakeImg/index.html#/' },
							{ text: '扫码出入库', link: 'https://www.dakecn.top/dakescan/index.html#/' }
	
						]
				},
				{
					text: '发行下载',
					items:
						[
							
							{ text: '时政发行页', link: 'https://www.dakecn.top/portal/indexblog.html' },
							{ text: '壁纸发行页', link: 'https://www.dakecn.top/portal/indexImg.html' },
							{ text: '扫码发行页', link: 'https://www.dakecn.top/portal/index.html' }
						]
				},
			],
	},
	
]