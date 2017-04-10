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