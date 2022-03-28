/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  images: {
    formats: ['image/webp', 'image/avif'],
    domains: ['i.imgur.com'],
  },
  reactStrictMode: true,
};

module.exports = nextConfig;
