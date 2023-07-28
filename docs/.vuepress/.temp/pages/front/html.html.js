export const data = JSON.parse("{\"key\":\"v-58f2a8e2\",\"path\":\"/front/html.html\",\"title\":\"hwllo\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[],\"git\":{},\"filePathRelative\":\"front/html.md\"}")

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
