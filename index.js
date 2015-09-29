var transpile = require('arnoldc.js/lib/Transpiler').transpile;

module.exports = function(source) {
  var mapping = transpile(source, 'file.js');
  var output = mapping.toStringWithSourceMap({ file: 'file.js' });
  return output.code;
};
