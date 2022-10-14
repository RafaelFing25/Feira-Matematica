/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains:[
      "www.matematica.pt",
      "encrypted-tbn0.gstatic.com",
      "s3.static.brasilescola.uol.com.br"
    ]
  }
}

module.exports = nextConfig
