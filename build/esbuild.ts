import { addHook } from 'yakumo'
import {} from 'yakumo-esbuild'

addHook('esbuild.before', (options, meta) => {
  if (meta.name !== 'koishi-plugin-eval') return
  if (options.entryPoints['worker/internal']) {
    options.banner = { js: '(function (host, exports, GLOBAL) {' }
    options.footer = { js: '})' }
  }
})
