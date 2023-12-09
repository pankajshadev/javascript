/*

{
    This is block.
    This is known as compound statement.
    This is used to group multiple JavaScript statement which can be used where JavaScript expects one statement.
}


* Block Space - 
    What all variable we can access inside a block is known as block space.
*/

// Exampe
{
	var a = 10;
	let b = 1;
	const c = 10;
	// b and c are accessed here.
	console.log(b);
	console.log(c);
}
// a can be accessed here because var has function scoped.
console.log(a);

// b and c can't be accessed here (Reference error)
// console.log(b);
// console.log(c);

// Shadowing in JavaScript

var x = 10;
let y = 5;
{
    // shadowing 
    var x = 100;
    let y = 55;
    const c = 10;
    // y = 55
    console.log(y);
    // x = 100;
    console.log(x);
}
// y = 5
console.log(y);

// x = 100 (both x are in same scope)
console.log(x);