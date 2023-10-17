import { defineComponent, h, onBeforeUnmount, onMounted, ref, } from "vue";
import { GetAudioList } from "../../../utils/meting.js";
export default defineComponent({
    props: {
        src: {
            type: Object,
        },
    },
    setup(props) {
        const src = {
            ...props.src,
        };
        const el = ref();
        let player;
        onMounted(async () => {
            Promise.all([
                GetAudioList(src),
                import(/* webpackChunkName: "aplayer" */ "aplayer/dist/APlayer.min.js"),
                import(
                /* webpackChunkName: "aplayer" */ "aplayer/dist/APlayer.min.css"),
            ]).then(([audios, { default: APlayer }]) => {
                src.container = el.value;
                src.audio = audios;
                player = new APlayer(src);
            });
        });
        onBeforeUnmount(() => {
            player?.destroy();
        });
        return () => h("div", {
            ref: el,
        });
    },
});
