
var check = function(arr){

     
    return "there are "+ arr.length + " number of elements in the array" ;
    
    }


var adder = function(a,b){

    return `The sum of two numbers is ${a+b}`;
}    
    
var pi = 3.142;
    
// the exports object now has 3 properties
//module.exports.check = check; 
//module.exports.adder = adder; 
//module.exports.pi = pi; 

//we can also do
module.exports = {

check : check,
adder : adder,
pi : pi ,

}
