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