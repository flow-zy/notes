import s1 from '../sidebar';
import s2 from '../sidebar/index.json';
const isDev = process.env.NODE_ENV == 'development';
const sidebar = isDev ? s1 : s2;
import type { NarBarItem } from '@vuepress/theme-default';
const navbar: NarBarItem[] = [
  {
    text: '前端',
    link: '/front',
  },
  {
    text: '后端',
    link: '/rear',
  },
  {
    text: '数据库',
    link: '/database',
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
  },
  {
    text: '其他',
    link: '/other',
  },
  {
    text: '代码人生',
    link: '/problem',
  },
  {
    text: '案例',
    link: '/code',
  },
  {
    text: '面试题',
    link: 'https://flow-zy.github.io/interview/',
  },
];
Object.entries(sidebar).forEach(([key, value]) => {
  navbar.forEach((nav, i) => {
    if (nav.link && key.includes(nav.link)) {
      Array.isArray(value) &&
        value.length !== 0 &&
        value.forEach((side) => {
          side.activeMatch = `^${side.link.slice(0, -3)}`;
        });

      Array.isArray(value) && value.length !== 0
        ? (navbar[i].children = value.reverse())
        : '';
    }
  });
});

export default navbar;
