export const data = JSON.parse("{\"key\":\"v-e716102e\",\"path\":\"/pack/webpack.html\",\"title\":\"Webpack\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"Webpack\",\"next\":{\"text\":\"Vite\",\"link\":\"./vite\"},\"description\":\"Webpack简介 Webpack是一个现代的静态模块打包工具，被广泛应用于前端开发中。它能够将项目中的各种资源文件（例如JavaScript、CSS、图片等）视为模块，并将它们打包成可在浏览器中运行的静态文件。 Webpack的主要优点是模块化管理和打包。它允许开发人员使用类似于Node.js的模块化规范（如CommonJS、ES6模块），并通过im...\",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://github.com/notes/pack/webpack.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"study note\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"Webpack\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"Webpack简介 Webpack是一个现代的静态模块打包工具，被广泛应用于前端开发中。它能够将项目中的各种资源文件（例如JavaScript、CSS、图片等）视为模块，并将它们打包成可在浏览器中运行的静态文件。 Webpack的主要优点是模块化管理和打包。它允许开发人员使用类似于Node.js的模块化规范（如CommonJS、ES6模块），并通过im...\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"meta\",{\"property\":\"og:updated_time\",\"content\":\"2023-08-07T15:02:58.000Z\"}],[\"meta\",{\"property\":\"article:author\",\"content\":\"flow-zy\"}],[\"meta\",{\"property\":\"article:modified_time\",\"content\":\"2023-08-07T15:02:58.000Z\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"Webpack\\\",\\\"image\\\":[\\\"\\\"],\\\"dateModified\\\":\\\"2023-08-07T15:02:58.000Z\\\",\\\"author\\\":[{\\\"@type\\\":\\\"Person\\\",\\\"name\\\":\\\"flow-zy\\\",\\\"url\\\":\\\"https://github.com/flow-zy\\\",\\\"email\\\":\\\"wz19121@yeah.net\\\"}]}\"]]},\"headers\":[{\"level\":2,\"title\":\"Webpack简介\",\"slug\":\"webpack简介\",\"link\":\"#webpack简介\",\"children\":[{\"level\":3,\"title\":\"安装\",\"slug\":\"安装\",\"link\":\"#安装\",\"children\":[]},{\"level\":3,\"title\":\"配置\",\"slug\":\"配置\",\"link\":\"#配置\",\"children\":[]},{\"level\":3,\"title\":\"运行\",\"slug\":\"运行\",\"link\":\"#运行\",\"children\":[]},{\"level\":3,\"title\":\"打包结果\",\"slug\":\"打包结果\",\"link\":\"#打包结果\",\"children\":[]}]},{\"level\":2,\"title\":\"核心概念\",\"slug\":\"核心概念\",\"link\":\"#核心概念\",\"children\":[]},{\"level\":2,\"title\":\"配置文件\",\"slug\":\"配置文件\",\"link\":\"#配置文件\",\"children\":[]},{\"level\":2,\"title\":\"加载器（Loaders）\",\"slug\":\"加载器-loaders\",\"link\":\"#加载器-loaders\",\"children\":[]},{\"level\":2,\"title\":\"插件（Plugins）\",\"slug\":\"插件-plugins\",\"link\":\"#插件-plugins\",\"children\":[]},{\"level\":2,\"title\":\"模式（Mode）\",\"slug\":\"模式-mode\",\"link\":\"#模式-mode\",\"children\":[]},{\"level\":2,\"title\":\"代码分割（Code Splitting）\",\"slug\":\"代码分割-code-splitting\",\"link\":\"#代码分割-code-splitting\",\"children\":[]},{\"level\":2,\"title\":\"热模块替换（Hot Module Replacement）\",\"slug\":\"热模块替换-hot-module-replacement\",\"link\":\"#热模块替换-hot-module-replacement\",\"children\":[]},{\"level\":2,\"title\":\"模块解析\",\"slug\":\"模块解析\",\"link\":\"#模块解析\",\"children\":[]},{\"level\":2,\"title\":\"devServer\",\"slug\":\"devserver\",\"link\":\"#devserver\",\"children\":[]},{\"level\":2,\"title\":\"Tree Shaking\",\"slug\":\"tree-shaking\",\"link\":\"#tree-shaking\",\"children\":[]},{\"level\":2,\"title\":\"Loader机制\",\"slug\":\"loader机制\",\"link\":\"#loader机制\",\"children\":[]},{\"level\":2,\"title\":\"插件系统（Plugin System）\",\"slug\":\"插件系统-plugin-system\",\"link\":\"#插件系统-plugin-system\",\"children\":[]},{\"level\":2,\"title\":\"缓存\",\"slug\":\"缓存\",\"link\":\"#缓存\",\"children\":[]},{\"level\":2,\"title\":\"提取公共代码\",\"slug\":\"提取公共代码\",\"link\":\"#提取公共代码\",\"children\":[]},{\"level\":2,\"title\":\"动态导入\",\"slug\":\"动态导入\",\"link\":\"#动态导入\",\"children\":[]},{\"level\":2,\"title\":\"调试配置\",\"slug\":\"调试配置\",\"link\":\"#调试配置\",\"children\":[]},{\"level\":2,\"title\":\"优化配置\",\"slug\":\"优化配置\",\"link\":\"#优化配置\",\"children\":[]},{\"level\":2,\"title\":\"Webpack和现代前端工具的整合\",\"slug\":\"webpack和现代前端工具的整合\",\"link\":\"#webpack和现代前端工具的整合\",\"children\":[{\"level\":3,\"title\":\"1. Babel\",\"slug\":\"_1-babel\",\"link\":\"#_1-babel\",\"children\":[]},{\"level\":3,\"title\":\"2. CSS预处理器\",\"slug\":\"_2-css预处理器\",\"link\":\"#_2-css预处理器\",\"children\":[]},{\"level\":3,\"title\":\"3. 图片和其他静态资源\",\"slug\":\"_3-图片和其他静态资源\",\"link\":\"#_3-图片和其他静态资源\",\"children\":[]},{\"level\":3,\"title\":\"4. CSS框架和库\",\"slug\":\"_4-css框架和库\",\"link\":\"#_4-css框架和库\",\"children\":[]}]},{\"level\":2,\"title\":\"安装和配置Webpack 5\",\"slug\":\"安装和配置webpack-5\",\"link\":\"#安装和配置webpack-5\",\"children\":[]},{\"level\":2,\"title\":\"模块加载器和插件\",\"slug\":\"模块加载器和插件\",\"link\":\"#模块加载器和插件\",\"children\":[]},{\"level\":2,\"title\":\"插件的生命周期\",\"slug\":\"插件的生命周期\",\"link\":\"#插件的生命周期\",\"children\":[]},{\"level\":2,\"title\":\"插件的执行顺序\",\"slug\":\"插件的执行顺序\",\"link\":\"#插件的执行顺序\",\"children\":[]},{\"level\":2,\"title\":\"配置和使用不同的模式\",\"slug\":\"配置和使用不同的模式\",\"link\":\"#配置和使用不同的模式\",\"children\":[]},{\"level\":2,\"title\":\"代码优化和分割\",\"slug\":\"代码优化和分割\",\"link\":\"#代码优化和分割\",\"children\":[]},{\"level\":2,\"title\":\"缓存和持久化缓存\",\"slug\":\"缓存和持久化缓存\",\"link\":\"#缓存和持久化缓存\",\"children\":[{\"level\":3,\"title\":\"1. 缓存策略\",\"slug\":\"_1-缓存策略\",\"link\":\"#_1-缓存策略\",\"children\":[]},{\"level\":3,\"title\":\"2. 持久化缓存\",\"slug\":\"_2-持久化缓存\",\"link\":\"#_2-持久化缓存\",\"children\":[]}]},{\"level\":2,\"title\":\"深入理解Webpack 5的核心概念\",\"slug\":\"深入理解webpack-5的核心概念\",\"link\":\"#深入理解webpack-5的核心概念\",\"children\":[{\"level\":3,\"title\":\"1. 入口点 (Entry Point)\",\"slug\":\"_1-入口点-entry-point\",\"link\":\"#_1-入口点-entry-point\",\"children\":[]},{\"level\":3,\"title\":\"2. 输出 (Output)\",\"slug\":\"_2-输出-output\",\"link\":\"#_2-输出-output\",\"children\":[]},{\"level\":3,\"title\":\"3. Loader\",\"slug\":\"_3-loader\",\"link\":\"#_3-loader\",\"children\":[]},{\"level\":3,\"title\":\"4. 插件 (Plugins)\",\"slug\":\"_4-插件-plugins\",\"link\":\"#_4-插件-plugins\",\"children\":[]},{\"level\":3,\"title\":\"5. 模式 (Mode)\",\"slug\":\"_5-模式-mode\",\"link\":\"#_5-模式-mode\",\"children\":[]},{\"level\":3,\"title\":\"6. 开发服务器 (DevServer)\",\"slug\":\"_6-开发服务器-devserver\",\"link\":\"#_6-开发服务器-devserver\",\"children\":[]},{\"level\":3,\"title\":\"7. 文件处理 (File Handling)\",\"slug\":\"_7-文件处理-file-handling\",\"link\":\"#_7-文件处理-file-handling\",\"children\":[]},{\"level\":3,\"title\":\"8. 打包分析 (Bundle Analysis)\",\"slug\":\"_8-打包分析-bundle-analysis\",\"link\":\"#_8-打包分析-bundle-analysis\",\"children\":[]},{\"level\":3,\"title\":\"9. 代码拆分 (Code Splitting)\",\"slug\":\"_9-代码拆分-code-splitting\",\"link\":\"#_9-代码拆分-code-splitting\",\"children\":[]},{\"level\":3,\"title\":\"10. 懒加载 (Lazy Loading)\",\"slug\":\"_10-懒加载-lazy-loading\",\"link\":\"#_10-懒加载-lazy-loading\",\"children\":[]},{\"level\":3,\"title\":\"11. 缓存 (Caching)\",\"slug\":\"_11-缓存-caching\",\"link\":\"#_11-缓存-caching\",\"children\":[]},{\"level\":3,\"title\":\"12. 优化 (Optimization)\",\"slug\":\"_12-优化-optimization\",\"link\":\"#_12-优化-optimization\",\"children\":[]}]},{\"level\":2,\"title\":\"Webpack 5的新特性和改进\",\"slug\":\"webpack-5的新特性和改进\",\"link\":\"#webpack-5的新特性和改进\",\"children\":[]},{\"level\":2,\"title\":\"调试和故障排除\",\"slug\":\"调试和故障排除\",\"link\":\"#调试和故障排除\",\"children\":[{\"level\":3,\"title\":\"1. 查看错误信息\",\"slug\":\"_1-查看错误信息\",\"link\":\"#_1-查看错误信息\",\"children\":[]},{\"level\":3,\"title\":\"2. 使用Source Maps\",\"slug\":\"_2-使用source-maps\",\"link\":\"#_2-使用source-maps\",\"children\":[]},{\"level\":3,\"title\":\"3. 逐步重构或排除因素\",\"slug\":\"_3-逐步重构或排除因素\",\"link\":\"#_3-逐步重构或排除因素\",\"children\":[]},{\"level\":3,\"title\":\"4. 检查各个插件和配置\",\"slug\":\"_4-检查各个插件和配置\",\"link\":\"#_4-检查各个插件和配置\",\"children\":[]},{\"level\":3,\"title\":\"5. 查阅Webpack文档和社区资源\",\"slug\":\"_5-查阅webpack文档和社区资源\",\"link\":\"#_5-查阅webpack文档和社区资源\",\"children\":[]}]},{\"level\":2,\"title\":\"最佳实践和性能优化\",\"slug\":\"最佳实践和性能优化\",\"link\":\"#最佳实践和性能优化\",\"children\":[]}],\"git\":{\"updatedTime\":1691420578000},\"filePathRelative\":\"pack/webpack.md\",\"copyright\":{\"author\":\"flow-zy\",\"license\":\"防守打法挥洒的\"},\"readingTime\":{\"minutes\":42.78,\"words\":17111},\"autoDesc\":true,\"excerpt\":\"\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
