var fs = require('fs');

exports.testIndexExists = function(test){
  test.expect(1);
  test.ok(fs.existsSync('source/index.html'), 'index.html exists');
  test.done();
};
