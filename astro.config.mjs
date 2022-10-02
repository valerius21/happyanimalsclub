import mdx from '@astrojs/mdx';
import preact from "@astrojs/preact";
import sitemap from '@astrojs/sitemap';
import tailwind from "@astrojs/tailwind";
import { defineConfig } from 'astro/config';
import image from "@astrojs/image";
import prefetch from "@astrojs/prefetch";

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  site: 'https://happyanimalsclub.org',
  integrations: [mdx(), sitemap(), tailwind(), preact(), image({
    serviceEntryPoint: '@astrojs/image/sharp'
  }), prefetch()],
  output: "server",
  adapter: vercel()
});