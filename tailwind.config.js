// eslint-disable-next-line @typescript-eslint/no-var-requires
const { colors } = require('./theme/color')

const spacing = {
  'site-header-height': '500px',
  gutter: '20px',
  'nav-height': '60px',
  'nav-icon-width': '54px',
  'py-nav-link': '16px',
  'px-nav-link': '48px',
}

const backup = `-apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'`

const fontFamily = {
  display: `'rift-soft', ${backup}`,
  link: `'rift-soft', ${backup}`,
  heading: `'visby', ${backup}`,
  body: `'DM Sans', ${backup}`,
  // body: `'averta', ${backup}`,

  // body: `'proxima-nova', ${backup}`,
  code: `'Fira Mono', Consolas, Menlo, Monaco, 'Courier New', monospace`,
}

const maxWidth = {
  post: '720px',
  postWide: '820px',
  site: '1440px',
  common: '1232px',
}

const height = {}

const zIndex = {
  header: 800,
  'modal-content': 1000,
  'modal-overlay': 900,
}

const screens = {
  sm: '360px',
  md: '540px',
  lg: '760px',
  xl: '1024px',
  '2xl': '1200px',
  '3xl': '1400px',
  macbook16: '1600px',
}

exports.screens = screens

/**
 * @type {import('@types/tailwindcss/tailwind-config').TailwindConfig}
 */
module.exports = {
  darkMode: 'media',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './fragments/**/*.{js,ts,jsx,tsx}',
    './screens/**/*.{js,ts,jsx,tsx}',
    './posts/**/*.{md,mdx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      spacing,
      height,
      colors,
      zIndex,
      maxWidth,
      fontWeight: {
        100: 100,
        200: 200,
        300: 300,
        400: 400,
        500: 500,
        600: 600,
        700: 700,
        800: 800,
        900: 900,
      },
    },
    fontFamily,
    screens: screens,
  },
}
