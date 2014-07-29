var bindings = require('bindings')

var modded = bindings
for (var key in bindings) {
  if (!bindings.hasOwnProperty(key)) continue

  modded[key] = bindings[key]
}
modded.getFileName = function(callingFile) {
  return __filename
}

module.exports = modded
