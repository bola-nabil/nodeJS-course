// task 1
const bufferTask1 = Buffer.from("NodeJS");
console.log(bufferTask1);
console.log(bufferTask1.toString());

// task 2
const bufferTask2 = Buffer.alloc(8);
bufferTask2.write("Backend");
console.log(bufferTask2.toString());

// task 3
const bufferTask3 = Buffer.from("ABCDEF");
bufferTask3[0] = 90;
console.log(bufferTask3.toString());

// task 4
const b1 = Buffer.from("Hello ");
const b2 = Buffer.from("Node");
const result = Buffer.concat([b1, b2]);
console.log(result.toString());

// task 5
const bufferTask5 = Buffer.from("Hello World");
console.log(bufferTask5.toString("base64"));
const decodeBuffer = Buffer.from("SGVsbG8gV29ybGQ=", "base64");
console.log(decodeBuffer.toString());

// task 6 
import {readFile} from "fs/promises";

const fileContent = await readFile("../content/index.txt");
console.log(fileContent);
const fileContentLength = fileContent.length;
console.log(fileContentLength);
console.log(fileContent.toString());

// task 7
import {createReadStream} from "fs";

const readStream = createReadStream("../content/index.txt");

readStream.on("data", (chunk) => {
    console.log(chunk.length);
    console.log("Reading...");
});

readStream.on("end", () => {
    console.log("Done!");
});

readStream.on("error", (err) => {
    console.log("Mistake happend when reading data", err.message);
});