import { defineConfig } from "vite";
import { vitePlugin as kottster } from "@kottster/react";
import react from "@vitejs/plugin-react";

export default defineConfig({
  root: "./app",
  server: {
    // Use the PORT environment variable to set the port in production
    port: Number(process.env.PORT),
    open: false,
  },
  build: {
    outDir: "../dist/client",
    emptyOutDir: true,
    chunkSizeWarningLimit: 1000,
  },
  plugins: [kottster(), react()],
  resolve: {
    alias: {
      "@": "/app",
    },
  },
});
