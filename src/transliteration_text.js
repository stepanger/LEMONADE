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
     * Tранслитерация  
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