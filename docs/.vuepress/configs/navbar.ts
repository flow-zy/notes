import s1 from './sidebar';
import s2 from './sidebar.json';
const isDev = process.env.NODE_ENV == 'development';
const sidebar = isDev ? s1 : s2;
console.log('🚀 ~ file: navbar.ts:4 ~ sidebar:', sidebar);
const navbar = [
  // NavbarItem
  {
    text: '前端',
    link: '/front',
  },
  {
    text: '后端',
    link: '/rear',
  },
  {
    text: '项目管理',
    link: '/management',
  },
  {
    text: '网络',
    link: '/network',
  },
  {
    text: '小程序',
    link: '/program',
  },
  {
    text: '框架',
    link: '/frame',
  },
  {
    text: '打包工具',
    link: '/pack',
    activeMatch: '^/pack',
  },
  {
    text: '其他',
    link: '/other',
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
  {
    text: '项目',
    link: '/project',
  },
  { text: 'Gitee', link: 'https://gitee.com/overflow_z/blog' },
  { text: 'Github', link: 'https://github.com/flow-zy/blog' },
];
Object.entries(sidebar).forEach(([key, value]) => {
  navbar.forEach((nav, i) => {
    if (nav.link && key.includes(nav.link)) {
      // console.log(value);
      Array.isArray(value) &&
        value.length !== 0 &&
        value.forEach((side) => {
          side.activeMatch = `^${side.link.slice(0, -3)}`;
        });

      navbar[i].children =
        Array.isArray(value) && value.length !== 0 ? value.reverse() : [];
    }
  });
});

export default navbar;
