import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  experimental: {
    ppr: 'incremental' //allows us to adopt ppr for specific routes.
  }
};

export default nextConfig;
