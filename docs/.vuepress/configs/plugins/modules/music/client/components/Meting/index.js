import { defineComponent, h } from "vue";
import Meting from "./meting.js";
const metingPluginOptions = METING_PLUGIN_OPTIONS;
export default defineComponent({
    props: {
        mid: {
            type: String,
            default: "",
        },
        server: {
            type: String,
            default: metingPluginOptions.metingOptions?.server,
        },
        type: {
            type: String,
            default: metingPluginOptions.metingOptions?.type,
        },
        auto: {
            type: String,
            default: "",
        },
        auth: {
            type: String,
            default: metingPluginOptions.metingOptions?.auth,
        },
        api: {
            type: String,
            default: metingPluginOptions.metingOptions?.api,
        },
        list: {
            type: Array,
        },
        fixed: {
            type: Boolean,
            default: metingPluginOptions.aplayerOptions?.fixed,
        },
        mini: {
            type: Boolean,
            default: metingPluginOptions.aplayerOptions?.mini,
        },
        autoplay: {
            type: Boolean,
            default: metingPluginOptions.aplayerOptions?.autoplay,
        },
        theme: {
            type: String,
            default: metingPluginOptions.aplayerOptions?.theme,
        },
        loop: {
            type: String,
            default: metingPluginOptions.aplayerOptions?.loop,
        },
        order: {
            type: String,
            default: metingPluginOptions.aplayerOptions?.order,
        },
        preload: {
            type: String,
            default: metingPluginOptions.aplayerOptions?.preload,
        },
        volume: { type: Number, default: metingPluginOptions.aplayerOptions?.volume },
        mutex: { type: Boolean, default: metingPluginOptions.aplayerOptions?.mutex },
        listFolded: { type: Boolean, default: metingPluginOptions.aplayerOptions?.listFolded },
        listMaxHeight: {
            type: String,
            default: metingPluginOptions.aplayerOptions?.listMaxHeight,
        },
        lrcType: {
            type: Number,
            default: metingPluginOptions.aplayerOptions?.lrcType,
        },
        audio: {
            type: [Object, Array],
        },
        storageName: { type: String, default: metingPluginOptions.aplayerOptions?.storageName },
        customAudioType: {
            type: Object,
            default: () => metingPluginOptions.aplayerOptions?.customAudioType,
        },
        customInit: {
            type: Object,
            default: () => metingPluginOptions.aplayerOptions?.customInit,
        },
    },
    setup(props) {
        const src = { ...props };
        return () => h(Meting, { src });
    },
});
