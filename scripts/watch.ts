import path from 'path'
import chokidar from 'chokidar'
import execa = require('execa')

const file = path.join(__dirname, './build-theme.js')

console.log('Building theme and watching for changes.')

const exec = () => {
  execa.sync('node', [file], {
    stdio: 'inherit',
  })
}

exec()

chokidar.watch('theme/**/*.ts').on('change', (path) => {
  console.log(`watch: ${path} has changed, building...`)
  exec()
})
