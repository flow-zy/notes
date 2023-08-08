import { defineClientConfig } from "@vuepress/client";
import CodeDemo from "I:/php/notes/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-beta.234_vuepress@2.0.0-beta.66/node_modules/vuepress-plugin-md-enhance/lib/client/components/CodeDemo.js";
import "I:/php/notes/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-beta.234_vuepress@2.0.0-beta.66/node_modules/vuepress-plugin-md-enhance/lib/client/styles/figure.scss";
import "I:/php/notes/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-beta.234_vuepress@2.0.0-beta.66/node_modules/vuepress-plugin-md-enhance/lib/client/styles/image-mark.scss"
import { defineAsyncComponent } from "vue";
import { injectVuePlaygroundConfig } from "I:/php/notes/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-beta.234_vuepress@2.0.0-beta.66/node_modules/vuepress-plugin-md-enhance/lib/client/index.js";

export default defineClientConfig({
  enhance: ({ app }) => {
    app.component("CodeDemo", CodeDemo);
    injectVuePlaygroundConfig(app);
    app.component("VuePlayground", defineAsyncComponent(() => import("I:/php/notes/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-beta.234_vuepress@2.0.0-beta.66/node_modules/vuepress-plugin-md-enhance/lib/client/components/VuePlayground.js")));
  },
  setup: () => {

  }
});
