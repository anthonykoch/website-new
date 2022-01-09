// eslint-disable-next-line
const path = require('path')

/* @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  webpack(config) {
    Object.assign(config.resolve.alias, {
      '@/components': path.join(__dirname, 'components'),
      '@/images': path.join(__dirname, 'images'),
      '@/hooks': path.join(__dirname, 'hooks'),
      '@/pages': path.join(__dirname, 'pages'),
    })
    return config
  },
}

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

module.exports = withBundleAnalyzer(config)
