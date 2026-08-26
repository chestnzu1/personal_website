import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export: `next build` emits plain HTML/CSS/JS into `out/`,
  // which Cloudflare Pages serves directly — no Node server needed.
  output: "export",
};

export default nextConfig;
