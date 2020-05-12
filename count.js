// checking the content of the array

var check = function(arr){

// if you type array.length it will output 1
// because the operation is to be performed on the name of the parameter hence arr.length
return "there are "+ arr.length + " number of elements in the array" ;

}


//this makes sure that check function is explicitly available outside this domain
//otherwise it wouldn't be available
module.exports = check; 
