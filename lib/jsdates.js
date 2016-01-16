
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
            return 0;
        }
        
        this.minutes = function () {
            return 0;
        }
        
        this.seconds = function () {
            return 0;
        }
        
        this.toDate = function () {
            if (isday)
                return new Date(date.getFullYear(), date.getMonth(), date.getDate(), 0, 0, 0);
                
            return new Date(date.getFullYear(), date.getMonth(), date.getDate(), date.getHour(), date.getMinute(), date.getSecond());
        }
    }
    
    function today() {
        return new JSDate(new Date(), true);
    }
    
    return {
        today: today
    }
})();

if (typeof module !== 'undefined' && typeof module.exports !== 'undefined')
    module.exports = jsdates;
    
