"use strict";

var assert = require('assert'); 
var Roman = require('./roman.js');
var Logger = require('./logger');
var sinon = require('sinon');

describe("Fizz Buzz Tests", function () {
    var logger;
    
    beforeEach(function (done) {
       logger = new Logger();
       done(); 
    });    
   
    it("", function(done) {
		logger.Write = function() { console.log("I am the fake logger.Write()")};
        checkResultAlgo(5 ,"V","Should be V")
        done();
    });

    it("", function(done) {
        var stub = sinon.stub(logger, 'Write');
        stub.returns(console.log("Inside a sinon hijacked logger.Write"));
        checkResultAlgo(9 ,"IX","Should be IX")
        done();
    });
    
    it("", function(done) {
        //var spy = sinon.spy(logger, 'Write');
	    //assert.equal(spy.callCount, 1, "Call count for a incorrect");
        checkResultAlgo(40 ,"XL","Should be XL")
        done();
    });
    
    it("", function(done) {
        checkResultAlgo(50 ,"L","Should be L")
        done();
    });
    
    it("", function(done) {
        checkResultAlgo(100 ,"C","Should be C")
        done();
    });
    
    it("", function(done) {
        checkResultAlgo(999 ,"CMXCIX","Should be CMXCIX")
        done();
    });
    

    it("", function(done) {
        checkResultAlgo(1000 ,"M","Algorithm attempt, should be M")
        done();
    });

    it("", function(done) {
        checkResultAlgo(922 ,"CMXXII","Algorithm attempt, should be CMXXII")
        done();
    });
    
    it("", function(done) {
        checkResultAlgo(1 ,"I","Algorithm attempt, should be I")
        done();
    });
    
    function checkResultAlgo(input,expected,testDescription){
        var roman = new Roman(logger);
        var result = roman.convertToRoman(input)
        console.log("The input was " + input + " The output was " + result);
        assert(result==expected,testDescription)
    }    
    
});