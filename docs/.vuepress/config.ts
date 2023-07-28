import { defineUserConfig, defaultTheme } from 'vuepress'
import { nprogressPlugin } from '@vuepress/plugin-nprogress'
import { backToTopPlugin } from '@vuepress/plugin-back-to-top'
import { sidebar, navbar } from './configs/index.js'
// import { docsearchPlugin } from '@vuepress/plugin-docsearch'
import { pwaPlugin } from '@vuepress/plugin-pwa'
import { registerComponentsPlugin } from '@vuepress/plugin-register-components'
import { externalLinkIconPlugin } from '@vuepress/plugin-external-link-icon'
import { searchPlugin } from '@vuepress/plugin-search'
import { mediumZoomPlugin } from '@vuepress/plugin-medium-zoom'
import { containerPlugin } from '@vuepress/plugin-container'
import vuepressPluginAnchorRight from 'vuepress-plugin-anchor-right'
// import { activeHeaderLinksPlugin } from '@vuepress/plugin-active-header-links'
import copy from 'vuepress-plugin-nuggets-style-copy'
import cursorEffects from 'vuepress-plugin-cursor-effects'
import dynamicTitle from 'vuepress-plugin-dynamic-title'
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
    vuepressPluginAnchorRight(),
    containerPlugin({
      type: 'tip',
    }),
    mediumZoomPlugin(),
    searchPlugin({
      locales: {
        '/zh/': {
          placeholder: '搜索文档',
        },
      },
      // 排除首页
      isSearchable: (page) => page.path !== '/',
    }),
    // activeHeaderLinksPlugin({
    //   headerLinkSelector: '.level.level-2',
    // }),
    copy({
      copyText: '复制代码',
      tip: {
        content: '复制成功',
      },
    }),
    cursorEffects({
      size: 3, // size of the particle, default: 2
      shape: ['start'], // shape of the particle, default: 'star'
      zIndex: 999999999, // z-index property of the canvas, default: 999999999
    }),
    dynamicTitle({
      showIcon: '/favicon.ico',
      showText: '(/≧▽≦/)咦！又好了！',
      hideIcon: '/failure.ico',
      hideText: '(●—●)喔哟，崩溃啦！',
      recoverTime: 2000,
    }),
  ],
  theme: defaultTheme({
    sidebar,
    navbar,
    lastUpdatedText: '上次更新',
    // 启动页面丝滑滚动
  }),
})
