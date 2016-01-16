
"use strict"

var jsdates = (function() {
    function JSDate(date, isday) {
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
            if (isday)
                return 0;
                
            return date.getHours();
        }
        
        this.minutes = function () {
            if (isday)
                return 0;
                
            return date.getMinutes();
        }
        
        this.seconds = function () {
            if (isday)
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
            if (isday)
                return new Date(date.getFullYear(), date.getMonth(), date.getDate(), 0, 0, 0);
                
            return new Date(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds());
        }
    }
    
    function today() {
        return new JSDate(new Date(), true);
    }
    
    function now() {
        return new JSDate(new Date(), false);
    }
    
    function date(year, month, day) {
        return new JSDate(new Date(year, month - 1, day, 0, 0, 0), true);
    }
    
    return {
        today: today,
        now: now,
        date: date
    }
})();

if (typeof module !== 'undefined' && typeof module.exports !== 'undefined')
    module.exports = jsdates;
    
