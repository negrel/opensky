const purgecss = require('@fullhuman/postcss-purgecss')

module.exports = {
  plugins: [
    require('postcss-import'),
    require('tailwindcss'),
    require('autoprefixer'),
    ...process.env.NODE_ENV === 'production' ? [
      require('cssnano'),
      purgecss({
        content: ['src/**/*.js']
      })
    ] : []
  ]
}
