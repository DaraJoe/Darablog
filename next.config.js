const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  images: {
    domains: ["lh3.googleusercontent.com", "firebasestorage.googleapis.com"],
  },
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: '/api',
      },
    ];
  },
  async redirects() {
    return [
      {
        source: '/api/auth/callback/:path*',
        destination: '/api/auth/callback',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
