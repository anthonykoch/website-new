import type { NextConfig } from 'next'
import createMDX from '@next/mdx'

const nextConfig: NextConfig = {
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
  // eslint: {
  //   // Warning: This allows production builds to successfully complete even if
  //   // your project has ESLint errors.
  //   ignoreDuringBuilds: true,
  // },
  turbopack: {
    rules: {
      // '*.svg': {
      //   loaders: [
      //     {
      //       loader: '@svgr/webpack',
      //       options: {
      //         prettier: false,
      //         svgo: true,
      //         typescript: true,
      //         svgoConfig: {
      //           plugins: [
      //             {
      //               name: 'removeViewBox',
      //               active: false,
      //             },
      //           ],
      //         },
      //         titleProp: true,
      //       },
      //     },
      //   ],
      //   as: '*.js',
      // },
    },
    resolveAlias: {
      '@': __dirname,
    },
  },
}

// const withMDX = createMDX({
//   extension: /\.(md|mdx)$/,
// })

export default nextConfig
// export default withMDX(nextConfig)

// // eslint-disable-next-line
// const { withSentryConfig } = require('@sentry/nextjs')
// const path = require('path')

// const sentryWebpackPluginOptions = {
//   // Additional config options for the Sentry Webpack plugin. Keep in mind that
//   // the following options are set automatically, and overriding them is not
//   // recommended:
//   //   release, url, org, project, authToken, configFile, stripPrefix,
//   //   urlPrefix, include, ignore

//   silent: true, // Suppresses all logs
//   // For all available options, see:
//   // https://github.com/getsentry/sentry-webpack-plugin#options.
// }

// /* @type {import('next').NextConfig} */
// const config = {
//   resolveAlias: {
//     '@': __dirname,
//   },

//   // reactStrictMode: true,
//   // webpack(config, { dev, isServer }) {
//   //   Object.assign(config.resolve.alias, {
//   //     '@/': __dirname,
//   //   })

//   //   config.module.rules.push({
//   //     test: /\.svg$/i,
//   //     issuer: /\.[jt]sx?$/,
//   //     use: [
//   //       {
//   //         loader: '@svgr/webpack',
//   //         options: {
//   //           prettier: false,
//   //           svgo: true,
//   //           typescript: true,
//   //           svgoConfig: {
//   //             plugins: [
//   //               {
//   //                 name: 'removeViewBox',
//   //                 active: false,
//   //               },
//   //             ],
//   //           },
//   //           titleProp: true,
//   //         },
//   //       },
//   //       {
//   //         loader: path.join(
//   //           __dirname,
//   //           'node_modules/next/dist/build/webpack/loaders/next-image-loader.js',
//   //         ),
//   //         options: {
//   //           isServer: isServer,
//   //           isDev: dev,
//   //           basePath: '',
//   //           assetPrefix: '',
//   //         },
//   //       },
//   //     ],
//   //   })

//   //   return config
//   // },
// }

// const withBundleAnalyzer = require('@next/bundle-analyzer')({
//   enabled: process.env.ANALYZE === 'true',
// })

// module.exports = withSentryConfig(
//   withBundleAnalyzer(config),
//   sentryWebpackPluginOptions,
// )
