var bindings = require('bindings')

module.exports = function(opts) {
  if (typeof opts == 'string') {
    opts = { binding: opts }
  } else if (!opts) {
    opts = {}
  }

  opts.module_root = __dirname
  bindings(opts)
}
