// first
console.log("A");
console.log("B");
console.log("C");
// output -- A B C

// second
console.log("A");

setTimeout(() => {
    console.log("B");
}, 0);

console.log("C");
// ouput -- A C B

// third
console.log("Start");

setTimeout(() => {
    console.log("Timer");
}, 1000);

console.log("End");
// Output -- Start End Timer

// forth
console.log("A");

Promise.resolve().then(() => {
    console.log("B");
});

console.log("C");
// output -- A C B

// Exercise 5
console.log("A");

setTimeout(() => {
    console.log("B");
}, 0);

Promise.resolve().then(() => {
    console.log("C");
});

console.log("D");
// Ouput -- A D C B