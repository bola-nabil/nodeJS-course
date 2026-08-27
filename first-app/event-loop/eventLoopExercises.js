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

// Exercise 6
console.log("A");

process.nextTick(() => {
    console.log("B");
});

console.log("C");
// Ouput -- A C B

// Exercise 12
import fs from "fs";

console.log("1"); // step 1

setTimeout(() => { // step 7
    console.log("2");
}, 0);

setImmediate(() => { // step 6
    console.log("3");
});

Promise.resolve().then(() => { // step 4
    console.log("4");
});

process.nextTick(() => { // step 3
    console.log("5");
});

fs.readFile("test.txt", "utf8", () => { // step 5
    console.log("6");

    process.nextTick(() => {
        console.log("7");
    });

    Promise.resolve().then(() => {
        console.log("8");
    });

    setTimeout(() => {
        console.log("9");
    }, 0);

    setImmediate(() => {
        console.log("10");
    });
});

console.log("11"); // step 2
// Ouput -- 1 11 5 4 6 7 8 10 9 32