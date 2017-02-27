/*

js: CONVERTER.js
af: kit-kat sss

*/

console.log("CONVERTER.js");

;var CONVERTER = (function(){
    
    function Number(num){
        
        // _Dangerous_number == опасное число ==> не отфильтрованное число
        
        var _Dangerous_number = +num;
        
        _Number_of_checks = [
            
            (!isNaN(parseFloat(_Dangerous_number)) && isFinite(_Dangerous_number)) 
                                                    ? _Dangerous_number : "RESET", //проверка на число
            (typeof _Dangerous_number === "number") ? _Dangerous_number : 'RESET', //проверка на тип данных
            (_Dangerous_number < 143000000000)      ? _Dangerous_number : 'RESET', //превышает ли значение
            (_Dangerous_number >= 0)                ? _Dangerous_number : 'RESET', //меньше ли нуля
            
        ];
        
        if(_Number_of_checks.indexOf("RESET") !== -1){
            return false
        }
        
        var _Good_number = +_Dangerous_number;
        
        return _Good_number
        
    };
    
    return {
        
        "convert_pounds":      function(num){
            
            var likes_start = {
                kilo_start: (function(){
                    
                    /*
                     * При преоброзование num в строку данные сохраняються в массив KILOnum
                     *
                     * Пример:
                     *
                     * 1. на вход поступает число 9212
                     * 2. если значение превышает 1000 данно число 9212/1000
                     * 3. В результате деления получаеться число с плавающей точкой 9.212 
                     * 4. далее число преобразуесться в строку с последующей зачисления в массив ['9', '212' ]
                     * 5. проверка это число ['9', '212' ] или ['9'] и выбор метода 'float_number' : 'int_number'
                     * 6. 'float_number' первое условие выражение проверяет есть ли в десятичной части 0 == > ['9', '0212' ]
                     *    если есть то числитель отсеиваеться в другом случае массив складываеться обрато в строку взяв из
                     *    чеслителя первую цифру дестичную часть
                     *      a) 9212 ==> 9212/1000 ==> ['9', '212' ] ==> 9.2 K
                     *      b) 9012 ==> 9012/1000 ==> ['9', '012' ] ==> 9 K
                     * 7. 'int_number' срабатывает при условии что массив KILOnum размер которого равен 1 значения 
                     *      a) 9000 ==> 9000/1000 ==> ['9'] == 9 K
                     */
                    
                    var KILOnum = ((num / 1000)).toString().split('.'),
                        method_number = (KILOnum.length === 2 ? 'float_number' : 'int_number'),
                        the_number_of_type = {
                            float_number: function(){
                                
                                KILOnum = KILOnum[1].charAt(0) == "0" ? 
                                      (KILOnum[0]) :                         
                                      (KILOnum[0]+'.'+KILOnum[1].charAt(0));  
                                
                                return KILOnum.replace(/(\d{1,3}(?=(\d{3})+(?:\.\d|\b)))/g,"\$1 ")+" K"
                            },
                            int_number:   function(){
                                return KILOnum[0].replace(/(\d{1,3}(?=(\d{3})+(?:\.\d|\b)))/g,"\$1 ")+" K"
                            },
                    };
                    
                    return the_number_of_type[method_number]();
                    
                }),
                number_def: (function(){
                    return num.toString().replace(/(\d{1,3}(?=(\d{3})+(?:\.\d|\b)))/g,"\$1 ")+" like";
                }),
            };
            
            
            /*
             * Вызов функции Number(num) return false ==> "false number"
             *               Number(num) return number ==> "likes_start[method]();"
             *
             * Передача параметров "method" - 'kilo_start' Преоброзование в KILO деление на 1000
             *                              \ 'number_def' Без преоброзования
             */
            
            if(Number(num) !== false){
                
                var num = +num;
                var method = (num >= 1000 ? 'kilo_start' : 'number_def');
                
                return likes_start[method]();
                
            }else{
                return 404 + " не правельное число возможно передана строка"
            }
            
        },
        "the_number_of_leave": function(num){
            
            var num = Number(num)
            
            if(num !== false){
                return num.toString().replace(/(\d{1,3}(?=(\d{3})+(?:\.\d|\b)))/g,"\$1 ")+" like";
                
            }else{
                return 404 + " не правельное число возможно передана строка"
            }
        }
    }
    
}());



