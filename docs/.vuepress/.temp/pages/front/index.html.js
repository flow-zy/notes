export const data = JSON.parse("{\"key\":\"v-7e25fb5f\",\"path\":\"/front/\",\"title\":\"hwllo\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[],\"git\":{},\"filePathRelative\":\"front/index.md\"}")

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
