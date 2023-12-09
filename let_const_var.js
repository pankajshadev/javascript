// Variables, declared with var, are either gloabl or funtion scoped

function printMsg() {
    var msg = "Hello"
}
printMsg()
// var is funcion scoped. 
// Reference error
// console.log(msg)

// Note - if var is not inside in a function, It has global scope.

// var has no block space. (They are visible through blocks)
// example
for (var i = 0; i < 2; i++){
    var name = "Pankaj";
}

if (true) {
    var message = "Hi";
}
// because var are visible through blocks
// output - Hi
// 2 Pankaj
console.log(message);
console.log(i + " " + name);

// ---------------------------------------------------------

/**
 * let and const variables are also hoisted but in different way.
 * They are also allocated memory but they are not attached with global object.
 * They get different memory space and that is the reason we can not access these variable even before initializing it.
 * 
 * Temporal dead zone
 * It is a phase from hoisting to assigning a value to a let and const variable.
 * We can not access a variable which is in temporal dead zone.
 * We can not declare same variable with let keyword.
 */

let a = 6;
// prints undefined
// console.log(window.a);

let x = 10;
console.log(x);

// syntax error
// can not declare same let or var varibale in same scope
// let x = 5;
// var x = 8;

// this is possible( beacause js treats both y as same variable)
var y = 9;
var y = 19;
console.log(y);



// --------------------------

// Reference Error : not defined -> when variable is not defined
// Reference Error : Can not access before initialization -> when you try to access variable in temporal dead zone
// Syntax Error : do not execute a single line of code

// Syntax Error
const b;
b = 10;

// type Error
const p = 1000;
p = 60;
