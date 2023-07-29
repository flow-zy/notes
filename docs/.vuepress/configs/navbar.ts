import s1 from './sidebar';
import s2 from '../sidebar.json';
const isDev = process.env.NODE_ENV === 'development';
const sidebar = isDev ? s1 : s2;

const navbar = [
  // NavbarItem
  {
    text: '前端',
    link: '/front/html',
    activeMatch: '^/front/html',
  },
  {
    text: '后端',
    link: '/rear/node',
    activeMatch: '^/rear',
  },
  {
    text: '项目管理',
    link: '/git/',
    activeMatch: '^/git',
  },
  {
    text: '网络',
    link: '/http/',
    activeMatch: '^/http',
  },
  {
    text: '打包工具',
    link: '/pack/webpack',
    activeMatch: '^/pack',
  },
  {
    text: '其他',
    link: '/other/',
    activeMatch: '^/other',
  },
  {
    text: '工具软件',
    children: [
      {
        text: '编程软件',
        children: [
          {
            text: 'visual studio code',
            link: 'https://code.visualstudio.com',
          },
          {
            text: 'chrome',
            link: 'https://www.google.cn/chrome/index.html',
          },
          {
            text: 'phpStorm',
            link: 'https://www.jetbrains.com.cn/en-us/phpstorm',
          },
        ],
      },
      {
        text: '效率提升',
        children: [],
      },
    ],
  },
  {
    text: '面试题',
    link: '/interview',
  },
  {
    text: 'UI框架',
    children: [
      {
        text: 'Vue',
        children: [
          {
            text: 'Element-ui',
            link: 'https://element.eleme.cn/#/zh-CN',
          },
          {
            text: 'Element-plus',
            link: 'https://element-plus.gitee.io/zh-CN/guide/design.html',
          },
          {
            text: 'Vant',
            link: 'https://vant-contrib.gitee.io/vant/#/zh-CN',
          },
        ],
      },
      {
        text: 'React',
        children: [
          {
            text: 'Ant design',
            link: 'https://ant.design/docs/react/introduce-cn',
          },
          {
            text: 'Antd-mobile',
            link: 'http://antd-mobile.gitee.io/index-cn',
          },
        ],
      },
      {
        text: 'Css',
        children: [
          {
            text: 'Bootstrap',
            link: 'https://www.bootcss.com',
          },
          {
            text: 'Tailwind Css',
            link: 'https://www.tailwindcss.cn',
          },
        ],
      },
    ],
  },
  { text: 'Gitee', link: 'https://gitee.com' },
];
Object.entries(sidebar).forEach(([key, value], i) => {
  if (Array.isArray(value) && value.length !== 0) {
    const index = navbar.findIndex((item) => item.text.indexOf(key));
    navbar[index].children = value;
  }
});
console.log('🚀 ~ file: navbar.ts:125 ~ navbar:', navbar);

export default navbar;
