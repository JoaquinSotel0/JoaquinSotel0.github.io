import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// A user-site repository is served at the domain root.
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: "/",
});
