import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import robotsTxt from "astro-robots-txt";
import cloudflare from "@astrojs/cloudflare";


// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), robotsTxt()],
  site: "https://www.oabadal.dev/",
  output: "hybrid",
  adapter: cloudflare()
});