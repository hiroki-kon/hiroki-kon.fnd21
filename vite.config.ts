import path from "path";
import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";

export default defineConfig({
  base: process.env.GITHUB_PAGES
    ? "hiroki-kon.fnd21" // レポジトリ名を設定
    : "/",
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    outDir: 'docs',
    assetsDir: '',
  }
});
