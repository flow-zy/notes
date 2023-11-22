import { HeadConfig, defaultTheme, defineUserConfig } from 'vuepress'
import { head as header, navbar, plugins, sidebar } from './configs/index.js'
function isIterable(obj: any): Boolean {
	return (
		obj !== null &&
		obj !== undefined &&
		typeof obj[Symbol.iterator] === 'function'
	)
}
const head: HeadConfig[] = isIterable(header) && header.map((i: any) => i)
const mode = process.env.NODE_ENV === 'production'
export default defineUserConfig({
	lang: 'zh-CN',
	title: 'ZY Blog',
	description: 'Includes most of the knowledge of programming languages',
	base: mode ? '/notes/' : '/',
	plugins,
	theme: defaultTheme({
		sidebar,
		sidebarDepth: 4,
		navbar,
		lastUpdatedText: '上次更新',
		contributorsText: '贡献者',
		contributors: false,
		logo: '/images/logo.jpg',
		// 启动页面丝滑滚动
	}),
	head,
	markdown: {
		links: {
			externalAttrs: { target: '_target', rel: 'nofollow noopener noreferrer' },
		},
	},
});
