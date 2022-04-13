// TODO: For the love, sort out this mess
const colors = {
  transparent: 'rgba(0,0,0, 0)',
  purple: 'hsl(280, 74%, 72%)',
  // blue: 'hsl(210, 82%, 59%)',
  // green: 'hsl(160, 100%, 37%)',
  copper: 'hsl(15, 84%, 55%)',

  link: '#6196cc',
  'link-hover': 'hsl(225, 34%, 40%)',
  seafoam: {
    100: '#e4efeb',
    // 14E595
    300: '#1beaa4',
    500: '#14e595',
  },
  // seafoam: '#5beebd',

  // Primary colors
  // primary: 'hsl(45, 80%, 54%)',
  // primary: '#e8b92c',
  // rgb(55 65 81 / var(--tw-text-opacity))
  // hsl(45deg 80% 54%)
  yellow1: '#F8CC4B',
  steel: '#bdbdbd',
  'steel-light': '#ebebeb',
  'header-foreground': '#ddd',
  'header-link-foreground': '',
  'overlay-bg': '#2b292b',
  'footer-bg': '#2b292b',
  'button-bg': '#f2eeed',
  'button-bg-hover': '#f2eeed',
  'button-color': '#827674',
  'button-color-hover': 'white',
  'accent-blue': '#6196cc',
  'badge-green': '#00bd7e',
  secondary: 'hsl(160, 100%, 37%)',
  'tag-bg': 'hsl(45deg 100% 76%)',
  'code-bg': '#e8debe',
  'tag-bg-dark': '#f2d26f',
  body: '#222',
  //  foregroundAlternate: '#bdbdbd'
  //  foregroundMeta: '#989b9e'
  //  foregroundMarkdown: '#292929'

  'code-inline': '#777671',

  // Background colors
  background: '#3a2f3a',
  'nav-bg': '#2b292b',
  'dark-bg': '#2b292b',
  'border-base-color': '#44413a',

  blue: {
    100: '#E1F4FC',
    200: '#C5E7F9',
    300: '#A4D1EF',
    400: '#88B8E0',
    500: '#6196CC',
    600: '#4675AF',
    700: '#305792',
    800: '#1E3D76',
    900: '#122A61',
  },
  green: {
    100: '#C9FBD7',
    200: '#95F8B9',
    300: '#5EEBA0',
    400: '#35D791',
    500: '#00bd7e',
    600: '#00A27C',
    700: '#008875',
    // #dbaf00
    800: '#006D69',
    900: '#00555A',
  },
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
  'light-yellow': {
    100: '#FFFBE6',
    200: '#FFF6CE',
    300: '#FFF0B5',
    400: '#FFEAA3',
    500: '#ffe085',
    600: '#DBB961',
    700: '#B79343',
    800: '#93702A',
    900: '#7A5719',
  },
  red: {
    100: '#FEECDB',
    200: '#FDD4B8',
    300: '#F9B593',
    400: '#F39677',
    500: '#ec684c',
    600: '#CA4637',
    700: '#A92926',
    800: '#88181E',
    900: '#710E1B',
  },
}

const spacing = {
  'site-header-height': 'var(--site-header-height)',
  gutter: '20px',
  'gutter-lg': '24px',
  'gutter-xl': '32px',
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
