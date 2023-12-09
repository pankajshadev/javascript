// this refers to global window object
console.log(this)

// example of call method

let name = {
    firstName: "Pankaj",
    lastName: "Sha",

    printName: function (home) {
        // console.log(this) -> here this refers to current name object
        console.log(this.firstName + " " + this.lastName + " " + home);
    }
}

/*
    1. call methiod is used to borrow a fucntion.
    2. Function could be anywhere (In gloabl scope or local to an object)
    3. first argument of call method is object reference (this).
    4. call method can have multiple arguments
    5. other arguments are the parameter of borrowed function.


*/

// this will print Pankaj Sha
name.printName()

// let's see call method
// used to borrow function

let name2 = {
    firstName: "Raj",
    lastName: "Rahul"
}
// the first argument of call method should be the reference of another object
// call method can have multiplle arguments

// Here we are borrowing function of name object and passing name2 object as argument in call method 
// this will print Raj Rahul undefined (because absence of 2nd argumet)
name.printName.call(name2)


// call method with multiple arguments
// this will print Raj Rahul kol
name.printName.call(name2, "kol");


// another example
function sayHi() {
    console.log("Hi " + this.firstName + " " + this.lastName);
}

// this will print Hi Pankaj Sha
sayHi.call(name);
// this will print Hi Raj Rahul
sayHi.call(name2)

