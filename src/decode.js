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