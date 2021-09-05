'use strict'
const path = require('path')

function resolve (dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  context: path.resolve(__dirname, './'),
  resolve: {
    alias: {
      '@': resolve('src/renderer'),
      '~': resolve('src'),
      'root': resolve('./'),
      '#': resolve('src/universal'),
      'apis': resolve('src/main/apis'),
      '@core': resolve('src/main/apis/core')
    }
  }
}
