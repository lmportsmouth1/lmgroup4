"use strict";

var assert = require('assert'); 
var Roman = require('./roman.js');

describe("Fizz Buzz Tests", function () {
    
   
    it("", function(done) {
        checkResult(1 ,"I","Should be I")
        done();
    });
    
    
    it("", function(done) {
        checkResult(5 ,"V","Should be V")
        done();
    });
    
    
    it("", function(done) {
        checkResult(9 ,"IX","Should be IX")
        done();
    });
    
    it("", function(done) {
        checkResult(40 ,"XL","Should be XL")
        done();
    });
    
    function checkResult(input,expected,testDescription){
        var result = new Roman().convertToRoman(input)
        console.log("The input was " + input + " The output was " + result);
        assert(result==expected,testDescription)
    }
});