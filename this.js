// this in global scope
console.log(this);  // global object
// window in case of browser
// global in case of node


// this inside a function
// in non strict mode it is different (default): value of this is window
// in strict mode it is different: value of this is undefined
// value of this depends on non strict and strict mode
function x(){
    console.log(this);
}

// this substitution
// If this keyword value is undefined or null
// then it is replaced with global object
// in non strict mode

//this keyword value depends on how the function is called
// when function is called with reference value this becomes global object
// else undefined
x();

// in this case it is window object, x is called with window reference
window.x()


// this inside a object's method
const student = {
    name: "Abhi",
    printName: function(){
        console.log(this.name);
    }
}

// value of this is object itself {name:"Abhi", printName : f}
// Iit will print Abhi
obj.printName();


// call apply bind methods (sharing methods)
const student2 = {
    name: "Raj",
}

// by overriding the value of this keyword
// value of this is student2 
// and it will print Raj
student.printName.call(student2);


// this inside arrow function
// arrow function does not have this keyword
// it retains the this value of the enclosing lexical context(env) (where the function is defined)
let obj = {
    a: 10,
    x : ()=>{
        // here this obj is defined in global scope
        // so it retains the value of this of global scope
        // so here the value of this is window object
        console.log(this);
    }
}


// this inside dom
// the value of this is reference to html element
// example
// value of this is button itself
{/* <button onclick="alert(this)">btn</button> */}