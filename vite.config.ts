import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { readdirSync, readFileSync } from "fs";
import matter from "gray-matter";
const postsData = {}
const posts = readdirSync("./posts").map((file) => {
  const raw = readFileSync(`./posts/${file}`, "utf8");
  const data = {};
  const md = matter(raw)
  postsData[file.replace(/\.md$/, "")] = { content: md.content, ...md.data }
  return data;
});

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  base: `/portfolio-site/`,
  server: {
    host: "::",
    port: 8080,
  },
  define: {
    __POSTS__: JSON.stringify(postsData)
  },
  plugins: [
    react()
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
