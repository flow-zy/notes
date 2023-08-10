import type { HeadConfig } from '@vuepress/core'

const head: HeadConfig[] = [
  [
    'link',
    {
      rel: 'apple-touch-icon',
      type: 'image/png',
      sizes: '180x180',
      href: '/images/favicon-180x180.png',
    },
  ],
  [
    'link',
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      href: '/images/favicon-32x32.png',
    },
  ],
  [
    'link',
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '16x16',
      href: '/images/favicon-16x16.png',
    },
  ],
  ['link', { rel: 'manifest', href: '/manifest.webmanifest' }],
  [
    'link',
    {
      rel: 'mask-icon',
      href: '/images/safari-pinned-tab.svg',
    },
  ],
  ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
  ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
  ['meta', { name: 'msapplication-TileColor', content: '#3eaf7c' }],
  ['meta', { name: 'theme-color', content: '#3eaf7c' }],
  ['meta', { name: 'description', content: '包涵大量的编程知识' }],
  ['meta', { name: 'keywords', content: '前端, 编程, 知识, 学习, 分享' }],
  [
    'script',
    {},
    `
var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?03eddaa3ebe0d209ce69f6aa129f64fd";
  var s = document.getElementsByTagName("script")[0]; 
  s.parentNode.insertBefore(hm, s);
})();
`,
  ],
] as HeadConfig[]
export default head
