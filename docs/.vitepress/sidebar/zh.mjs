export const zhSidebar = {
	'/zh/': [	
		{
			text: '💥 系统操作手册',
			//可折叠侧边栏
			collapsed: false,
			items: [
				{
					text: '- 大可数据库',
					link: '/zh/MySql',
				},
				{
					text: '- 常见问题处理',
					collapsed: false,
				    link: '/zh/production'
					
				},
				
			],
		},
		
		{
			text: '💥 扫码出入库系统',
			collapsed: true,

			items: [
				{
					text: '📅 项目介绍',
					//collapsible: true,
					link: '/zh/scan_jieshao'
				},
				
				{
					text: '📰 原型图例',
					collapsed: true,
					items:[
						{
							text:'- 演示功能',
							collapsible: true,
							link: '/zh/scan_yuanxing'
						}
						
						
						
					]
				},
							
				
				{
					text: '🖼️ API接口',
					collapsed: true,
					items:[
						{
							text:'- 五金仓库',
							link: '/zh/scan_hardware'
						},
						{
							text:'- 检验入库',
							link:'/zh/scan_packup'
						},
						{
							text:'- 成品出库',
							link:'/zh/scan_packout'
						},
						
					]
				}
								
									
			],
		},
		{
			text: '💥 API壁纸',
			collapsed: true,
			items: [
				{
					text: '- 项目介绍',
					link: '/zh/wallpaper'
				},
				{
					text: '- 首页海报',
					link: '/zh/homeBanner'
				},
				{
					text: '- 壁纸大分类',
					link: '/zh/classsify'
				},
				{
					text: '- 分类中壁纸列表',
					link: '/zh/wallList'
				},
				{
					text: '- 壁纸评分',
					link: '/zh/Score'
				},
				{
					text: '- 随机9张壁纸',
					link: '/zh/RandomWall'
				},
				{
					text: '- 单个壁纸详情',
					link: '/zh/detailWall'
				},
				{
					text: '- 壁纸下载',
					link: '/zh/downloadWall'
				},
				{
					text: '- 我的评分/下载列表',
					link: '/zh/userWallList'
				},
				{
					text: '- 用户个人信息',
					link: '/zh/userinfo'
				},
				{
					text: '- 壁纸资讯公告列表',
					link: '/zh/wallNewList'
				},
				{
					text: '- 壁纸资讯公告详情',
					link: '/zh/wallNewDetail'
				},
				{
					text: '- 搜索壁纸',
					link: '/zh/seachWall'
				},
			]
		},

		{
			text: '💥 常用工具API',
			collapsed: true,
			items: [
				{
					text: '- IP归属地',
					link: '/zh/placeNameIp'
				},
				{
					text: '- 天气查询',
					link: '/zh/weather'
				},
				{
					text: '- 百度热搜',
					link: '/zh/baidu'
				},
				{
					text: '- 微博热搜',
					link: '/zh/weibo'
				},
				{
					text: '- 淘宝买家秀',
					link: '/zh/taoShow'
				},
				{
					text: '- 萌宠大集合',
					link: '/zh/petShow'
				},
			]
		},

        
		{
            text: '💥 VitePress',
			collapsed: true,
			items:[
                {
					text: '- 搭建流程',
					link: '/zh/git-vitepress'
				},
				{
					text: '- 部署指南',
					link: '/zh/git-bushu'
				},
			]
		}





	],

}