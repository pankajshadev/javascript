/*

* Shortest program in JavaScript is empty file.

* Whenever JavaScript code is executed, It creates global execution context.
  Along with GEC, it creates a global object which is known as 'Window' in browser.

* JavaScript engine also creates 'this' keyword.
* At global scope, this === window
* Every variable and function at global scope are attached with window object.
*/

// this prints window object on browser console
console.log(window)
// true
console.log(this === window)