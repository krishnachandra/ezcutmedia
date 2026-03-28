import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Serve modern formats for massive compression gains
    formats: ['image/avif', 'image/webp'],
    // Only generate sizes actually used in the app
    deviceSizes: [640, 750, 828, 1080, 1200],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    // Minimize quality for decorative/background images while keeping clarity
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30 days
  },
};

export default nextConfig;
