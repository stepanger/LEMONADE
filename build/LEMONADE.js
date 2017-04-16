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
var LEMONADE = (function (myModel) {
    console.log("LEMONADE.js ==> decode.js");
    
    "use strict";
    
   /**
    * utf8ToB64
    *
    * LEMONADE.utf8ToB64("privet") // cHJpdmV0
    *
    * Кодирование строки в base-64
    * @param {str}  String Строка для кодирования
    * @return [String]
    */
    
    myModel.utf8ToB64 = function (str){
    
        return btoa(unescape(encodeURIComponent(str)));
        
    };
    
   /**
    * b64ToUtf8
    *
    * LEMONADE.b64ToUtf8("cHJpdmV0") // privet
    *
    * Декодирование строки в utf8
    * @param {str}  String Строка для Декодирования
    * @return [String]
    */
    myModel.b64ToUtf8 = function (str){
        
        return decodeURIComponent(escape(atob(str)));

    };
    
    return myModel;
    
}(LEMONADE || {}));
var LEMONADE = (function (myModel) {
    
    console.log("LEMONADE ==> storage.js");
    
    "use strict";
    
    var chromeLocal = chrome.storage.local;
    
    
    /**
     * setStorage
     *
     * LEMONADE.setStorage({"history": ["habr", "google"]}, function(){});
     *
     * Заносит значения в chrome.storage.local
     * @param {obj}  object (ключ: значение) записи
     * @return [callback]
    */
    myModel.setStorage = function(obj, callback){
        chromeLocal.set(obj, function(err) {
            if(err){
                console.info(err);
                return
            }
            
            if(!callback){
                return
            }
            
            callback();
        });
    };
    
    /**
     * getStorage
     *
     * LEMONADE.getStorage("hictory and null", function(page){console.log(page)});
     *
     * получает значения из chrome.storage.local
     * @param {string}  string and null
     * @param {callback}  function(page)
     * @return [callback]
    */    
    myModel.getStorage = function(string, callback){
        chromeLocal.get(function(page) {
                
            if(string == null){
                callback(page);   
            }else{
                callback(page[string]);
            }
            
        });
    };
    
    /**
     * clearStorage
     *
     * LEMONADE.clearStorage(function(){});
     *
     * Удаляет все значения из chrome.storage.local
     * @param {callback}  function(){}
     * @return [callback]
    */
    myModel.clearStorage = function(callback){
        
        if(!callback){
            chromeLocal.clear();
            return
        }
        chromeLocal.clear(callback);
    };
    
    /**
     * removeStorage
     *
     * LEMONADE.removeStorage("history", function(){})
     *
     * Удаляет значениt по ключу из chrome.storage.local
     * @param {string}  ключ в записи
     * @param {callback}  function(){}
     * @return [callback]
    */
    myModel.removeStorage = function(key, callback){
        
        if(!callback){
            chromeLocal.remove(key);
            return
        }
        
        chromeLocal.remove(key, callback);
    };
    
    /**
     * memoryStorage
     *
     * LEMONADE.memoryStorage(function(bytesInUse){console.log(bytesInUse)});
     *
     * Получает объем (в байтах), используемый в chrome.storage.local
     * @param {callback}  function(bytesInUse){}
     * @return [callback]
    */
    myModel.memoryStorage = function(callback){
        chromeLocal.getBytesInUse(function(bytesInUse){
            callback(bytesInUse);
        })
    };
    
    return myModel
    
}(LEMONADE || {}));
var LEMONADE = (function (myModel) {
    console.log("LEMONADE.js ==> transliteration_text");
    
    "use strict";
    
    var regExp = /[\/\|\:\?\*&<>"'\/А-ЯЁа-яё]/g
      , translite = {
            "'" : "&#39;",
            '&' : "&amp;",
            '<' : "&lt;",
            '>' : "&gt;",
            '"' : "&quot;",
            '/' : "&#x2F;",
            ':' : "&#133;",
            '|' : "&#124;", 
            '?' : "&#063;",
            '*' : "&#042;",
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
     * transliterationText - Tранслитерация  
     *
     * LEMONADE.transliterationText("Привет");
     *
     * Выводит текст в английский транслит
     * @param {string} str, строка в Транслит
     * @return [string]
    */
    
    myModel.transliterationText = function (str){
        
        str = str+"";
        
        return String(str).replace(regExp, function(s){
            return translite[s];
        });
    }
    
    return myModel;
    
}(LEMONADE || {}));
var LEMONADE = (function (myModel) {
    console.log("LEMONADE.js ==> validation_of");
    
    "use strict";
    
    var mass_NumberVerification = []    //массив с каждой подстрокой чисел
      , finished_number                 //проверенное число
      , bollean_of_a_number;            //boolean для проверки в {every}
    
    /**
     * validationOf - Проверка на число
     *
     * LEMONADE.validationOf(1234);
     *
     * Валидация числа на придмет не валидных значений
     * @param {number} string_of_a_number, проверяемое число
     * @return {number} 123
    */
    
    myModel.validationOf = function (string_of_a_number) {
        
        string_of_a_number = string_of_a_number || "";
        mass_NumberVerification = string_of_a_number.split("");
        
        if( !mass_NumberVerification.length ) {
            return 0; //false
        };
        
        bollean_of_a_number = mass_NumberVerification.every( function(number) {
            return number >= 0;
        });
        
        if( !bollean_of_a_number ) {
            return 0; //false
        };
        
        finished_number = +(mass_NumberVerification.join(""));
        finished_number = (finished_number <= 143000000000) ? finished_number : 0;
        
        return finished_number;
        
    };
    
    return myModel;
    
}(LEMONADE || {}));
var LEMONADE = (function (myModel) {
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
    myModel.сonverterOfAThousand = function (NumberSolve, Annexe) {
        
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