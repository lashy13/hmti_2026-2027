import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],

  base: "/hmti_2026-2027/",

  server: {
    host: "127.0.0.1",
    port: 5174,
  },
});