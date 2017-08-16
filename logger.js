function Logger() {
}

Logger.prototype.Write = function (toBeOutput) {
 console.log("Inside the REAL logger.Write()");
 console.log(toBeOutput);

};

module.exports = Logger;