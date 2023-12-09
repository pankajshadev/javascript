// Refer these video
/*
https://www.youtube.com/watch?v=8zKuNo4ay8E&list=PLlasXeu85E9cQ32gLCvAvr9vNaUccPVNP&index=18
https://www.youtube.com/watch?v=2WJL19wDH68&list=PLlasXeu85E9cQ32gLCvAvr9vNaUccPVNP&index=19
*/

/**
 * Browser
 *      JavaScript Runtime Environment
 *          JavaScript Engine (Heart of javaScript Runtime Environment)
 *              Call Stack
 *          WEB APIS (part of RE)
 *              setTimeout() - timer
 *              DOM APIS - Dom tree
 *              fetch() - connect to server
 *              local Storage 
 *              console
 *              Location
 *          CallBack Queue
 *          Event Loop
 *          Microtask Queue
 * JS Engine uses web Apis to use these superpowers.
 * We get these super powers in call stack through window (global object).
 */



// Exampe -

// It prints start
console.log("start");
// Here, setTimeout registers this call back function and starts a timer of 5 seconds
// and JavaScript continues to execute, and it prints end
// As soon as timer expires, call back function is pushed in callback queue.
// Here comes Event Loop
// Event loop keeps an eye on callback queue
// It continuously check call back queue.
// As soon as, it finds a call back function, it pushes cb function in call stack
// Then call back function is executed.
setTimeout(function cb () {
    console.log("call back")
}, 5000);
console.log("end");



// Event Loop
/**
 * It monitors call back queue and call stack.
 * If call stack is empty, it pushes call back function in stack from microtask and callback queue.
 */


// Microtask Queue
// It has higer priority than call back queue.
// call back function of networks call(fetch) resides in microtask queue.
// All call back function comes from promises resides in microtask queue.
// All call back function comes from Mutation observer resides in microtask queue.

// First JavaScript Engine - Spider Monkey
// JavaScript Engine  is a program (Application).


// JS can behave as interpreter or compiled language depends on JS Engine.

// Most modern browser uses compiler and interpreter both.

// JIT compilstion -> compiler + interpreter

// Flow of JavaScript code in JavaScript Engine

// Code -> Parsing -> Compilation -> Execution

// In parsing -
    // code is broken down in tokens.
    // Syntax parser generates AST (Abstract syntax tree)
    // AST is output of Parsing phase.

    
// Now, Interprete executes code line by line and parallely comiler optimizes the code.





