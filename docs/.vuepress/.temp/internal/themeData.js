export const themeData = JSON.parse("{\"sidebar\":\"auto\",\"navbar\":[{\"text\":\"前端\",\"link\":\"/front/html\",\"activeMatch\":\"^/front/html\",\"children\":[{\"text\":\"HTML\",\"link\":\"/front/html.md\"},{\"text\":\"CSS\",\"link\":\"/front/css.md\"}]},{\"text\":\"后端\",\"link\":\"/rear/node\",\"activeMatch\":\"^/rear\"},{\"text\":\"项目管理\",\"link\":\"/git/\",\"activeMatch\":\"^/git\"},{\"text\":\"网络\",\"link\":\"/http/\",\"activeMatch\":\"^/http\"},{\"text\":\"打包工具\",\"link\":\"/pack/webpack\",\"activeMatch\":\"^/pack\"},{\"text\":\"其他\",\"link\":\"/other/\",\"activeMatch\":\"^/other\"},{\"text\":\"工具软件\",\"children\":[{\"text\":\"编程软件\",\"children\":[{\"text\":\"visual studio code\",\"link\":\"https://code.visualstudio.com\"},{\"text\":\"chrome\",\"link\":\"https://www.google.cn/chrome/index.html\"},{\"text\":\"phpStorm\",\"link\":\"https://www.jetbrains.com.cn/en-us/phpstorm\"}]},{\"text\":\"效率提升\",\"children\":[]}]},{\"text\":\"面试题\",\"link\":\"/interview\"},{\"text\":\"UI框架\",\"children\":[{\"text\":\"Vue\",\"children\":[{\"text\":\"Element-ui\",\"link\":\"https://element.eleme.cn/#/zh-CN\"},{\"text\":\"Element-plus\",\"link\":\"https://element-plus.gitee.io/zh-CN/guide/design.html\"},{\"text\":\"Vant\",\"link\":\"https://vant-contrib.gitee.io/vant/#/zh-CN\"}]},{\"text\":\"React\",\"children\":[{\"text\":\"Ant design\",\"link\":\"https://ant.design/docs/react/introduce-cn\"},{\"text\":\"Antd-mobile\",\"link\":\"http://antd-mobile.gitee.io/index-cn\"}]},{\"text\":\"Css\",\"children\":[{\"text\":\"Bootstrap\",\"link\":\"https://www.bootcss.com\"},{\"text\":\"Tailwind Css\",\"link\":\"https://www.tailwindcss.cn\"}]}]},{\"text\":\"Gitee\",\"link\":\"https://gitee.com\"}],\"lastUpdatedText\":\"上次更新\",\"locales\":{\"/\":{\"selectLanguageName\":\"English\"}},\"colorMode\":\"auto\",\"colorModeSwitch\":true,\"logo\":null,\"repo\":null,\"selectLanguageText\":\"Languages\",\"selectLanguageAriaLabel\":\"Select language\",\"sidebarDepth\":2,\"editLink\":true,\"editLinkText\":\"Edit this page\",\"lastUpdated\":true,\"contributors\":true,\"contributorsText\":\"Contributors\",\"notFound\":[\"There's nothing here.\",\"How did we get here?\",\"That's a Four-Oh-Four.\",\"Looks like we've got some broken links.\"],\"backToHome\":\"Take me home\",\"openInNewWindow\":\"open in new window\",\"toggleColorMode\":\"toggle color mode\",\"toggleSidebar\":\"toggle sidebar\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
