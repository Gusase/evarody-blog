import { defineConfig } from "astro/config";
import alpinejs from "@astrojs/alpinejs";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import remarkToc from "remark-toc";

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    mdx({
      syntaxHighlight: "prism",
      remarkPlugins: [remarkToc],
      gfm: true,
    }),
    alpinejs(),
  ],
  output: "server",
  adapter: vercel(),
});
