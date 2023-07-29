export const siteData = JSON.parse("{\"base\":\"/blog/\",\"lang\":\"zh-CN\",\"title\":\"flow Personal blog\",\"description\":\"Includes most of the knowledge of programming languages\",\"head\":[[\"link\",{\"rel\":\"icon\",\"href\":\"favicon.ico\"}],null,[\"meta\",{\"name\":\"description\",\"content\":\"包涵大量的编程知识\"}],[\"meta\",{\"name\":\"keywords\",\"content\":\"前端, 编程, 知识, 学习, 分享\"}],[\"meta\",{\"name\":\"viewport\",\"content\":\"width=device-width, initial-scale=1, maximum-scale=1,user-scalable=no\"}],[\"meta\",{\"name\":\"msapplication-TileColor\",\"content\":\"#3eaf7c\"}],[\"meta\",{\"name\":\"theme-color\",\"content\":\"#3eaf7c\"}],[\"meta\",{\"name\":\"apple-mobile-web-app-capable\",\"content\":\"yes\"}],[\"meta\",{\"name\":\"apple-mobile-web-app-status-bar-style\",\"content\":\"black\"}],[\"link\",{\"rel\":\"apple-touch-icon\",\"sizes\":\"152x152\",\"href\":\"favicon.ico\"}]],\"locales\":{}}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSiteData) {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ siteData }) => {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  })
}
