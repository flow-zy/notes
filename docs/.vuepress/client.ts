import { defineClientConfig } from '@vuepress/client';
import {
  Popper,
  PopperShape,
  type PopperConfig,
  MAX_Z_INDEX,
  type CanvasOptions,
} from '@moefy-canvas/theme-popper';
import { onMounted, onBeforeMount, ref } from 'vue';
const themeConfig: PopperConfig = {
  shape: PopperShape.Star,
  size: 1.75,
  numParticles: 10,
};

const canvasOptions: CanvasOptions = {
  opacity: 1,
  zIndex: MAX_Z_INDEX,
};
export default defineClientConfig({
  enhance({ app, router, siteData }) {
    // 路由事件处理
    router.beforeEach((to, form, next) => {
      next();
    });
  },
  setup() {
    const value = ref(0);
    onBeforeMount(() => {
      const canvas = document && document.createElement('canvas');
      canvas.id = 'moefy-canvas';
      const doc = document.querySelector('#app') as HTMLDivElement;
      doc.appendChild(canvas);
      const progress: HTMLProgressElement =
        document && (document.createElement('progress') as HTMLProgressElement);
      progress.id = 'progress';
      progress.value = value.value;
      progress.max = 100;
      doc.appendChild(progress);
    });
    const handleScroll = (w: Window) => {
      const progress = document.querySelector(
        '#progress'
      ) as HTMLProgressElement;
      value.value = w && (w.scrollY / (document.body.clientHeight - 700)) * 100;
      value.value <= 1
        ? (progress.style.display = 'none')
        : (progress.style.display = 'block');
      progress.value = value.value;
    };
    onMounted(() => {
      const el = document.getElementById('moefy-canvas');
      const popper = new Popper(themeConfig, canvasOptions);
      popper.mount(el as HTMLCanvasElement);
      process.env.NODE_ENV == 'development'
        ? window && handleScroll(window)
        : '';
    });
    window &&
      window.addEventListener('scroll', () => {
        handleScroll(window);
      });
  },
  rootComponents: [],
});
