/**
 *  Callback
 *      Good part - Callback plays an important role in async task.
 */

// Bad part - callback hell
// call back insdie a call back
// not maintainable
// Easy to get bug

// Example - 

// Assume we have a cart
const cart = []
// and we have an api to create order
// after creating order, we need  to proceed to payment (call back)
// then after payment, we have to show order summary (call back)
// then we have to update wallent balance (call back)
// all task are in chain
// It creates a chain of call back hell
// It can grow more longer.
api.createOrder(cart, function () {
    api.proceedToPayment(function () {
        api.showOrderSummary(function () {
            api.updateWallet();
        })
    })
})


// Inversion of control
// When you lose your control in program while using call back
// While using call back, we blindly trust our function that It will invoke call back function at same point of time.
// We give our code to some other code and we lose control.
// This is called as Inversion of control.

