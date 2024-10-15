import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    mainFields: [],
  },
  alias: {
    'axios': 'axios/dist/browser/axios.cjs'
  }
});
