import { PropType } from "vue";
import type { VNode } from "vue";
import type { APlayerOptions } from "aplayer/dist/APlayer.min.js";
declare const _default: import("vue").DefineComponent<{
    fixed: {
        type: BooleanConstructor;
        default: boolean | undefined;
    };
    mini: {
        type: BooleanConstructor;
        default: boolean | undefined;
    };
    autoplay: {
        type: BooleanConstructor;
        default: boolean | undefined;
    };
    theme: {
        type: StringConstructor;
        default: string | undefined;
    };
    loop: {
        type: PropType<"all" | "none" | "one">;
        default: "all" | "none" | "one" | undefined;
    };
    order: {
        type: PropType<"list" | "random">;
        default: "list" | "random" | undefined;
    };
    preload: {
        type: PropType<"auto" | "none" | "metadata">;
        default: "auto" | "none" | "metadata" | undefined;
    };
    volume: {
        type: NumberConstructor;
        default: number | undefined;
    };
    mutex: {
        type: BooleanConstructor;
        default: boolean | undefined;
    };
    listFolded: {
        type: BooleanConstructor;
        default: boolean | undefined;
    };
    listMaxHeight: {
        type: StringConstructor;
        default: String | undefined;
    };
    lrcType: {
        type: PropType<2 | 1 | 3>;
        default: number | undefined;
    };
    audio: {
        type: (ObjectConstructor | ArrayConstructor)[];
        required: true;
    };
    storageName: {
        type: StringConstructor;
        default: string | undefined;
    };
    customAudioType: {
        type: PropType<Record<string, void>>;
        default: () => Record<string, void> | undefined;
    };
    customInit: {
        type: PropType<(player: any, src: APlayerOptions) => Promise<any>>;
        default: () => Record<string, void> | undefined;
    };
}, () => VNode, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    fixed: {
        type: BooleanConstructor;
        default: boolean | undefined;
    };
    mini: {
        type: BooleanConstructor;
        default: boolean | undefined;
    };
    autoplay: {
        type: BooleanConstructor;
        default: boolean | undefined;
    };
    theme: {
        type: StringConstructor;
        default: string | undefined;
    };
    loop: {
        type: PropType<"all" | "none" | "one">;
        default: "all" | "none" | "one" | undefined;
    };
    order: {
        type: PropType<"list" | "random">;
        default: "list" | "random" | undefined;
    };
    preload: {
        type: PropType<"auto" | "none" | "metadata">;
        default: "auto" | "none" | "metadata" | undefined;
    };
    volume: {
        type: NumberConstructor;
        default: number | undefined;
    };
    mutex: {
        type: BooleanConstructor;
        default: boolean | undefined;
    };
    listFolded: {
        type: BooleanConstructor;
        default: boolean | undefined;
    };
    listMaxHeight: {
        type: StringConstructor;
        default: String | undefined;
    };
    lrcType: {
        type: PropType<2 | 1 | 3>;
        default: number | undefined;
    };
    audio: {
        type: (ObjectConstructor | ArrayConstructor)[];
        required: true;
    };
    storageName: {
        type: StringConstructor;
        default: string | undefined;
    };
    customAudioType: {
        type: PropType<Record<string, void>>;
        default: () => Record<string, void> | undefined;
    };
    customInit: {
        type: PropType<(player: any, src: APlayerOptions) => Promise<any>>;
        default: () => Record<string, void> | undefined;
    };
}>>, {
    fixed: boolean;
    order: "list" | "random";
    mini: boolean;
    autoplay: boolean;
    theme: string;
    loop: "all" | "none" | "one";
    preload: "auto" | "none" | "metadata";
    volume: number;
    mutex: boolean;
    listFolded: boolean;
    listMaxHeight: string;
    lrcType: 2 | 1 | 3;
    storageName: string;
    customAudioType: Record<string, void>;
    customInit: (player: any, src: APlayerOptions) => Promise<any>;
}, {}>;
export default _default;
