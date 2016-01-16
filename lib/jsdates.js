
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
    
    return {
        today: today,
        now: now
    }
})();

if (typeof module !== 'undefined' && typeof module.exports !== 'undefined')
    module.exports = jsdates;
    
