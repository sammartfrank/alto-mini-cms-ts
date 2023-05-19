// @ts-check

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.unsplash.com'],
    deviceSizes: [320, 420, 768, 1024, 1200],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    loader: 'default',
    path: '/_next/image',
    minimumCacheTTL: 60,
    formats: ['image/webp', 'image/avif'],
  },
};

module.exports = nextConfig;
