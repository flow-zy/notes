export const siteData = JSON.parse("{\"base\":\"/notes/\",\"lang\":\"zh-CN\",\"title\":\"study note\",\"description\":\"Includes most of the knowledge of programming languages\",\"head\":[[\"link\",{\"rel\":\"manifest\",\"href\":\"/manifest.webmanifest\"}],[\"link\",{\"rel\":\"icon\",\"href\":\"/images/favicon.ico\"}],[\"meta\",{\"name\":\"description\",\"content\":\"包涵大量的编程知识\"}],[\"meta\",{\"name\":\"keywords\",\"content\":\"前端, 编程, 知识, 学习, 分享\"}],[\"meta\",{\"name\":\"msapplication-TileColor\",\"content\":\"#3eaf7c\"}],[\"meta\",{\"name\":\"theme-color\",\"content\":\"#3eaf7c\"}],[\"meta\",{\"name\":\"apple-mobile-web-app-capable\",\"content\":\"yes\"}],[\"meta\",{\"name\":\"apple-mobile-web-app-status-bar-style\",\"content\":\"black\"}],[\"link\",{\"rel\":\"apple-touch-icon\",\"sizes\":\"152x152\",\"href\":\"favicon.ico\"}],[\"script\",{},\"\\nvar _hmt = _hmt || [];\\n(function() {\\n  var hm = document.createElement(\\\"script\\\");\\n  hm.src = \\\"https://hm.baidu.com/hm.js?03eddaa3ebe0d209ce69f6aa129f64fd\\\";\\n  var s = document.getElementsByTagName(\\\"script\\\")[0]; \\n  s.parentNode.insertBefore(hm, s);\\n})();\\n\"]],\"locales\":{}}")

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
