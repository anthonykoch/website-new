// eslint-disable-next-line
const path = require('path')

/* @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  webpack(config, { dev, isServer }) {
    Object.assign(config.resolve.alias, {
      '@/': __dirname,
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

// const rehypePrism = require('@mapbox/rehype-prism')

// const withMDX = require('@next/mdx')({
//   extension: /\.mdx?$/,
//   options: {
//     rehypePlugins: [rehypePrism],
//     providerImportSource: '@mdx-js/react',
//   },
// })

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

module.exports = withBundleAnalyzer(config)
