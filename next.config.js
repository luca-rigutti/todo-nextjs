/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    image: {
      unoptimized: true
    }
  },
  basePath:'/',
  assetPrefix:'/'
}


module.exports = nextConfig
