import type { HeadConfig } from '@vuepress/core';

const head: HeadConfig[] = [
  ['link', { rel: 'icon', href: 'favicon.ico' }],
  ,
  ['meta', { name: 'description', content: '包涵大量的编程知识' }],
  ['meta', { name: 'keywords', content: '前端, 编程, 知识, 学习, 分享' }],
  [
    'meta',
    {
      name: 'viewport',
      content:
        'width=device-width, initial-scale=1, maximum-scale=1,user-scalable=no',
    },
  ],
  ['meta', { name: 'msapplication-TileColor', content: '#3eaf7c' }],
  ['meta', { name: 'theme-color', content: '#3eaf7c' }],
  ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
  ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
  ['link', { rel: 'apple-touch-icon', sizes: '152x152', href: 'favicon.ico' }],
] as HeadConfig[];
export default head;
