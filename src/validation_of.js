;var LEMONADE = (function (myModel) {
    console.log("LEMONADE.js ==> validation_of");
    
    "use strict";
    
    var mass_NumberVerification = []    //массив с каждой подстрокой чисел
      , finished_number                 //проверенное число
      , bollean_of_a_number;            //boolean для проверки в {every}
    
    /**
     * Проверка на число (validation_of)
     * Валидация числа на придмет не валидных значений
     * @param {number} string_of_a_number, проверяемое число
     * @return {number} 123
    */
    
    myModel.validation_of = function (string_of_a_number){
        
        string_of_a_number = string_of_a_number || "";
        mass_NumberVerification = string_of_a_number.split("");
        
        if(!mass_NumberVerification.length){
            return 0 //false
        };
        
        bollean_of_a_number = mass_NumberVerification.every(function(number){
            return number >= 0 
        });
        
        if(!bollean_of_a_number){
            return 0 //false
        };
        
        finished_number = +(mass_NumberVerification.join(''));
        finished_number = (finished_number <= 143000000000) ? finished_number : 0 
        
        return finished_number;
        
    };
    
    return myModel;
    
}(LEMONADE || {}));