import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  /*experimental: {
    appDir: true, // Ensure App Router is enabled
  },*/
  eslint: {
    ignoreDuringBuilds: true, // ⬅️ This will ignore ESLint errors during the build
  },
};

export default nextConfig;



