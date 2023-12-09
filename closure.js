/**
 *  What is closure?
 *  A function along with its lexical scope(environment) forms a closure.
 */

// Example - 

function x() {
    var a = 10;
    let b = 10;
    y();
    // y forms a closure with lexical scope (everything inside x that is being used in y)
    function y() {
        console.log(a + b);
    }
}

// prints 20;
x();

// Example - 2

function a() {
    var x = 10;
    // It returns closure
    // closure -> function bundled along with its lexical scope/env, so it remembers where it has come from.
    return function b() {
        console.log(x);
    }
}

var z = a();
// prints 10
z();

// Use of Closure
// Module Design Pattern
// Currying
// Memoize
// maintaing state in async world
// setTimeout
// Iterators