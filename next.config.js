// eslint-disable-next-line
const path = require('path')

/* @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  webpack(config, { dev, isServer }) {
    Object.assign(config.resolve.alias, {
      '@/components': path.join(__dirname, 'components'),
      '@/images': path.join(__dirname, 'images'),
      '@/hooks': path.join(__dirname, 'hooks'),
      '@/pages': path.join(__dirname, 'pages'),
    })

    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            prettier: false,
            svgo: true,
            typescript: true,
            svgoConfig: {
              plugins: [
                {
                  name: 'removeViewBox',
                  active: false,
                },
              ],
            },
            titleProp: true,
          },
        },
        {
          loader: path.join(
            __dirname,
            'node_modules/next/dist/build/webpack/loaders/next-image-loader.js',
          ),
          options: {
            isServer: isServer,
            isDev: dev,
            basePath: '',
            assetPrefix: '',
          },
        },
      ],
    })

    return config
  },
}

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

module.exports = withBundleAnalyzer(config)
