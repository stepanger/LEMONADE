var LEMONADE = (function (myModel) {
    console.log("LEMONADE.js ==> сonverter_of_a_thousand");
    
    "use strict";
    
    /**
     * Формат числа 
     * Выводит отформатированное число с деление на формат
     * @param {number} Number, число которое стоит отформатировать
     * @param {boolean} Types, тип выводимого числа (number = true, string = false)
     * @param {string} Display, текст после числа 
     * @return [12222.222, 12222.2, "Display"]
    */
    
    myModel.convertFormat = function (num, dis) {
        
        return LEMONADE.сonverterOfAThousand(num, dis);
    };
    
    return myModel;
    
}(LEMONADE || {}));