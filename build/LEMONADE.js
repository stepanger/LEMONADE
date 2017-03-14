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
/*
START LEMONADE.transliteration_text()
*/
;var LEMONADE = (function (myModel) {
    console.log("LEMONADE.js ==> transliteration_text");
    
    "use strict";
    
    var regExp = /[\/\|\:\?\*&<>"'\/А-ЯЁа-яё]/g
      , translite = {
            "'" : '&#39;',
            '&' : "&amp;",
            '<' : "&lt;",
            '>' : "&gt;",
            '"' : '&quot;',
            '/' : '&#x2F;',
            ':' : '&#133;',
            '|' : '&#124;', 
            '?' : '&#063;',
            '*' : '&#042;',
            "А" : "A",
            "Б" : "B",
            "В" : "V",
            "Г" : "G",
            "Д" : "D",
            "Е" : "E",
            "Ё" : "YO",
            "Ж" : "ZH",
            "З" : "Z",
            "И" : "I",
            "Й" : "J",
            "К" : "K",
            "Л" : "L",
            "М" : "M",
            "Н" : "N",
            "О" : "O",
            "П" : "P",
            "Р" : "R",
            "С" : "S",
            "Т" : "T",
            "У" : "U",
            "Ф" : "F",
            "Х" : "H",
            "Ц" : "C",
            "Ч" : "CH",
            "Ш" : "SH",
            "Щ" : "SHH",
            "Ъ" : "",
            "Ы" : "Y",
            "Ь" : "",
            "Э" : "E",
            "Ю" : "YU",
            "Я" : "YA",
            "а" : "a",
            "б" : "b",
            "в" : "v",
            "г" : "g",
            "д" : "d",
            "е" : "e",
            "ё" : "yo",
            "ж" : "zh",
            "з" : "z",
            "и" : "i",
            "й" : "j",
            "к" : "k",
            "л" : "l",
            "м" : "m",
            "н" : "n",
            "о" : "o",
            "п" : "p",
            "р" : "r",
            "с" : "s",
            "т" : "t",
            "у" : "u",
            "ф" : "f",
            "х" : "h",
            "ц" : "c",
            "ч" : "ch",
            "ш" : "sh",
            "щ" : "shh",
            "ъ" : "",
            "ы" : "y",
            "ь" : "",
            "э" : "e",
            "ю" : "yu",
            "я" : "ya"
        };
    
    /**
     * транслитерация  
     * Выводит текст в английский транслит
     * @param {string} str, строка в Транслит
     * @return [string]
    */
    
    myModel.transliteration_text = function(str){
        
        str = str+"";
        
        return String(str).replace(regExp, function(s){
            return translite[s];
        });
    }
    
    return myModel;
    
}(LEMONADE || {}));
/*
==>END
*/
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
        
        var NumberVerification = +NumberVerification;
        

        var NumberOfChecks = [
        
            (!isNaN(parseFloat( NumberVerification )) && isFinite( NumberVerification )) ? NumberVerification : "RESET", //проверка на число
            (typeof NumberVerification === "number") ? NumberVerification : 'RESET', //проверка на тип данных
            (NumberVerification < 143000000000)      ? NumberVerification : 'RESET', //превышает ли значение
            (NumberVerification >= 0)                ? NumberVerification : 'RESET', //меньше ли нуля
        
        ];
        
        if(NumberOfChecks.indexOf("RESET") !== -1){
            console.error("False number Неверное значение");
            return 0;
        }
        
        var EndNumberVerification = String(NumberVerification).split('.')[0];
    
        return +EndNumberVerification;
        
    };
    
    return myModel;
    
}(LEMONADE || {}));
/*
==>END
*/
/*
START LEMONADE.сonverter_of_a_thousand()
*/
;var LEMONADE = (function (myModel) {
    console.log("LEMONADE.js ==> сonverter_of_a_thousand");
    
    "use strict";
    
    var TheNumberOfSettled,
        AnnexeMass = {
            "K":  1000,
            "M":  1000000,
            "G":  1000000000
        };
    
    /**
     * Вычесление при конвертации
     * Конвертирование в формате (kilo, mega, giga) 
     * @param {number} NumberSolve, исходное число
     * @param {string} Annexe, приставка обезательное (K, M, G )-(строка)
     * @return {arrya} [1000.001, 1000, false/string]
    */
    myModel.сonverter_of_a_thousand = function (NumberSolve, Annexe){
        
        TheNumberOfSettled = NumberSolve;
        NumberSolve        = +NumberSolve || 0;
        Annexe             =  Annexe      || "K";
        
        var Display           = String(Annexe)[0].toUpperCase(),
            DisplayStringUser = (Annexe.substring(2) === "") ? false : Annexe.substring(2);
        
        if( NumberSolve >= AnnexeMass[Display] ){
            
            TheNumberOfSettled = [
                NumberSolve / AnnexeMass[Display],
                Math.trunc((NumberSolve/AnnexeMass[Display]) * 10) / 10,
                DisplayStringUser
            ];
            
            return TheNumberOfSettled;
        }
        
        return [TheNumberOfSettled, Annexe];
    };
    
    return myModel;
    
}(LEMONADE || {}));
/*
==>END
*/