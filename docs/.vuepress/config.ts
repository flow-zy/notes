import { defineUserConfig, defaultTheme, HeadConfig } from 'vuepress'
import { navbar, head as header, plugins } from './configs/index.js'
function isIterable(obj: any): Boolean {
  return (
    obj !== null &&
    obj !== undefined &&
    typeof obj[Symbol.iterator] === 'function'
  )
}
const head: HeadConfig[] = isIterable(header) && header.map((i) => i)
export default defineUserConfig({
  lang: 'zh-CN',
  title: 'study note',
  description: 'Includes most of the knowledge of programming languages',
  base: '/notes/',
  plugins,
  theme: defaultTheme({
    sidebar: 'auto',
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
})
