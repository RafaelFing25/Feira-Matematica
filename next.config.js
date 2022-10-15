/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains:[
      "imageprovider.herokuapp.com"
      
    ]
  }
}

module.exports = nextConfig
