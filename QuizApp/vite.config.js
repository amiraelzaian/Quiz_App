import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    host: true, // يسمع على كل الـ IPs المحلية
    port: 5173, // تقدر تغيّري البورت لو تحبي
  },
});
