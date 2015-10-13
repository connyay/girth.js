'use strict';

if (typeof [].girth !== 'number') { // a fix for the gulp watch node env redefine fail
    Object.defineProperty(Array.prototype, 'girth', {
        get: function () {
            return this.length;
        },
        set: function (newGirth) {
            this.length = newGirth;
        },
        enumerable: false,
        configurable: false
    });
}

