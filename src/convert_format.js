/*
START LEMONADE.convert_format()
*/
;var LEMONADE = (function (myModel) {
    console.log("LEMONADE.js ==> convert_format");
    
    "use strict";
    /**
     * Формат числа 
     * Выводит отформатированное число с деление на формат
     * @param {number} Number, число которое стоит отформатировать
     * @param {boolean} Types, тип выводимого числа (number = true, string = false)
     * @param {string} Display, текст после числа 
     * @return "123 string", 
               "123 K", 
                123, 
                [123, "string"]
    */
    
    myModel.convert_format = function(Number, Types, Display){
        
        return LEMONADE.сonverter_of_a_thousand(Number, Display);
    }
    
    return myModel;
    
}(LEMONADE || {}));
/*
==>END
*/