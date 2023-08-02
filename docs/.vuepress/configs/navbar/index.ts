import s1 from '../sidebar'
import s2 from '../sidebar/index.json'
const isDev = process.env.NODE_ENV == 'development'
const sidebar = isDev ? s1 : s2
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
    text: '练习',
    link: '/code',
  },
  { text: 'Gitee', link: 'https://gitee.com/overflow_z/blog' },
]
Object.entries(sidebar).forEach(([key, value]) => {
  navbar.forEach((nav, i) => {
    if (nav.link && key.includes(nav.link)) {
      // console.log(value);
      Array.isArray(value) &&
        value.length !== 0 &&
        value.forEach((side) => {
          side.activeMatch = `^${side.link.slice(0, -3)}`
        })

      Array.isArray(value) && value.length !== 0
        ? (navbar[i].children = value.reverse())
        : ''
    }
  })
})

export default navbar
