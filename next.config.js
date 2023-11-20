/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "images.unsplash.com",
      },
      {
        hostname: "fakestoreapi.com",
      },
    ],
  },
};

module.exports = nextConfig;
