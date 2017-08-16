function Roman(logger) {
   this.logger=logger;
}

// Arabic number to Roman numeral algorithm.
// Given a number, keep picking off increasingly
// smaller chunks of Roman numbers and smashing them into
// the end of the resulting answer.
Roman.prototype.convertToRoman = function (number) {
  var whatsLeftToCalculate=number;
  var romanNumeralBuilder="";
  var currentIndex=0;
  var romanPatterns = [ {1000:'M'}, {900:'CM'}, {500:'D'}, {400:'CD'}, {100:'C'}, {90:'XC'}, {50:'L'}, {40:'XL'}, {10:'X'}, {9:'IX'}, {5:'V'}, {4:'IV'}, {1:'I'} ];
  while(whatsLeftToCalculate > 0){
      for(currentIndex in romanPatterns){
          var currentArabicValue=Object.keys(romanPatterns[currentIndex]);
          var currentArabicValueAsRoman=romanPatterns[currentIndex][currentArabicValue];
          while(whatsLeftToCalculate >= currentArabicValue){
              romanNumeralBuilder=romanNumeralBuilder + currentArabicValueAsRoman;
              whatsLeftToCalculate=whatsLeftToCalculate - currentArabicValue;
          }
      }
  }
  return romanNumeralBuilder;
}

module.exports = Roman;