import type { SidebarConfig } from '@vuepress/theme-default'
const sidebar: SidebarConfig = {
	'/notes/frontend/': [
		{
			text: '基础知识',
			collapsible: true,
			children: [
				'/notes/frontend/html',
				'/notes/frontend/css',
				'/notes/frontend/Javascript',
				'/notes/frontend/ECMAscript',
				'/notes/frontend/jQuery',
				'/notes/frontend/scss',
			],
		},
		{
			text: '网络请求',
			collapsible: true,
			children: [
				'/notes/frontend/network/ajax',
				'/notes/frontend/network/axios',
				'/notes/frontend/network/http',
			],
		},
		{
			text: '框架',
			collapsible: true,
			children: [
				{
					text: 'Vue',
					collapsible: true,
					children: [
						'/notes/frontend/vue',
						'/notes/frontend/vue/pinia',
						'/notes/frontend/vue/vue-router',
						'/notes/frontend/vue/vuex',
					],
				},
				{
					text: 'React',
					collapsible: true,
					children: [
						'/notes/frontend/react',
						'/notes/frontend/react/redux',
						'/notes/frontend/react/react-router',
					],
				},
			],
		},
		{
			text: '管理工具',
			collapsible: true,
			children: ['/notes/frontend/git'],
		},
		{
			text: '小程序',
			collapsible: true,
			children: [
				{
					link: '/notes/frontend/program/we-chat-mini-program',
					text: '原生微信小程序',
				},
				'/notes/frontend/program/uniapp',
			],
		},
		{
			text: '构建工具',
			collapsible: true,
			children: [
				'/notes/frontend/pack/webpack',
				'/notes/frontend/pack/rollup',
				'/notes/frontend/pack/vite',
			],
		},
		'/notes/frontend/TypeScript',
	],
	'/notes/backend/': [
		{
			text: 'JAVA',
			collapsible: true,
			children: [
				'/notes/backend/java/java-basic',
				'/notes/backend/java/spring',
			],
		},
		{
			text: 'PHP',
			collapsible: true,
			children: ['/notes/backend/php/php-basic', '/notes/backend/php/thinkphp'],
		},
		{
			text: 'NODE',
			collapsible: true,
			children: [
				'/notes/backend/node/node-basic',
				'/notes/backend/node/express',
			],
		},
	],
	'/notes/database/': ['/notes/database/mysql'],
}
export default sidebar
