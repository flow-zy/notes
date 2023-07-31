import { defineClientConfig } from '@vuepress/client'
import {
  Popper,
  PopperShape,
  type PopperConfig,
  MAX_Z_INDEX,
  type CanvasOptions,
} from '@moefy-canvas/theme-popper'
import { onMounted } from 'vue'
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
  enhance({ app, router, siteData }) {},
  setup() {
    const canvas = document.createElement('canvas')
    canvas.id = 'moefy-canvas'
    const doc = document.querySelector('#app') as HTMLDivElement
    doc.appendChild(canvas)
    onMounted(() => {
      const el = document.getElementById('moefy-canvas')
      const popper = new Popper(themeConfig, canvasOptions)
      popper.mount(el as HTMLCanvasElement)
    })
  },
  rootComponents: [],
})
