import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    outDir: "build",
    rollupOptions: {
      input: {
        index: resolve(__dirname, "index.html"),
        offline: resolve(__dirname, "pages/offline/index.html"),
      },
    },
  },
});
