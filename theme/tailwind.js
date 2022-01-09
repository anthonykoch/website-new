const { colors } = require('./color')
const { fontFamily } = require('./typography')

exports.colors = colors
exports.fontFamily = fontFamily

// export const breakpoints = {
//   sm: em(360),
//   md: em(540),
//   lg: em(760),
//   xl: em(1024),
//   '2xl': em(1200),
//   '3xl': em(1400),
//   macbook16: em(1600),
// }
exports.spacing = {
  'nav-height': '60px',
  'nav-icon-width': '54px',
  'py-nav-link': '16px',
  'px-nav-link': '48px',
}

exports.height = {}

exports.zIndex = {
  'modal-content': 1000,
  'modal-overlay': 900,
}

exports.screens = {
  sm: '360px',
  md: '540px',
  lg: '760px',
  xl: '1024px',
  '2xl': '1200px',
  '3xl': '1400px',
  macbook16: '1600px',
}
