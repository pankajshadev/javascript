/*

    * Lexical - Hirarchey (in order)

    * Lexical Environment - Local memory + Lexical Environment of parent

    * Lexical Environment of GEC is null.
   
    * Scope chain = Chain of Lexical Environment

*/
// Example - 

function b() {

    // Here it finds 'a', so it prints it
    // If it could not find 'a' here, it goes to lexical env of parent i.e. GEC
    var a = 10;

    c();

    function c() {
        // It tries to find 'a' in local memory of function c.
        // If it could not find it, It finds in lexical env of parent i.e. function 'b'
        console.log(a);
    }
}

// If it does not find 'a' here, js throws error
b();

