var LEMONADE = (function (myModel) {
    console.log("LEMONADE.js ==> convert_format");
    
    "use strict";
    /**
     * Формат числа 
     * Выводит отформатированное число с деление на формат
     * @param {number} Number, число которое стоит отформатировать
     * @param {boolean} Types, тип выводимого числа (number = true, string = false)
     * @param {string} Display, текст после числа 
     * @return [12222.222, 12222.2, "Display"]
    */
    
    myModel.convertFormat = function(Number, Display){
        
        return LEMONADE.сonverterOfAThousand(Number, Display);
    }
    
    return myModel;
    
}(LEMONADE || {}));