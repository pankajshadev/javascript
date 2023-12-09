
// async is a keyword which is used to create a async function
// async and await are used to handle promises

// const p = new Promise((resolve, reject)=>{
    // resolve('Promise is resolved!!');
// })


// it always returns a promise
// If you dont return a promise, it will wrap the output in a promise and return
// async function getData(){

    // since p is a promise
    // it will return as it is 
    // return p;

    // it is wrapped in a promise and then it is returned
    // return 'Hello Promise';
// }

// const data = getData();

// It is a promise
// console.log(data)

// How to get data from promise
// data.then(res=>console.log(res));

// Handle promise without async-await
// function handlePromiseWithoutAsync(){
    // handling promise using then
    // p.then(res=>console.log(res));
// }

// handlePromiseWithoutAsync();

// Handle promise using async-await
// await is a keyword which is used before a promise
// await is a keyword which can only be used inside an async function
// async function handlePromiseWithAsync(){
    // handling promise, promise will get resolved and will return value
//     const data = await p;
//     console.log(data, 'with async-await');
// } 

// handlePromiseWithAsync()


// example
const p = new Promise((resolve, reject)=>{
    // promise will be resolve after 10 seconds
    setTimeout(()=>{
        resolve('Promise is resolved!!')
    }, 10000);
})

const p2 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve('Promise2 is resolved');
    }, 5000);
})

async function handleAsyncPromise(){
    console.log('Hello world');
    // JS Engine will wait here for promise to be resolved (But it is not true)
    const d2 = await p2;
    console.log('Namaste JavaScript');
    console.log(d2);
    
    const d1 = await p;
    console.log('Namaste JS2');
    console.log(d1);
}


// step - 11 : now after promise gets resolved, it again pushes the function in call stack and starts executing from line where it suspended the function execution
// step - 10 : else it again suspend the function execution for promise to be resolved
// step - 9 : at line 71, if promise is resolved then control goes to next line
// step - 8 : then it prints the next two line
// step - 7 : after 5 seconds, handelAsyncPromise is again pushed in call stack and it starts executing from the line where it suspended the execution
// step - 6 : and handleAsyncPromise is poped out from call satck
// step - 5 : so it suspends the function execution
// step - 4 : at line 67, it sees a promise that will take 5 seconds to resolve 
// step - 3 : at line 65, it prints hello World
// step - 2 : handleAsyncPromise()  -> at line 84, handleAsyncPromise is pushed in call stack
// step - 1:  call stack (empty)
// Understand with call stack
// How async-await works behind the scene


handleAsyncPromise()




// function handlePromise(){
    // this promise will be resolved after 10 seconds,
    // but Js engine will not wait here for this promise to be resolved
    // the control will go to next line and it will print hello World
    // then after 10 seconds promise will be resolved
    // and will print data received from promise
//     p.then(res=>console.log(res));
//     console.log('Hello World')
// }
// handlePromise()




