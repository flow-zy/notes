import { defineClientConfig } from '@vuepress/client'
import {
  Popper,
  PopperShape,
  type PopperConfig,
  MAX_Z_INDEX,
  type CanvasOptions,
} from '@moefy-canvas/theme-popper'
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
      // 创建一个阅读的进度条
      const progress = document.createElement('progress') as HTMLProgressElement
      progress.id = 'moefy-progress'
      progress.value = 0
      progress.max = 100
      doc.appendChild(progress)
    })

    const handleScroll = () => {
      const scrollTop =
        document.body.scrollTop || document.documentElement.scrollTop
      const scrollHeight = (document.querySelector('main.page') as HTMLElement)
        .offsetHeight
      const progress = document.getElementById(
        'moefy-progress'
      ) as HTMLProgressElement
      let step = Number(
        ((scrollTop / (scrollHeight - navHeight.value - 600)) * 100).toFixed(2)
      )
      progress.value = step
    }
    onMounted(() => {
      const el = document.getElementById('moefy-canvas') as HTMLCanvasElement
      const popper = new Popper(themeConfig, canvasOptions)
      popper.mount(el as HTMLCanvasElement)
      navHeight.value = (
        document.querySelector('header.navbar') as HTMLHeadElement
      ).clientHeight
      window.addEventListener('scroll', handleScroll)
    })
  },
  rootComponents: [],
})
