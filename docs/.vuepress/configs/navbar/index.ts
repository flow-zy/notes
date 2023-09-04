import s1 from '../sidebar';
import s2 from '../sidebar/index.json';
const isDev = process.env.NODE_ENV == 'development';
const sidebar = isDev ? s1 : s2;
import type { NarBarItem } from '@vuepress/theme-default';
const navbar: NarBarItem[] = [
  {
    text:'首页',
    link:'/'
  },
  {
    text:'笔记',
    children:[
      {
        text: '三剑客',
        link: '/front',
      },
      {
        text:'vue系列',
        link:'/vue'
      },
      {
        text:'react系列',
        link:'/react'
      },
      {
        text:'node系列',
        link:'/node'
      },
      {
        text:'php系列',
        link:'/php'
      },
      {
        text: 'java系列',
        link: '/java',
      },
      {
        text: '数据库',
        link: '/database',
      },
      {
        text: '版本控制',
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
        text: '构建工具',
        link: '/pack',
      },
      {
        text:'预处理器',
        link:'/preprocessor'
      },
      {
        text: '其他',
        link: '/other',
      },
    ]
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
  navbar[1].children.forEach((side, i) => {
    if(side.link && key.includes(side.link)){
      side.collapsible=true
      side.children=value
    }
  })

});

export default navbar;
