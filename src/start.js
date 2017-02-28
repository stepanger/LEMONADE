    function _сonverter_of_a_thousand(NumberSolve, Annexe){
        NumberSolve = +NumberSolve || 0;
        Annexe      =  Annexe      || "K";
        
        var Display           = String(Annexe)[0].toUpperCase(),
            DisplayStringUser = (Annexe.substring(2) == "") ? false : Annexe.substring(2);
        
        var TheNumberOfSettled = NumberSolve,
            AnnexeMass = {
                "K":  1000,
                "M":  1000000,
                "G":  1000000000
            };
        
        if( NumberSolve >= AnnexeMass[Display] ){
            
            TheNumberOfSettled = [
                NumberSolve / AnnexeMass[Display],
                Math.trunc((NumberSolve/AnnexeMass[Display]) * 10) / 10,
                DisplayStringUser
            ];
            
            return TheNumberOfSettled
        }
        
        return [TheNumberOfSettled, Annexe]
    };