import { defineUserConfig, defaultTheme, HeadConfig } from 'vuepress';
import { nprogressPlugin } from '@vuepress/plugin-nprogress';
import { backToTopPlugin } from '@vuepress/plugin-back-to-top';
import { navbar, head as header } from './configs/index.js';
// import { docsearchPlugin } from '@vuepress/plugin-docsearch'
import { pwaPlugin } from '@vuepress/plugin-pwa';
import { registerComponentsPlugin } from '@vuepress/plugin-register-components';
import { externalLinkIconPlugin } from '@vuepress/plugin-external-link-icon';
import { searchPlugin } from '@vuepress/plugin-search';
import { mediumZoomPlugin } from '@vuepress/plugin-medium-zoom';
import { containerPlugin } from '@vuepress/plugin-container';
// import { activeHeaderLinksPlugin } from '@vuepress/plugin-active-header-links'
import { copyCodePlugin } from 'vuepress-plugin-copy-code2';
import vuepressVssue from '@vssue/vuepress-plugin-vssue';
import { pwaPopupPlugin } from '@vuepress/plugin-pwa-popup';
import { dynamicTitlePlugin } from '@vuepress-denaro/vuepress-plugin-dynamic-title';
import ribbon from 'vuepress-plugin-ribbon'
function isIterable(obj: any): Boolean {
  return (
    obj !== null &&
    obj !== undefined &&
    typeof obj[Symbol.iterator] === 'function'
  );
}
const head: HeadConfig[] = isIterable(header) && header.map((i) => i);

export default defineUserConfig({
  lang: 'zh-CN',
  title: 'flow Personal blog',
  description: 'Includes most of the knowledge of programming languages',
  base: '/blog/',
  plugins: [
    nprogressPlugin(),
    backToTopPlugin(),
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
    copyCodePlugin({
      showInMobile: true,
    }),
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
  "cursor-effects"
  ],
  theme: defaultTheme({
    sidebar: 'auto',
    navbar,
    lastUpdatedText: '上次更新',
    // 启动页面丝滑滚动
  }),
  // head: process.env.NODE_ENV == 'production' ? head : [],
});
