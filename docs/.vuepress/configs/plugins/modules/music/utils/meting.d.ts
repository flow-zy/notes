import { Audio } from "aplayer/dist/APlayer.min.js";
import { MetingOptions, APlayerComponentsOptions } from "../export.js";
export declare const GetAudioList: (meting: MetingOptions & APlayerComponentsOptions) => Promise<Audio[]>;
