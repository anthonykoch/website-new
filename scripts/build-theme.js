const fs = require('fs')
const path = require('path')
const resolveConfig = require('tailwindcss/resolveConfig')

const outputName = '../styles/theme.ts'
const outputPath = path.join(__dirname, outputName)

const build = async () => {
  const tailwindConfig = await import('../tailwind.config.js')

  const { theme: tailwindTheme } = resolveConfig(tailwindConfig)

  const theme = {
    screens: tailwindTheme.screens,
    colors: tailwindTheme.colors,
  }

  const content = `
  const theme = ${JSON.stringify(theme, null, 2)}
  export default theme
  export type Theme = typeof theme
  `

  fs.writeFileSync(outputPath, content)
  console.log('Theme written to', outputName)
}

build()
