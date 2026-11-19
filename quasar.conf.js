const { configure } = require('@quasar/app')
const path = require('path')

module.exports = function (ctx) {
  return configure(function (conf) {
    conf.boot = [
      'firebase'
    ]

    conf.css = [
      'app.sass'
    ]

    conf.extras = [
      'roboto-font',
      'material-icons'
    ]

    conf.framework = {
      config: {},
      plugins: [
        'Dark',
        'LocalStorage',
        'SessionStorage'
      ]
    }

    conf.build = {
      vueRouterMode: 'hash',
      vueDevtools: true,
      publicPath: '/'
    }

    conf.devServer = {
      https: false,
      port: 8080,
      open: true
    }

    if (ctx.mode.electron) {
      conf.electron = {
        preloadScripts: 'src-electron/preload.ts',
        inspector: true,
        nodeIntegration: true,
        extendElectronMainConf (eaditConf) {
        },
        extendElectronPreloadConf (eaditConf) {
        }
      }
    }

    if (ctx.mode.cordova) {
      conf.cordova = {
        // leave the following line in place.
        // it uses ctx, so don't move it into the object above
        id: ctx.appPkg.cordovaId
      }
    }

    if (ctx.mode.capacitor) {
      conf.capacitor = {
        // leave the following line in place.
        // it uses ctx, so don't move it into the object above
        hideSplashscreen: true
      }
    }

    if (ctx.prod) {
      // configuration for production mode
      conf.build.minify = 'terser'
      conf.build.publicPath = '/'
    }

    if (ctx.dev) {
      // configuration for development mode
      conf.build.vueDevtools = true
    }
  })
}
