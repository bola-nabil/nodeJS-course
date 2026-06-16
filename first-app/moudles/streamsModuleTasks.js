import {createReadStream, createWriteStream} from "fs";
import {Transform} from "stream";

// task 1: Create a readable stream and print file content chunk by chunk
const readStream = createReadStream("./content/index.txt", "utf-8");

readStream.on("data", (chunk) => {
    console.log("Chunk:", chunk);
});

readStream.on("end", () => {
    console.log("Reading finished");
});

readStream.on("error", (err) => {
    console.log("Stream Error", err.message);
});

// task2: Create a writable stream and write your name 5 times
const writeStream = createWriteStream("./content/ouput.txt");
for(let i=0; i<5; i++) {
    writeStream.write("bola ");
}
writeStream.end();

writeStream.on("finish", () => {
    console.log("Writing finished!");
});

writeStream.on("error", (err) => {
    console.log("Stream Error", err.message);
});

// task3: Copy a file using .pipe()
const readStr = createReadStream("./content/index.txt", "utf-8");
const writeStr = createWriteStream("./content/ouput.txt");

readStr.pipe(writeStr);

writeStr.on("finish", () => {
    console.log("File copied successfully");
});

readStr.on("error", (err) => {
    console.log("Read stream error", err.message);
});

writeStr.on("error", (err) => {
    console.log("Write stream error", err.message);
});

// task4: Count number of chunks received while reading a file
const readFileStr = createReadStream("./content/index.txt", {encoding: "utf-8"});

let chunkCount = 0;

readFileStr.on("data", (chunk) => {
    chunkCount++;
    console.log("Chunk received:", chunk);
});

readFileStr.on("end", () => {
    console.log("Finish reading file");
    console.log("Total chunks:", chunkCount);
});

readFileStr.on("error", (err) => {
    console.log("Read stream error:", err.message);
});

// task5: reate a Transform stream that: converts text to lowercase, replaces spaces with -
const lowerCase = new Transform({
    transform(chunk, encoding, callback) {
        callback(null, chunk.toString().toLowerCase().replace(/ /g, "-"));
    }
});

createReadStream("./content/ouput.txt")
.pipe(lowerCase)
.pipe(createWriteStream("./content/index.txt"));

// task6: Build a mini logger: Read input file - Transform lines to uppercase - Write to output file
const upperCase = new Transform({
    transform(chunk, encoding, callback) {
        callback(null, chunk.toString().toUpperCase());
    }
});

createReadStream("./content/index.txt")
    .pipe(upperCase)
    .pipe(createWriteStream("./content/output.txt"))
    .on("finish", () => {
        console.log("Logging completed!");
    })
    .on("error", (err) => {
        console.log("Stream error:", err.message);
});