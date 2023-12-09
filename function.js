// The major difference in functions are how they are hosited.

// Anonymous function
// A function with out a name
// It is used as a value.
const c = function () {

}

// Function statement or Function Declaration
function a() {
    // This way of creating a function is called as function statement.
}

// Function expression
// Assigning function to a variable
const A = function () {
    
}

// Named function expression
const B = function b() {
    console.log("Named function expression");
}

// This gives a reference error (not in global scope)
// b();

// This is correct
B();

// First Class Function 
// The ability of a function being used as a value, passed as an argument and returns as a value is known as First Class Function. 


// Call Back Function
// We can take a function and pass it to another function. This is called as call back function.
// Call back function are very powwerful. We can do async task in javaScript using it.

function X(fn) {
    
}
// Here C is a call back function.
// It might be called some time later in JavaScript code.
X(function C() { });

// Example - 

// C is a call back function which will be called 1 second later.
setTimeout(function C() { }, 1000);


// Notes - 
// JavaScript has one Call Stack. Every function is executed here.
// If function is taking longer time, so it block the main thread(Call Stack).
// We should not do that. We should use call back function to do it asynchronously.





