
var jsdates = require('../lib/jsdates');

exports['create today'] = function (test) {
    var today = jsdates.today();
    
    test.ok(today);
    test.equal(typeof today, 'object');
    
    var date = new Date();
    
    test.equal(today.year(), date.getYear());
    test.equal(today.month(), date.getMonth() + 1);
    test.equal(today.day(), date.getDate());
    test.equal(today.hour(), 0);
    test.equal(today.minute(), 0);
    test.equal(today.second(), 0);
};



