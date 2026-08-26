// console.log("Start");

// setTimeout(() => {
//     console.log("timer");
// }, 0);

// Promise.resolve().then(() => {
//     console.log("Promise");
// });

// console.log("End");

// console.log("Start");

// process.nextTick(() => {
//     console.log("nextTick");
// });

// console.log("End");

// nextTick vs promise
// console.log("Start");

// process.nextTick(() => {
//     console.log("nextTick");
// });

// Promise.resolve().then(() => {
//     console.log("Promise");
// })

// console.log("End");

// First example
console.log("1");

setTimeout(() => {
    console.log("2");
}, 0);

Promise.resolve().then(() => {
    console.log("3");
});

process.nextTick(() => {
    console.log("4");
});

console.log("5");



/*
Synchronous code
       ↓
Microtasks
       ↓
Event Loop phases
       ↓
Timers / I/O / etc.
*/