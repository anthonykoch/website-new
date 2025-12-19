// TODO: For the love, sort out this mess
const colors = {
  transparent: 'rgba(0,0,0, 0)',
  // blue: 'hsl(210, 82%, 59%)',
  // green: 'hsl(160, 100%, 37%)',

  seafoam: {
    100: '#e4efeb',
    // 14E595
    300: '#1beaa4',
    500: '#14e595',
  },

  // Primary colors
  'overlay-bg': '#2b292b',

  // Background colors
  primary: {
    100: '#FDF7D4',
    200: '#FCEEAA',
    300: '#F8E07F',
    400: '#F1D05E',
    500: '#e8b92c',
    600: '#C79920',
    700: '#A77B16',
    800: '#865F0E',
    900: '#6F4A08',
  },
}

const spacing = {}

const backup = `-apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'`

const fontFamily = {
  display: `'rift-soft', ${backup}`,
  link: `'rift-soft', ${backup}`,
  heading: `'visby', ${backup}`,
  body: `'DM Sans', ${backup}`,
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
  lg: '720px',
  xl: '1024px',
  '2xl': '1200px',
  '3xl': '1400px',
  '4xl': '1600px',
  '5xl': '2000',
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
