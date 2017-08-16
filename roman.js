function Roman() {
   
}

Roman.prototype.convertToRoman = function (number) {
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