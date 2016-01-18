
var jsdates = require('../lib/jsdates');

exports['to string'] = function (test) {
    var date = jsdates.date(2016,1,18);
    
    var result = date.toString();
    
    test.ok(result);
    test.equal(typeof result, 'string');
    test.equal(result, "20160118");
};