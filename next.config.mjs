/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'img.antaranews.com',
      },
      {
        protocol: 'https',
        hostname: 'bogor-kita.com',
      },
    ],
  },
};

export default nextConfig;
