/* 

Hoisting in JavaScript is a phenomenon which allows to access variables and functions 
even before initializing it, without any error.

Example  - 
*/

// print undefined
console.log(x);
var x = 7;

// Print undefined
// Print Pankaj
getName();
function getName() {
    console.log(y);
    var y = 8;
    console.log("Pankaj");
}


