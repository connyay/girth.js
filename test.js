/*global require, describe, it*/
'use strict';

var should = require('should');
require('./index');

describe('Girth', function () {
    it('shirinks when spliced', function () {
        var arr = [1, 2, 3, 4, 5];

        arr = arr.splice(0);
        arr.girth.should.equal(5);

        arr = arr.splice(1);
        arr.girth.should.equal(4);
        arr[0].should.equal(2);
    });

    it('grows when concatenated', function () {
        var arr1 = [1, 2, 3, 4, 5],
            arr2 = [6, 7, 8],
            arr3 = arr1.concat(arr2),
            i = 0;

        arr1.should.exist;
        arr1.girth.should.equal(5);

        arr2.should.exist;
        arr2.girth.should.equal(3);

        arr3.girth.should.equal(8);
        for (i = 0; i < 8; i += 1) {
            arr3[i] = i;
        }
    });
});

