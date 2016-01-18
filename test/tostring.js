
var jsdates = require('../lib/jsdates');

exports['date to string'] = function (test) {
    var date = jsdates.date(2016,1,18);
    
    var result = date.toString();
    
    test.ok(result);
    test.equal(typeof result, 'string');
    test.equal(result, "20160118");
};


exports['datetime to string'] = function (test) {
    var date = jsdates.datetime(2016,1,18, 22, 4, 50);
    
    var result = date.toString();
    
    test.ok(result);
    test.equal(typeof result, 'string');
    test.equal(result, "20160118 220450");
};