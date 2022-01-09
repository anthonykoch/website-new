// eslint-disable-next-line @typescript-eslint/no-var-requires
const {
  zIndex,
  colors,
  fontFamily,
  screens,
  spacing,
  height,
} = require('./theme/tailwind')

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
    },
    fontFamily,
    screens: screens,
  },
}
