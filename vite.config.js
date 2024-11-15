import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  base: "/Arteterapia-Client/",
  build: {
    rollupOptions: {
      input: {
        main: "index.html",
        spa: "404.html",
      },
    },
  },
});
