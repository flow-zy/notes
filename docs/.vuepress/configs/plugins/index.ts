import { nprogressPlugin } from '@vuepress/plugin-nprogress'
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
import { seoPlugin } from 'vuepress-plugin-seo2'
import goTopPlugin from 'vuepress-plugin-go-top'
import { PluginConfig, PluginObject } from 'vuepress'
const plugins: PluginConfig | PluginObject[] = [
  copyrightPlugin({
    author: 'flow-zy',
    triggerWords: 20,
    license: '防守打法挥洒的',
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
    repo: 'flow-zy/notes',
    repoId: 'R_kgDOKAlqHw',
    category: 'Announcements',
    categoryId: 'DIC_kwDOKAlqH84CYPfm',
  }),
  seoPlugin({
    hostname: 'https://github.com',
    author: {
      name: 'flow-zy',
      url: 'https://github.com/flow-zy',
      email: 'wz19121@yeah.net',
    },
  }),
  goTopPlugin(),
]

export default plugins
