let name = {
	firstName: "Pankaj",
	lastName: "Sha",
};

function printName(home, home1, home2) {
    console.log(this.firstName + " " + this.lastName + " " + home + " " + home1 + " " + home2);
}

// let print1 = printName.bind(name, "delhi", "kol");
// print1("mumbai");

// polyfill for bind
// Note -> bind method is avaliable for all method (To implement this attached your bind method with function prototype)
// Borrowed function is attached with this keyword.
// 
Function.prototype.myBind = function(...args){
    
    // this holds reference of borrowed method
    let obj = this;

    // first argument refers the object for mybind method
    // for other arguments use slice to get arr of other arguments 
    let params = args.slice(1);

    return function (...args2) {
        // when bind, it returns a method which invokes the borrowed method
        obj.apply(args[0], [...params, ...args2])
    };
};

let print = printName.myBind(name, "Delhi", "Kol");
console.log(print)
print("Mumbai")



