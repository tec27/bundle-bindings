var bindings = require('bindings')

module.exports = function(opts) {
  if (typeof opts == 'string') {
    opts = { bindings: opts }
  } else if (!opts) {
    opts = {}
  }

  opts.module_root = __dirname
  bindings(opts)
}
