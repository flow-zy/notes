import { defineUserConfig, defaultTheme, HeadConfig } from 'vuepress'
import { nprogressPlugin } from '@vuepress/plugin-nprogress'
import { navbar, head as header } from './configs/index.js'
// import { docsearchPlugin } from '@vuepress/plugin-docsearch'
import { pwaPlugin } from '@vuepress/plugin-pwa'
import { registerComponentsPlugin } from '@vuepress/plugin-register-components'
import { externalLinkIconPlugin } from '@vuepress/plugin-external-link-icon'
import { mediumZoomPlugin } from '@vuepress/plugin-medium-zoom'
import { containerPlugin } from '@vuepress/plugin-container'
// import { activeHeaderLinksPlugin } from '@vuepress/plugin-active-header-links'
import { copyCodePlugin } from 'vuepress-plugin-copy-code2'
import vuepressVssue from '@vssue/vuepress-plugin-vssue'
import { pwaPopupPlugin } from '@vuepress/plugin-pwa-popup'
import { dynamicTitlePlugin } from '@vuepress-denaro/vuepress-plugin-dynamic-title'
import ribbon from 'vuepress-plugin-ribbon'
import { readingTimePlugin } from 'vuepress-plugin-reading-time2'
import backToTopPlugin from '@vuepress-reco/vuepress-plugin-back-to-top'
import { copyrightPlugin } from 'vuepress-plugin-copyright2'
import kanBanPlugin from '@vuepress-reco/vuepress-plugin-kan-ban-niang'
import { searchProPlugin } from 'vuepress-plugin-search-pro'
// import readingProgress from 'vuepress-plugin-reading-progress-v2'
import { commentPlugin } from 'vuepress-plugin-comment2'
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
  title: 'flow Personal blog',
  description: 'Includes most of the knowledge of programming languages',
  base: '/blog/',
  plugins: [
    kanBanPlugin({
      theme: ['wanko'],
    }),
    copyrightPlugin({
      author: 'flow-zy',
      disableCopy: true,
    }),
    backToTopPlugin({
      icon: '/images/back.webp',
    }),
    readingTimePlugin({ wordPerMinute: 400 }),
    nprogressPlugin(),
    pwaPlugin({
      skipWaiting: true,
    }),
    pwaPopupPlugin({
      locales: {
        '/zh/': {
          message: '发现新的内容可用',
          buttonText: '刷新',
        },
      },
    }),
    registerComponentsPlugin({
      componentsDir: './components',
    }),
    externalLinkIconPlugin(),
    containerPlugin({
      type: 'tip',
    }),
    mediumZoomPlugin(),
    searchProPlugin({
      // 配置选项
      indexContent: true,
      autoSuggestions: true,
      locales: {
        '/zh/': {
          placeholder: '搜索文档',
          searching: '搜索中....',
        },
      },
    }),
    copyCodePlugin({
      showInMobile: true,
    }),
    // readingProgress({
    //   readingProgress: 'reading-progress',
    // }),
    vuepressVssue({
      platform: 'github-v4',
      owner: 'flow-zy',
      repo: 'blog',
      locale: true,
      clientId: 'e741708defe21c7308ec',
      clientSecret: '65c7cfe6ef45ce3972fb9e1f35bc36f8d9620216',
      autoCreateIssue: true, // 自动创建评论，默认是false，最好开启，这样首次进入页面的时候就不用去点击创建评论的按钮了。
    }),
    dynamicTitlePlugin({
      showIcon: '', // The icon displayed when the document is in the current tab.
      showText: '(/≧▽≦/)咦！又好了！', // The title displayed when the document is in the current tab.
      hideIcon: '', // The icon displayed when the document is not in the current tab.
      hideText: '(●—●)喔哟, 崩溃啦！', // The title displayed when the document is not in the current tab.
      recoverTime: 2000, // The time to recover the title after the tab is changed.
    }),
    ribbon({
      size: 90, // width of the ribbon, default: 90
      opacity: 0.8, // opacity of the ribbon, default: 0.3
      zIndex: -1, // z-index property of the background, default: -1
    }),
    commentPlugin({
      provider: 'Giscus',
      repo: 'flow-zy/blog',
      repoId: 'R_kgDOKAlqHw',
      category: 'Announcements',
      categoryId: 'DIC_kwDOKAlqH84CYPfm',
    }),
  ],
  theme: defaultTheme({
    sidebar: 'auto',
    navbar,
    lastUpdatedText: '上次更新',
    // 启动页面丝滑滚动
  }),
  // head: process.env.NODE_ENV == 'production' ? head : [],
})
