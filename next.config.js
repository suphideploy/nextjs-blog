/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
   images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'nextjs-blog.local',
        port: '',
        pathname: '/**',
      }
    ]
   }
}

module.exports = nextConfig
