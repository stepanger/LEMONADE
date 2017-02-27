;var LEMONADE = (function(){
    
    console.log("LEMONADE.js");
    
    "use strict";
    
    /**
     * Проверка на число
     * Валидация числа на придмет не валидных значений
     * @param {number} NumberVerification, проверяемое число
     * @return {number} 123
    */
    function _validation_of(NumberVerification){
        
        NumberVerification = NumberVerification || false;
        
        var NumberVerification = +NumberVerification,
            NumberOfChecks = [
        
            (!isNaN(parseFloat( NumberVerification )) && isFinite( NumberVerification )) ? NumberVerification : "RESET", //проверка на число
            (typeof NumberVerification === "number") ? NumberVerification : 'RESET', //проверка на тип данных
            (NumberVerification < 143000000000)      ? NumberVerification : 'RESET', //превышает ли значение
            (NumberVerification >= 0)                ? NumberVerification : 'RESET', //меньше ли нуля
        
        ];
        
        if(NumberOfChecks.indexOf("RESET") !== -1){
            console.error("False number Неверное значение");
            return false
        }
        
        var EndNumberVerification = String(NumberVerification).split('.')[0];
    
        return +EndNumberVerification
        
    };
    
    function _сonverter_of_a_thousand(NumberSolve){
        NumberSolve = NumberSolve || 0;
        
        var DecisionТo = NumberSolve 
        
        return NumberSolve
    }
    
    return {
        /**
         * Формат числа 
         * Выводит отформатированное число с деление на 1000
         * @param {number} Number, число которое стоит отформатировать
         * @param {boolean} Types, тип выводимого числа (number = true, string = false)
         * @param {string} Display, текст после числа 
         * @return "123 string", 
                   "123 K", 
                    123, 
                    [123, "string"]
        */
        "convert_ka_format": function(Number, Types, Display){
            
            
            
            return _сonverter_of_a_thousand(Number)
        }
    }
    
}());


