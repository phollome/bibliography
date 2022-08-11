import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  projectRoot: ".",
  astroRoot: "./src",
  dist: "./dist",
  public: "./public",
  extensions: {
    ".jsx": "react",
  },
  buildOptions: {
    site: "https://melodious-gingersnap-70781e.netlify.app",
    sitemap: true,
  },
  devOptions: {
    port: 3000,
    tailwindConfig: undefined,
  },
});
