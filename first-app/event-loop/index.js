// console.log("Start");

// setTimeout(() => {
//     console.log("timer");
// }, 0);

// Promise.resolve().then(() => {
//     console.log("Promise");
// });

// console.log("End");

console.log("Start");

process.nextTick(() => {
    console.log("nextTick");
});

console.log("End");

/*
Synchronous code
       ↓
Microtasks
       ↓
Event Loop phases
       ↓
Timers / I/O / etc.
*/