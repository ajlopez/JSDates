
var jsdates = require('../lib/jsdates');

exports['create today'] = function (test) {
    var today = jsdates.today();
    
    test.ok(today);
    test.equal(typeof today, 'object');
    
    var date = new Date();
    
    test.equal(today.year(), date.getFullYear());
    test.equal(today.month(), date.getMonth() + 1);
    test.equal(today.day(), date.getDate());
    test.equal(today.hours(), 0);
    test.equal(today.minutes(), 0);
    test.equal(today.seconds(), 0);
};

exports['today to date'] = function (test) {
    var today = jsdates.today().toDate();
    
    test.ok(today);
    test.equal(typeof today, 'object');
    test.ok(today instanceof Date);
    
    var date = new Date();
    
    test.equal(today.getFullYear(), date.getFullYear());
    test.equal(today.getMonth(), date.getMonth());
    test.equal(today.getDate(), date.getDate());
    test.equal(today.getHours(), 0);
    test.equal(today.getMinutes(), 0);
    test.equal(today.getSeconds(), 0);
};

exports['create now'] = function (test) {
    var now = jsdates.now();
    
    test.ok(now);
    test.equal(typeof now, 'object');
    
    var date = new Date();
    
    test.equal(now.year(), date.getFullYear());
    test.equal(now.month(), date.getMonth() + 1);
    test.equal(now.day(), date.getDate());
    test.equal(now.hours(), date.getHours());
    test.equal(now.minutes(), date.getMinutes());
    test.equal(now.seconds(), date.getSeconds());
};
