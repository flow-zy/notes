export const data = JSON.parse("{\"key\":\"v-e4cb1150\",\"path\":\"/other/\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[],\"git\":{},\"filePathRelative\":\"other/index.md\"}")

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
