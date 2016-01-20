
var jsdates = require('../lib/jsdates');

exports['date to string'] = function (test) {
    var date = jsdates.date(2016,1,18);
    
    var result = date.toString();
    
    test.ok(result);
    test.equal(typeof result, 'string');
    test.equal(result, "20160118");
};


exports['date to string with simple format'] = function (test) {
    var date = jsdates.date(2016,1,18);
    
    var result = date.toString({ format: true });
    
    test.ok(result);
    test.equal(typeof result, 'string');
    test.equal(result, "2016-01-18");
};

exports['datetime to string'] = function (test) {
    var date = jsdates.datetime(2016,1,18, 22, 4, 50);
    
    var result = date.toString();
    
    test.ok(result);
    test.equal(typeof result, 'string');
    test.equal(result, "20160118 220450");
};

exports['datetime to string with simple format'] = function (test) {
    var date = jsdates.datetime(2016,1,18, 22, 4, 50);
    
    var result = date.toString({ format: true });
    
    test.ok(result);
    test.equal(typeof result, 'string');
    test.equal(result, "2016-01-18 22:04:50");
};

