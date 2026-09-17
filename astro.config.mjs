// @ts-check
import { defineConfig, fontProviders } from "astro/config";

import alpinejs from '@astrojs/alpinejs';

// https://astro.build/config
export default defineConfig({
  site: "https://gorillamade.nl",
  integrations: [alpinejs()],
  fonts: [
    {
        name: "Anybody",
        cssVariable: "--font-anybody",
        provider: fontProviders.google(),
        weights: ["100 900"],
        styles: ["normal"],
        subsets: ["latin"],
    },
    {
        name: "Geist",
        cssVariable: "--font-geist",
        provider: fontProviders.google(),
        weights: ["100 900"],
        styles: ["normal"],
        subsets: ["latin"],
    },
  ],
});
