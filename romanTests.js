"use strict";

var assert = require('assert'); 
var Roman = require('./roman.js');

describe("Fizz Buzz Tests", function () {
    
    it("", function(done) { 
        var converted = new Roman().convertToRoman(1);
        assert(converted=='I', "To be implemented");//learning here
        done();
    });
    
    it("", function(done) { 
        var converted = new Roman().convertToRoman(5);
        assert(converted=='V', "To be implemented");//learning here
        done();
    });
    
    it("", function(done) { 
        var converted = new Roman().convertToRoman(9);
        assert(converted=='IX', "To be implemented");//learning here
        done();
    });
    
    it("", function(done) {
        checkResult(40 ,"XL","Should be XL")
        done();
    });
    function checkResult(input,expected,testDescription){
        console.log("The input was " + input);
        assert(new Roman().convertToRoman(input)==expected,testDescription)
    }
});