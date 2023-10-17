import { path } from "@vuepress/utils";
import { deepmerge } from "deepmerge-ts";
import { MetingPluginsOptionsDefault } from "./export.js";

const MetingPlugins = (options) => {
    options = deepmerge(MetingPluginsOptionsDefault, options);
    return (_app) => {
        return {
            name: "vuepress-plugin-meting2",
            define: {
                METING_PLUGIN_OPTIONS: options,
            },
            multiple: false,
            clientConfigFile: path.resolve(__dirname, "./client/"),
        };
    };
};
export default MetingPlugins;
