/*
START LEMONADE.validation_of()
*/
;var LEMONADE = (function (myModel) {
    console.log("LEMONADE.js ==> validation_of");
    
    "use strict";
    
    /**
     * Проверка на число
     * Валидация числа на придмет не валидных значений
     * @param {number} NumberVerification, проверяемое число
     * @return {number} 123
    */
    
    myModel.validation_of = function (NumberVerification){
        
        NumberVerification = NumberVerification || false;
        

        var NumberOfChecks = [
        
            (!isNaN(parseFloat( NumberVerification )) && isFinite( NumberVerification )) ? NumberVerification : "RESET", //проверка на число
            (typeof NumberVerification === "number") ? NumberVerification : 'RESET', //проверка на тип данных
            (NumberVerification < 143000000000)      ? NumberVerification : 'RESET', //превышает ли значение
            (NumberVerification >= 0)                ? NumberVerification : 'RESET', //меньше ли нуля
        
        ];
        
        if(NumberOfChecks.indexOf("RESET") !== -1){
            console.error("False number Неверное значение");
            return false;
        }
        
        var EndNumberVerification = String(NumberVerification).split('.')[0];
    
        return +EndNumberVerification;
        
    };
    
    return myModel;
    
}(LEMONADE || {}));
/*
==>END
*/