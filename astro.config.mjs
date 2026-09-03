// @ts-check
import { defineConfig, fontProviders } from "astro/config";
import alpinejs from "@astrojs/alpinejs";

// https://astro.build/config
export default defineConfig({
  site: "https://gorillamade.nl",
  integrations: [alpinejs()],
  vite: {
    build: {
      cssMinify: "esbuild",
    },
  },
  fonts: [
    {
      provider: fontProviders.google(),
      name: "Sora",
      cssVariable: "--ff-display",
      weights: [600, 700, 800],
      styles: ["normal"],
    },
    {
      provider: fontProviders.google(),
      name: "Plus Jakarta Sans",
      cssVariable: "--ff-body",
      weights: [400, 500, 600, 700, 800],
      styles: ["normal"],
    },
  ],
});
