import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    serverSourceMaps: false,   // disable problematic tracing
    typedRoutes: false,        // also helps avoid the "outside project" error
  }
};

export default nextConfig;
