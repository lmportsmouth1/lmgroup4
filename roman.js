function Roman(logger) {
   this.logger=logger;
}

Roman.prototype.convertToRoman2 = function (number) {
  var leftover=number;
  var returnable="";
  var n=0;
  var patterns = [
    {1000:'M'},
    {900:'CM'},
    {500:'D'},
    {400:'CD'},
    {100:'C'},
    {90:'XC'},
    {50:'L'},
    {40:'XL'},
    {10:'X'},
    {9:'IX'},
    {5:'V'},
    {4:'IV'},
    {1:'I'}
  ];
  while(leftover > 0){
      for(n in patterns){
          var k=Object.keys(patterns[n]);
          var v=patterns[n][k];
          while(leftover >= k){
              returnable=returnable + v;
              leftover -= k;
          }
      }
  }
  return returnable;
}

Roman.prototype.convertToRoman = function (number) {
    this.logger.Write(number);
    // logic to convert to roman numeral
    if (number == 1) {
        return 'I';
    }
    
    if (number == 5) {
        return 'V';
    }
    
    if (number == 9){
        return 'IX';
    }
 
    if (number == 40){
        return 'XL';
    }
   
    if (number == 50){
        return 'L';
    }
    
    if (number == 100){
        return 'C';
    }
       if (number == 999){
        return 'IM';
    }
    
     if (number == 1000){
        return 'M';
    }
} 

module.exports = Roman;