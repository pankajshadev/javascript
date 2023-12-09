/**
 * Note - JavaScript waits for none.
 * setTimeout is executed in different scope and JavaScript continues to execute.
 * setTimeout takes the call back function and attahches a timer and put it in different scope.
 */


// Example - 

function A() {
    var i = 1;
    setTimeout(function () {
        console.log(i);
    }, 2000)

    console.log("Hello");
}
//  When A is called, at line 12, setTimeout is executed and it puts function in different scope and attaches 2 sec timer.
// Meanwhile JavaScript continues executing and print Hello at line 16
// then after 2 sec, call back function is executed.
// and prints 1
// prints Hello
// prints 1
// A();



// Q.1 Prints 1 2 3 4 5 after ith sec.
// noob approach
function x() {
    for (var i = 1; i <= 5; i++){
        setTimeout(() => {
            console.log(i);
        }, i * 1000);
    }
}

// But prints 6, 5 times
// Why? setTimeout takes the call back function and stores it but it remembers all the reference.
// So here, 5 call back functions are pointing to same reference of i and, after, for loop is done executing
// i becomes 6, then these 5 call back functions are executed and prints 6 5 times.
// x();


// How to fix it?
// It prints 1 2 3 4 5
// Why? let has block scope, so everytime call back is called with new i. 
function y() {
    for (let i = 1; i <= 5; i++){
        setTimeout(() => {
            console.log(i);
        }, i * 1000);
    }
}
y();
