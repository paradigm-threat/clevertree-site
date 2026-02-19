/** @type {import('next').NextConfig} */
const nextConfig = {
  // Config options here
  images: {
    localPatterns: [
      {
        pathname: '/**',
      },
    ],
  },
}

module.exports = nextConfig
