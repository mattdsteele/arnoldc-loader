var transpile = require('arnoldc.js/lib/Transpiler').transpile;
var loaderUtils = require('loader-utils');

module.exports = function(source) {
  this.cacheable();

  var fileName =  loaderUtils.getRemainingRequest(this);
  var mapping = transpile(source, fileName);
  var output = mapping.toStringWithSourceMap({ file: fileName });

  this.callback(null, output.code, output.map.toString());
};
