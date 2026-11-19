// TESTING NOTIFICATIONS
module.exports = {
  plugins: [
    require('autoprefixer'),
    require('postcss-rtlcss')({
      autoRename: true,
      autoSource: true,
      forceEncore: true
    })
  ]
}
