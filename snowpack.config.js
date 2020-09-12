const path = require('path')

module.exports = {
  extends: '@snowpack/app-scripts-lit-element',
  alias: {
    '@': path.join(__dirname, 'src')
  },
  plugins: [
    [
      '@snowpack/plugin-run-script',
      {
        cmd: "eslint 'src/**/*.{js,jsx,ts,tsx}'",
        watch: 'watch "$1" src'
      }
    ],
    [
      '@snowpack/plugin-run-script',
      {
        cmd: 'postcss src/css/styles.css > public/bundle.css',
        watch: 'watch "$1" src/css/styles.css',
        input: ['.css'],
        output: ['.css']
      }
    ]
  ]
}
