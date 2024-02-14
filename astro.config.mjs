import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import alpinejs from "@astrojs/alpinejs";

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), mdx(), alpinejs()],
  output: "server",
  adapter: vercel()
});