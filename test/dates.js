
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

exports['add month'] = function (test) {
    var date = jsdates.date(2016, 1, 12).addMonths(1);
    var ndate = new Date(2016, 1, 12);
    
    test.equal(date.year(), ndate.getFullYear());
    test.equal(date.month(), ndate.getMonth() + 1);
    test.equal(date.day(), ndate.getDate());
    
    test.equal(date.hours(), 0);
    test.equal(date.minutes(), 0);
    test.equal(date.seconds(), 0);
};

exports['add months'] = function (test) {
    var date = jsdates.date(2016, 1, 12).addMonths(2);
    var ndate = new Date(2016, 2, 12);
    
    test.equal(date.year(), ndate.getFullYear());
    test.equal(date.month(), ndate.getMonth() + 1);
    test.equal(date.day(), ndate.getDate());
    
    test.equal(date.hours(), 0);
    test.equal(date.minutes(), 0);
    test.equal(date.seconds(), 0);
};

exports['create datetime'] = function (test) {
    var date = jsdates.datetime(2016, 1, 12, 23, 50, 45);
    var ndate = new Date(2016, 0, 12, 23, 50, 45);
    
    test.equal(date.year(), ndate.getFullYear());
    test.equal(date.month(), ndate.getMonth() + 1);
    test.equal(date.day(), ndate.getDate());
    
    test.equal(date.hours(), ndate.getHours());
    test.equal(date.minutes(), ndate.getMinutes());
    test.equal(date.seconds(), ndate.getSeconds());
};

exports['use and create now'] = function (test) {
    var date = new Date();
    
    jsdates.set('now', date);
    
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

