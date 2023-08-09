export const themeData = JSON.parse("{\"sidebar\":\"auto\",\"navbar\":[{\"text\":\"前端\",\"link\":\"/front\",\"children\":[{\"text\":\"Css\",\"link\":\"/front/css.md\",\"activeMatch\":\"^/front/css\"},{\"text\":\"ECMAScript\",\"link\":\"/front/ECMAScript.md\",\"activeMatch\":\"^/front/ECMAScript\"},{\"text\":\"Html\",\"link\":\"/front/html.md\",\"activeMatch\":\"^/front/html\"},{\"text\":\"Javascript\",\"link\":\"/front/Javascript.md\",\"activeMatch\":\"^/front/Javascript\"},{\"text\":\"Jquery\",\"link\":\"/front/Jquery.md\",\"activeMatch\":\"^/front/Jquery\"},{\"text\":\"TypeScript\",\"link\":\"/front/TypeScript.md\",\"activeMatch\":\"^/front/TypeScript\"}]},{\"text\":\"后端\",\"link\":\"/rear\",\"children\":[{\"text\":\"Java\",\"link\":\"/rear/java.md\",\"activeMatch\":\"^/rear/java\"},{\"text\":\"Node\",\"link\":\"/rear/node.md\",\"activeMatch\":\"^/rear/node\"},{\"text\":\"Php\",\"link\":\"/rear/php.md\",\"activeMatch\":\"^/rear/php\"}]},{\"text\":\"数据库\",\"link\":\"/database\",\"children\":[{\"text\":\"Mysql\",\"link\":\"/database/mysql.md\",\"activeMatch\":\"^/database/mysql\"}]},{\"text\":\"项目管理\",\"link\":\"/management\",\"children\":[{\"text\":\"Git\",\"link\":\"/management/git.md\",\"activeMatch\":\"^/management/git\"},{\"text\":\"Svn\",\"link\":\"/management/svn.md\",\"activeMatch\":\"^/management/svn\"}]},{\"text\":\"网络\",\"link\":\"/network\",\"children\":[{\"text\":\"Ajax\",\"link\":\"/network/ajax.md\",\"activeMatch\":\"^/network/ajax\"},{\"text\":\"Http\",\"link\":\"/network/http.md\",\"activeMatch\":\"^/network/http\"}]},{\"text\":\"小程序\",\"link\":\"/program\",\"children\":[{\"text\":\"Uniapp\",\"link\":\"/program/uniapp.md\",\"activeMatch\":\"^/program/uniapp\"},{\"text\":\"微信小程序\",\"link\":\"/program/微信小程序.md\",\"activeMatch\":\"^/program/微信小程序\"}]},{\"text\":\"框架\",\"link\":\"/frame\",\"children\":[{\"text\":\"React\",\"link\":\"/frame/react.md\",\"activeMatch\":\"^/frame/react\"},{\"text\":\"Spring\",\"link\":\"/frame/spring.md\",\"activeMatch\":\"^/frame/spring\"},{\"text\":\"Thinkphp\",\"link\":\"/frame/thinkphp.md\",\"activeMatch\":\"^/frame/thinkphp\"},{\"text\":\"Vue\",\"link\":\"/frame/vue.md\",\"activeMatch\":\"^/frame/vue\"}]},{\"text\":\"打包工具\",\"link\":\"/pack\",\"activeMatch\":\"^/pack\",\"children\":[{\"text\":\"Vite\",\"link\":\"/pack/vite.md\",\"activeMatch\":\"^/pack/vite\"},{\"text\":\"Webpack\",\"link\":\"/pack/webpack.md\",\"activeMatch\":\"^/pack/webpack\"}]},{\"text\":\"其他\",\"link\":\"/other\",\"children\":[{\"text\":\"Express\",\"link\":\"/other/express.md\",\"activeMatch\":\"^/other/express\"},{\"text\":\"Linux\",\"link\":\"/other/linux.md\",\"activeMatch\":\"^/other/linux\"},{\"text\":\"Pinia\",\"link\":\"/other/pinia.md\",\"activeMatch\":\"^/other/pinia\"},{\"text\":\"ReactRouter\",\"link\":\"/other/ReactRouter.md\",\"activeMatch\":\"^/other/ReactRouter\"},{\"text\":\"Redux\",\"link\":\"/other/Redux.md\",\"activeMatch\":\"^/other/Redux\"},{\"text\":\"VueRouter\",\"link\":\"/other/VueRouter.md\",\"activeMatch\":\"^/other/VueRouter\"},{\"text\":\"Vuex\",\"link\":\"/other/Vuex.md\",\"activeMatch\":\"^/other/Vuex\"}]},{\"text\":\"练习\",\"link\":\"/code\",\"children\":[{\"text\":\"TodoMVC\",\"link\":\"/code/todoMVC.md\",\"activeMatch\":\"^/code/todoMVC\"}]},{\"text\":\"面试题\",\"link\":\"https://interview.github.io\"},{\"text\":\"博客\",\"link\":\"https://blog.github.io\"}],\"lastUpdatedText\":\"上次更新\",\"contributorsText\":\"贡献者\",\"contributors\":false,\"logo\":\"/images/logo.jpg\",\"locales\":{\"/\":{\"selectLanguageName\":\"English\"}},\"colorMode\":\"auto\",\"colorModeSwitch\":true,\"repo\":null,\"selectLanguageText\":\"Languages\",\"selectLanguageAriaLabel\":\"Select language\",\"sidebarDepth\":2,\"editLink\":true,\"editLinkText\":\"Edit this page\",\"lastUpdated\":true,\"notFound\":[\"There's nothing here.\",\"How did we get here?\",\"That's a Four-Oh-Four.\",\"Looks like we've got some broken links.\"],\"backToHome\":\"Take me home\",\"openInNewWindow\":\"open in new window\",\"toggleColorMode\":\"toggle color mode\",\"toggleSidebar\":\"toggle sidebar\"}")

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
