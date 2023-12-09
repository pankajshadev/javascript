/*
What is currying?

Currying is a transformation of functions that translates a function from callable as f(a, b, c) into callable as f(a)(b)(c).

Currying doesn’t call a function. It just transforms it.
*/

// Basic example
// normal function
function sum(a, b) {
	return a + b;
}

// console.log(sum(2, 3));

// using currying
// sum(2)(3) would work

// uses closure concept
function curry(fn) {
	return function (a) {
		return function (b) {
			return sum(a, b);
		};
	};
};

// transforming sum function using currying
let sum1 = curry(sum);

// console.log(sum1(2)(3));

// Advanced currying when multiple argument
// example
// sum1(2, 3)(5, 6)(7) ... like that

function multiply(a, b, c) {
    return a * b * c;
}

// Note - 
//  currying works for a function with fixed no. of arguments

function advancedCurry(fn) {
    // return a named function, so that we can use it recursively 
    return function curried(...args) {
        // if args length is greater than the no of parameter in original function
        // then directly perform the operation using apply
        // else return a wrapper funciton with new argument,
        //  which will call curried with previous and new argument passed
        if (args.length >= fn.length) {
            return fn.apply(this, args);
        } else {
            return function (...args2) {
                return curried.apply(this, args.concat(args2));
            }
        }

    }
}

// transforming multiply function 
let multiply1 = advancedCurry(multiply); 

let ans = multiply1(4)(2, 5)
console.log(ans);



