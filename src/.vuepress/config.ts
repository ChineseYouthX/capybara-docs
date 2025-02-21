import { defineUserConfig } from "vuepress";
import { getDirname, path } from "vuepress/utils";

import theme from "./theme.js";

const __dirname = getDirname(import.meta.url);

export default defineUserConfig({
  base: "/",
  port: 9997,
  lang: "zh-CN",
  title: "",
  description: "",

  theme,

  clientConfigFile: path.resolve(__dirname, "./client.ts"),

  alias: {
    "@theme-hope/modules/blog/components/BlogHero": path.resolve(
      __dirname,
      "./components/BlogHero.vue",
    ),
  },
  // 和 PWA 一起启用
  // shouldPrefetch: false,
  
});
