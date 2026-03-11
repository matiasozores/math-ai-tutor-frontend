import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: false, // Reduce hydration warnings in development
  experimental: {
    optimizeCss: true
  }
};

export default nextConfig;
