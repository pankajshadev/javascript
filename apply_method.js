// example of apply method
// Both call and apply method works same
// the only difference is in passing argument


let name = {
    firstName: "Pankaj",
    lastName: "Sha"
}

function printName(home, home1) {
    console.log(this.firstName + " " + this.lastName + " " + home + " " + home1)
}

// In call method, we directly invoke method by passing object(which represents this) 
// and individual argument for borrowed function parameter

printName.call(name, "kol", "Delhi")

// In apply method
// We pass an arraylike list for borrowed function parameter
// this will print Pankaj Sha kol Delhi
printName.apply(name, ["kol", "Delhi"])


// example of bind method
// bind method works the same as call method
// the only difference is bind method binds a borrowed method with an object and returns 
// a copy of the method

// it returns a copy of method which can be invoked later
let print = printName.bind(name, "home", "kol");
// this will print Pankaj Sha home kol
print()




