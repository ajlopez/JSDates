
"use strict"

var jsdates = (function() {
    var config = {};
    
    var Type = { Date: 1, DateTime: 2 };
    
    function JSDate(date, type) {
        this.year = function () {
            return date.getFullYear();
        }
        
        this.month = function () {
            return date.getMonth() + 1;
        }
        
        this.day = function () {
            return date.getDate();
        }
        
        this.hours = function () {
            if (type === Type.Date)
                return 0;
                
            return date.getHours();
        }
        
        this.minutes = function () {
            if (type === Type.Date)
                return 0;
                
            return date.getMinutes();
        }
        
        this.seconds = function () {
            if (type === Type.Date)
                return 0;
                
            return date.getSeconds();
        }
        
        this.addDays = function (days) {
            date.setDate(date.getDate() + days);
            return this;
        }
        
        this.addMonths = function (months) {
            date.setMonth(date.getMonth() + months);
            return this;
        }
        
        this.toDate = function () {
            if (type === Type.Date)
                return new Date(date.getFullYear(), date.getMonth(), date.getDate(), 0, 0, 0);
                
            return new Date(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds());
        }
        
        this.toString = function (options) {
            options = options || {};
            var text;
            
            if (options.format)
                text = format(this.year(), 4) + '-' + format(this.month(), 2) + '-' + format(this.day(), 2);
            else
                text = format(this.year(), 4) + format(this.month(), 2) + format(this.day(), 2);
            
            if (type === Type.DateTime)
                if (options.format)
                    text += ' ' + format(this.hours(), 2) + ':' + format(this.minutes(), 2) + ':' + format(this.seconds(), 2);
                else
                    text += ' ' + format(this.hours(), 2) + format(this.minutes(), 2) + format(this.seconds(), 2);

            return text;
        }
    }
    
    function today() {
        return new JSDate(config.now ? config.now : new Date(), Type.Date);
    }
    
    function now() {
        return new JSDate(config.now ? config.now : new Date(), Type.DateTime);
    }
    
    function date(year, month, day) {
        return new JSDate(new Date(year, month - 1, day, 0, 0, 0), Type.Date);
    }
    
    function datetime(year, month, day, hours, minutes, seconds) {
        return new JSDate(new Date(year, month - 1, day, hours, minutes, seconds), Type.DateTime);
    }
    
    function set(name, value) {
        config[name] = value;
    }
    
    function format(n, l) {
        n = n.toString();
        
        while (n.length < l)
            n = "0" + n;
        
        return n;
    }
    
    return {
        today: today,
        now: now,
        date: date,
        datetime: datetime,
        set: set
    }
})();

if (typeof module !== 'undefined' && typeof module.exports !== 'undefined')
    module.exports = jsdates;
    
