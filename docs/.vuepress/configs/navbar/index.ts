import type { NarBarItem } from '@vuepress/theme-default'
const navbar: NarBarItem[] = [
	{
		text: '首页',
		link: '/',
	},
	{
		text: '笔记',
		children: [
			{
				text: '前端笔记',
				link: '/notes/frontend/html',
			},
			{
				text: '后端笔记',
				link: '/notes/backend/node/node-basic',
			},
			{
				text: '数据库笔记',
				link: '/notes/database/mysql',
			},
		],
	},
	{
		text: '软件教程',
		link: '/software',
	},
	{
		text: '代码人生',
		children: [
			{
				text: '使用react搭建后台',
				link: '/problem/custom',
			},
		],
	},
	{
		text: '案例',
		link: '/code',
	},
	{
		text: '面试题',
		link: 'https://flow-zy.github.io/notesV2/interview/interview_frontend/html.html',
	},
];

export default navbar
