/* 

* Everything in JavaScript happens inside an Execution Context.

* Execution Context (Assume it as a big container)

* It has two component.

    1. Memory Component / Variable environment
        ~ It stores all variables and functions as key-value pairs.
        ~ Variables are assigned undefined.
        ~ Functionns are assigned the whole code of function.
    
    2. Code Component / Thread of Execution
        ~ Code is executed here one line at a time.

* `JavaScript is a synchronous single-threaded language`.

* Single-threaded : JavaScript executes one command at a time.

* Synchronous single threaded : JavaScript executes one command at a time in a specific order.

* When you run JavaScript code, a global execution context is created.


* How JavaScript code is executed?

Example : code snippet
`
1.  var n = 2;
2.  function square(num){
3.      var ans = num * num;
4.      return ans;
5.   }
6.
7.   var square2 = square(2);
8.   var square4 = square(4);
`

When you run above code, a golbal execution context is created and pushed inside a call satck.

* Execution context is created in two phase - 

1. Memory Creation Phase - 
    ~ JavaScript allocates memory to all varibales and functions.
    ~ as key-value pairs
    Memory Component
    {
        n: undefined
        square : {......} (function code)
        square2 : undefined
        square4 : undefined
    }

2. Code Execution Phase - 
    ~ JavaScript executes code line by line.
    ~ at line - 1: 
        n : 2
    ~ from line 2 - 5, nothing to executes (function definition)
    ~ at line - 7:
        A square function is invoked, which creates an another local execution context.
        It also has two components Memory and code.
        It is created in two phase - 
        
        2.1 Memory Creation Phase - 
        
            Memory Component
            {
                num : undefined
                ans : undefined
            }
        
        2.2 Code Execution Phase - 
            ~ at line - 2:
                num : 2
            ~ at line - 3:
                ans = num * num = 2  * 2 = 4 is calculated.
                ans : 4
            ~ at line - 4:
                ans is returned to the line where it was invoked (at line - 7) and local execution context is deleted.
    
    ~ at line - 7 :
        square2 : 4

    ~ at line - 8:
        function is invoked and same process happens again.

        and square4 becomes 16.

    ~ after line - 8:
            JavaScript is done with execution and after that global execution context is deleted and poped out of call stack.



* JavaScript has its own call stack which is used to manage execution of JavaScript code (Execution context).
        
* Call Stack maintains the order of execution of execution contexts.

* Call Stack is also known as -
    
    Execution Context Stack
    Program Stack
    Control Stack
    Runtime Stack
    Machine Stack
*/