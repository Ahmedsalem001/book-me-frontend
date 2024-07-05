/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'additional-aurie-demo-project-book-me-f546ac8a.koyeb.app',
        port: '',
        pathname: '/uploads/**',
      },
    ],
  },
};

export default nextConfig;
