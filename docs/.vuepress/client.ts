import { defineClientConfig } from '@vuepress/client'
import { Popper, PopperShape, MAX_Z_INDEX } from '@moefy-canvas/theme-popper'
import type { CanvasOptions, PopperConfig } from '@moefy-canvas/theme-popper'
import { onMounted, onBeforeMount, ref } from 'vue'
const themeConfig: PopperConfig = {
  shape: PopperShape.Star,
  size: 1.75,
  numParticles: 10,
}

const canvasOptions: CanvasOptions = {
  opacity: 1,
  zIndex: MAX_Z_INDEX,
}
export default defineClientConfig({
  enhance({ app, router, siteData }) {
    // 路由事件处理
    router.beforeEach((to, form, next) => {
      next()
    })
  },
  setup() {
    const navHeight = ref<number>(0)
    onBeforeMount(() => {
      // 鼠标点击出现星星
      const canvas =
        (document as Document) &&
        (document.createElement('canvas') as HTMLCanvasElement)
      canvas.id = 'moefy-canvas'
      const doc = document.querySelector('#app') as HTMLDivElement
      doc.appendChild(canvas)
    })

    onMounted(() => {
      const el = document.getElementById('moefy-canvas') as HTMLCanvasElement
      const popper = new Popper(themeConfig, canvasOptions)
      popper.mount(el as HTMLCanvasElement)
      navHeight.value = (
        document.querySelector('header.navbar') as HTMLHeadElement
      ).clientHeight
    })
  },
  rootComponents: [],
})
