/**
 * Promise is a solution of call back hell.
 */

const cart = [];

//  When executes this it returns promise object (empty)
// {data : undefined}
// after executing createOrder(async operation),
// whatever time it takes, it returns data and fills the promise object.
// {data : data}
const promise = createOrder(cart); // It returns a promise
// Once the promise has data, it automatically invokes call back function.

promise.then(function () {
	proceedToPayment(orderId);
});

// It takes call back function.
// It attaches a call back function with promise object.
// controls over our program
// gurantee that promise will invoke the call back function
// can trust on promise
promise.then();

// Promise has 3 steps
// Pending
// FullFilled
// Rejected

// Promise is immutable.

/*
Promise
- Container for future value
- It is an object which represents eventual completion or failure of an async operation.
- It is a placeholder for some time till we receive the data from an async operation.

Promise chaining >>>>  call back hell
In promise chaining, always return
*/

createOrder()
	.then(function (orderId) {
		return proceedToPayment(orderId);
	})
	.then(function (paymentInfo) {
		return showOrderSummary(paymentInfo);
	})
	.then(function () {
		return updateBalance();
    });
    

// Creating a Promise

function createOrder(cart) {
    const promise = new Promise(function (resolve, reject) {
        // logic
        reject(error);

        // successfull / Passed
        resolve(orderId);
    });

    return promise;
}

// Promise constructor takes function as as parameter.
// the function has two parameter resolve and reject. (Given by js)
// Based on out logic, we can resolve and reject promise. 
