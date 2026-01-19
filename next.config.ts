import { withSentryConfig } from '@sentry/nextjs'
import type { NextConfig } from 'next'
// import createMDX from '@next/mdx'

let nextConfig: NextConfig = {
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],

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
    // disabled: true
    resolveAlias: {
      '@': __dirname,
    },
  },

  // experimental: {
  //   mdxRs: false,
  // },
}

nextConfig = withSentryConfig(nextConfig, {
  // For all available options, see:
  // https://www.npmjs.com/package/@sentry/webpack-plugin#options

  org: 'anthony-koch',

  project: 'portfolio',

  // Only print logs for uploading source maps in CI
  silent: !process.env.CI,

  // For all available options, see:
  // https://docs.sentry.io/platforms/javascript/guides/nextjs/manual-setup/

  // Upload a larger set of source maps for prettier stack traces (increases build time)
  widenClientFileUpload: true,

  // Uncomment to route browser requests to Sentry through a Next.js rewrite to circumvent ad-blockers.
  // This can increase your server load as well as your hosting bill.
  // Note: Check that the configured route will not match with your Next.js middleware, otherwise reporting of client-
  // side errors will fail.
  // tunnelRoute: "/monitoring",

  webpack: {
    // Enables automatic instrumentation of Vercel Cron Monitors. (Does not yet work with App Router route handlers.)
    // See the following for more information:
    // https://docs.sentry.io/product/crons/
    // https://vercel.com/docs/cron-jobs
    automaticVercelMonitors: true,

    // Tree-shaking options for reducing bundle size
    treeshake: {
      // Automatically tree-shake Sentry logger statements to reduce bundle size
      removeDebugLogging: true,
    },
  },
})

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

// const withBundleAnalyzer = require('@next/bundle-analyzer')({
//   enabled: process.env.ANALYZE === 'true',
// })

// module.exports = withSentryConfig(
//   withBundleAnalyzer(config),
//   sentryWebpackPluginOptions,
// )

// import rehypePrism from 'rehype-prism-plus'
// // import { RehypeCode } from './rehype-plugins/code'
// import rehypeAutolinkHeadings from 'rehype-autolink-headings'
// import rehypeSlug from 'rehype-slug'
// // import { markdownComponents } from '@/components/markdown-components'
// import remarkFrontmatter from 'remark-frontmatter'
// import remarkMdxFrontmatter from 'remark-mdx-frontmatter'
// import path from 'path'

// const withMDX = createMDX({
//   options: {
//     remarkPlugins: [
//       // ['remark-frontmatter']
//       // remarkFrontmatter
//     ],
//     rehypePlugins: [
//       // rehypeSlug,
//       // path.join(process.cwd(), './rehype-plugins/code.js'),
//       ['rehype-prism-plus', { showLineNumbers: true }],
//       // // @ts-ignore
//       'rehype-slug',
//       [
//         // @ts-ignore
//         'rehype-autolink-headings',
//         {
//           behavior: ['after'],
//         },
//       ],
//     ],
//   },
//   // Add markdown plugins here, as desired
// })

// Merge MDX config with Next.js config
export default nextConfig
// export default withMDX(nextConfig)
