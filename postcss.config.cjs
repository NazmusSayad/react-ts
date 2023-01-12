const isProdMode = process.env.NODE_ENV == 'production'
const postcssPresetEnv = require('postcss-preset-env')

const plugins = [require('tailwindcss')]

if (isProdMode) {
  plugins.push(
    postcssPresetEnv({
      stage: 0,
    })
  )
}

module.exports = { plugins }
