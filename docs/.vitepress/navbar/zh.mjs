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
		text: 'OA登录入口',
		link: 'https://oa.puancn.top/seeyon/main.do',
		externalLinkIcon: true
	},


	{ text: 'EIP采集中心', link: 'http://192.168.110.200/login' },





/*
	{
		text: '海康录像机',
		items:
			[
				{ text: '网关NVR-8832N', link: 'http://192.168.3.4/doc/index.html#/portal/login' },
				{ text: '车间NVR-8864N', link: 'http://192.168.3.5/doc/index.html#/portal/login?t=1787967760339' },
			]

	},
*/

	//两层嵌套
	{
		text: '常用链接',
		items:
			[
				{
					text: 'MES',
					items:
						[
							{ text: '制造执行系统', link: 'http://mes.puankj.top:10050/gdpaas/login/index.htm' },
							{ text: '智能终端平台', link: 'http://mes.puankj.top:9991/#/Login' },


						]
				},
				{
					text: '致远互联',
					items:
						[
							{ text: 'OA内网', link: 'https://oa.puancn.top/seeyon/main.do' },
							{ text: 'OA外网', link: 'https://oa.puankj.top:9443/seeyon/index.jsp' },

						]
				},
					{
		           text: '操作手册',
		           items:
			          [
				           { text: '前端网址', link: 'https://code.puancn.top:3001/' },
				           { text: '后端管理', link: 'https://code.puancn.top:3001/admin' },
			         ]

	},
			],
	},


	{
		text: '网络管理',
		items:
			[
				{
					text: 'NAS存储',
					items:
						[
							{ text: 'DS423', link: 'https://ds423.puankj.top:5001/#/signin' },
							{ text: 'RS2423+', link: 'https://nas.puankj.top/#/signin' },
						]

				},
				{
					text: '网络设备',
					items:
						[
							{ text: '防火墙AF-1600B', link: 'https://sxf.puancn.top/' },
							{ text: '路由器UR7504', link: 'https://192.168.8.1/cgi-bin/luci?ssl=false' },


						]
				},
				{
					text: '工具链接',
					items:
						[
							{ text: 'VPN登录', link: 'https://vpn.puancn.top:4430/portal/#!/login' },
						    { text: '下载中心', link: '/zh/baidu.md' }

						]

				}



			]

	},


	{ text: '下载中心', link: '/zh/baidu.md' },









]