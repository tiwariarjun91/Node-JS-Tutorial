//normal function statement
function hi(){

console.log('hello world !!!!!!!!');

}

hi();

//function expression
var bye = function(){

console.log('bye people!!!!!!!!!!');

}


bye();

//passing a function into another function

function example(fun){

    fun();

}

example(bye);
