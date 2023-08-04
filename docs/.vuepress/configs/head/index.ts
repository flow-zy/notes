import type { HeadConfig } from '@vuepress/core'

const head: HeadConfig[] = [
  ['link', { rel: 'manifest', href: '/manifest.webmanifest' }],
  ['link', { rel: 'icon', href: '/images/favicon.ico' }],
  ['meta', { name: 'description', content: '包涵大量的编程知识' }],
  ['meta', { name: 'keywords', content: '前端, 编程, 知识, 学习, 分享' }],
  ['meta', { name: 'msapplication-TileColor', content: '#3eaf7c' }],
  ['meta', { name: 'theme-color', content: '#3eaf7c' }],
  ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
  ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
  ['link', { rel: 'apple-touch-icon', sizes: '152x152', href: 'favicon.ico' }],
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
