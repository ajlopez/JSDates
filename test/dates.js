
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
    if (now.hours() === date.getHours())
        if (now.minutes() === date.getMinutes())
            test.ok(now.seconds() === date.getSeconds() || now.seconds() + 1 === date.getSeconds())
        else {
            test.ok(now.minutes() + 1 === date.getMinutes());
            test.equal(now.seconds(), 59);
            test.equal(date.getSeconds(), 0);
        }
    else {
        test.equal(now.hours() + 1, date.getHours());
        test.equal(now.minutes(), 59);
        test.equal(date.getMinutes(), 0)
    }
};

exports['now to date'] = function (test) {
    var now = jsdates.now().toDate();
    var date = new Date();
    
    test.ok(Math.abs(now.getTime() - date.getTime()) <= 1000);
};

exports['create date'] = function (test) {
    var date = jsdates.date(2016, 1, 12);
    var ndate = new Date(2016, 0, 12);
    
    test.equal(date.year(), ndate.getFullYear());
    test.equal(date.month(), ndate.getMonth() + 1);
    test.equal(date.day(), ndate.getDate());
    
    test.equal(date.hours(), 0);
    test.equal(date.minutes(), 0);
    test.equal(date.seconds(), 0);
};

exports['add day'] = function (test) {
    var date = jsdates.date(2016, 1, 12).addDays(1);
    var ndate = new Date(2016, 0, 13);
    
    test.equal(date.year(), ndate.getFullYear());
    test.equal(date.month(), ndate.getMonth() + 1);
    test.equal(date.day(), ndate.getDate());
    
    test.equal(date.hours(), 0);
    test.equal(date.minutes(), 0);
    test.equal(date.seconds(), 0);
};

exports['add days'] = function (test) {
    var date = jsdates.date(2016, 1, 12).addDays(2);
    var ndate = new Date(2016, 0, 14);
    
    test.equal(date.year(), ndate.getFullYear());
    test.equal(date.month(), ndate.getMonth() + 1);
    test.equal(date.day(), ndate.getDate());
    
    test.equal(date.hours(), 0);
    test.equal(date.minutes(), 0);
    test.equal(date.seconds(), 0);
};


