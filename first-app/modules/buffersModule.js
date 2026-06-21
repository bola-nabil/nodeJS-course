// Creates an empty buffer filled with zeros
const buffer = Buffer.alloc(4); // <Buffer 00 00 00 00>

// Create a buffer from a string
const bufferFromString = Buffer.from("Hello"); // <Buffer 48 65 6c 6c 6f>

// Converting Buffer to String
const covertingStringBuffer = bufferFromString.toString(); // Hello

// Changing Data
const bufferData = Buffer.from("ABC");
bufferData[0] = 68; // DBC

// Buffer Length
const bufferWord = Buffer.from("Hello");
let bufferWordLength = bufferWord.length; // 5 -- Each English character = 1 byte

// Writing Into Buffer
const bufferNewWord = Buffer.alloc(10);
bufferNewWord.write("Node");
// console.log(bufferNewWord.toString()); -- Node

// Copying Buffers
const source = Buffer.from("Hello");
const target = Buffer.alloc(5);

source.copy(target);
// console.log(target.toString()); -- Hello

// Concatenating Buffer
const b1 = Buffer.from("hello ");
const b2 = Buffer.from("world");
const result = Buffer.concat([b1, b2]);
// console.log(result.toString()); -- hello world