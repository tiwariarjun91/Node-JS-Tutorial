stuff = require('./stuff');  //as there are 3 properties we are exporting only the main thing

//maybe a function cannnot return a concole.log function as a return value , so the return value should be given as a parameter to the log function

console.log(stuff.check(["Arjun", "Ram", "Krishna"]));

console.log(stuff.adder(5,11));

console.log(stuff.adder(5,stuff.pi));
//this functionality is required to us in the count.js so will use the require function in that file




