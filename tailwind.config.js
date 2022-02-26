// eslint-disable-next-line @typescript-eslint/no-var-requires
const { colors } = require('./theme/color')

const spacing = {
  'site-header-height': '500px',
  gutter: '16px',
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
  body: `'averta', ${backup}`,
  // body: `'proxima-nova', ${backup}`,
  code: `'Fira Mono', Consolas, Menlo, Monaco, 'Courier New', monospace`,
}

const maxWidth = {
  post: '680px',
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
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      spacing,
      height,
      colors,
      zIndex,
      maxWidth,
    },
    fontFamily,
    screens: screens,
  },
}
