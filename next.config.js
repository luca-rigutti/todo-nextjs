/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    image: {
      unoptimized: true
    }
  }
}


module.exports = nextConfig
