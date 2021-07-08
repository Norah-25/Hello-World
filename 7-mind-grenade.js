 
var  math  = {}

math.addValues= function(num1 , num2) {
   return  num1 + num2  ; 
}

math.CalculateTax= function (price){
    return price * 0.15 ;
}


math.CheckIfPositve = function(num){
    if(num ==0 ){
        return null 
    }
    else if (num > 0 )
    return true
    else 
    return false  
}

 
module.exports = math ; 