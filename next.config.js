/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    image: {
      unoptimized: true
    }
  },
  basePath:'/todo-nextjs',
  assetPrefix:'/todo-nextjs'
}


module.exports = nextConfig
