export const data = JSON.parse("{\"key\":\"v-3a218f78\",\"path\":\"/REMADE.html\",\"title\":\"hello\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[],\"git\":{},\"filePathRelative\":\"REMADE.md\"}")

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
