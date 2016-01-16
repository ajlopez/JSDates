
"use strict"

var jsdates = (function() {
    function JSDate(date, isday) {
        this.year = function () {
            return date.getYear();
        }
        
        this.month = function () {
            return date.getMonth() + 1;
        }
        
        this.day = function () {
            return date.getDate();
        }
        
        this.hour = function () {
            return 0;
        }
        
        this.minute = function () {
            return 0;
        }
        
        this.second = function () {
            return 0;
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
    
