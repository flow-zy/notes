import { defineUserConfig, defaultTheme } from 'vuepress'
import { nprogressPlugin } from '@vuepress/plugin-nprogress'
import { backToTopPlugin } from '@vuepress/plugin-back-to-top'
import { sidebar, navbar } from './configs/index.js'
// import { docsearchPlugin } from '@vuepress/plugin-docsearch'
import { pwaPlugin } from '@vuepress/plugin-pwa'
import { registerComponentsPlugin } from '@vuepress/plugin-register-components'
import { externalLinkIconPlugin } from '@vuepress/plugin-external-link-icon'
import { searchPlugin } from '@vuepress/plugin-search'
export default defineUserConfig({
  lang: 'zh-CN',
  title: '编程导航',
  description: '包涵编程语言大部分的知识',
  base: '/blog/',
  plugins: [
    nprogressPlugin(),
    backToTopPlugin(),
    pwaPlugin(),
    registerComponentsPlugin({
      componentsDir: './components',
    }),
    externalLinkIconPlugin(),
    searchPlugin({
      locales: {
        '/zh/': {
          placeholder: '搜索文档',
        },
      },
      // 排除首页
      isSearchable: (page) => page.path !== '/',
    }),
  ],
  theme: defaultTheme({
    sidebar,
    navbar,
    lastUpdatedText: '上次更新',
    // 启动页面丝滑滚动
  }),
})
