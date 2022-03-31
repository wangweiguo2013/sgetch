import { createVuePlugin } from "vite-plugin-vue2";

import { defineConfig } from "vite";
import { viteCommonjs } from "@originjs/vite-plugin-commonjs";
import ScriptSetup from "unplugin-vue2-script-setup/vite";
import externalGlobals from 'rollup-plugin-external-globals';


//-------vuesax  Resolver------------

import path from "path";
export default defineConfig({
  // 配置别名
  resolve: {
    alias: [
      {
        find: /^~/,
        replacement: "",
      },
      {
        find: "@",
        replacement: path.resolve(__dirname, "src"),
      },
    ],
  },
  css: {
    preprocessorOptions: {},
  },

  plugins: [
    //参考： https://juejin.cn/post/6973928601523585055
    createVuePlugin({
      jsx: true,
      vueTemplateOptions: {
        compilerOptions: {
          whitespace: "condense",
        },
      },
    }),

    ScriptSetup({
      /* options */
    }),

    viteCommonjs(),

    externalGlobals({
      vue: "Vue",
    }),
  ],
});
