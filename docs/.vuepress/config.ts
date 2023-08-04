import { defineUserConfig, defaultTheme, HeadConfig } from 'vuepress'
import { nprogressPlugin } from '@vuepress/plugin-nprogress'
import { navbar, head as header } from './configs/index.js'
import { pwaPlugin } from '@vuepress/plugin-pwa'
import { registerComponentsPlugin } from '@vuepress/plugin-register-components'
import { externalLinkIconPlugin } from '@vuepress/plugin-external-link-icon'
import { mediumZoomPlugin } from '@vuepress/plugin-medium-zoom'
import { containerPlugin } from '@vuepress/plugin-container'
import { copyCodePlugin } from 'vuepress-plugin-copy-code2'
import { pwaPopupPlugin } from '@vuepress/plugin-pwa-popup'
import { dynamicTitlePlugin } from '@vuepress-denaro/vuepress-plugin-dynamic-title'
import { readingTimePlugin } from 'vuepress-plugin-reading-time2'
import { copyrightPlugin } from 'vuepress-plugin-copyright2'
import { searchProPlugin } from 'vuepress-plugin-search-pro'
import { commentPlugin } from 'vuepress-plugin-comment2'
import { mdEnhancePlugin } from 'vuepress-plugin-md-enhance'
import { lastReadingPlugin } from '@yuannancheng/vuepress-plugin-last-reading'
import { seoPlugin } from 'vuepress-plugin-seo2'
import kanBanPlugin from 'vuepress-plugin-kanban-live2d'
import goTopPlugin from 'vuepress-plugin-go-top'
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
  base: '/blog/',
  plugins: [
    copyrightPlugin({
      author: 'flow-zy',
      disableCopy: true,
    }),

    readingTimePlugin({
      wordPerMinute: 400,
      locales: {
        '/zh/': {
          word: '总共{$word} 字',
          less1Minute: '少于1分钟',
          time: '读完大约需要 {time} 分钟',
        },
      },
    }),
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
      locales: {
        '/zh/': {
          copy: '复制',
          hint: '复制成功',
        },
      },
    }),
    mdEnhancePlugin({
      // 启用 vue 交互演示
      vuePlayground: true,
      demo: true,
      // 启用 figure
      figure: true,
      // 启用图片懒加载
      imgLazyload: true,
      // 启用图片标记
      imgMark: true,
      // 启用图片大小
      imgSize: true,
    }),
    dynamicTitlePlugin({
      showIcon: '', // The icon displayed when the document is in the current tab.
      showText: '(/≧▽≦/)咦！又好了！', // The title displayed when the document is in the current tab.
      hideIcon: '', // The icon displayed when the document is not in the current tab.
      hideText: '(●—●)喔哟, 崩溃啦！', // The title displayed when the document is not in the current tab.
      recoverTime: 2000, // The time to recover the title after the tab is changed.
    }),
    commentPlugin({
      provider: 'Giscus',
      repo: 'flow-zy/blog',
      repoId: 'R_kgDOKAlqHw',
      category: 'Announcements',
      categoryId: 'DIC_kwDOKAlqH84CYPfm',
    }),
    lastReadingPlugin(),
    seoPlugin({
      hostname: 'https://github.com',
      author: {
        name: 'flow-zy',
        url: 'https://github.com/flow-zy',
        email: 'wz19121@yeah.net',
      },
    }),
    goTopPlugin(),
    kanBanPlugin({
      // 是否开启控制台日志打印(default: false)
      log: false,
      live2d: {
        // 是否启用(关闭请设置为false)(default: true)
        enable: true,
        model: 'wanko',
        mobile: {
          show: false, // 是否在移动设备上显示(default: false)
        },
        react: {
          opacity: 0.8, // 模型透明度(default: 0.8)
        },
      },
      message: {
        welcome: '欢迎观看flow的学习笔记',
        closeMessage: '你知道我喜欢吃什么吗？痴痴地望着你',
        home: '心里的花，我想要带你回家。',
        theme: 'wanko',
      },
    }),
  ],
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
})
