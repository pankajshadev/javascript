/**
 * A function which takes a function as an argument or return a function is known as Higher order function.
 */


function x() {
    
}

// y is a higher order function and x is a call back function.
function y(x) {
    x();
}

y(x);

// It modularize your code.
// Example - 
// map, filter and reduce etc.