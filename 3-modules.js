
//CommonJS, every file is module (by default)
// Modules- Encapsulated Code (only share minimum)

const names = require('./4-names')
const sayHi = require('./5-utils')
const data= require('./6-alternative-flavor')

console.log(data)



var math = require('./7-mind-grenade')
// prices 
var product1Price = 100 ; 
var product2Price = 200 ; 
 
var vat1 = math.CalculateTax(product1Price) ;
var vat2= math.CalculateTax(product2Price); 
var totalVat = vat1 +vat2; 
console.log(totalVat) ;




// sayHi('susan')
// sayHi(names.john)
// sayHi(names.peter)

