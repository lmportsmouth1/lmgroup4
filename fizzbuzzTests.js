"use strict";

var assert = require('assert'); 
var showOne = require('./FizzBuzz.js');

describe("Fizz Buzz Tests", function () {
    
    it("checkInput1", function(done) { 
        checkVal("1", 1); 
        done();
    });
    it("checkInput2", function(done) { 
        checkVal("2", 2); 
        done();
    });
    it("checkInput3", function(done) { 
        checkVal("Fizz", 3); 
        done();
    });
    it("checkInput4", function(done) { 
        checkVal("4", 4); 
        done();
    });
    
    it("checkInput5", function(done) { 
        checkVal("Buzz", 5); 
        done();
    });
        it("checkInput6", function(done) { 
        checkVal("Fizz", 6); 
        done();
    });
    
        it("checkInputMult15", function(done) { 
        checkVal("FizzBuzz", 15); 
        checkVal("FizzBuzz", 30);
        done();
    });
    
   it("checkInputMult3", function(done) { 
        checkVal("Fizz", 3);
        checkVal("Fizz", 6);
        checkVal("Fizz", 9);
        done();
    });
    
    function checkVal(expected, input) {
        var instanceOne = new showOne();
        var result = instanceOne.printMyInput(input);
        assert(expected === result, "Input: " + input + " Failed, result was " + result);
    }
    
});