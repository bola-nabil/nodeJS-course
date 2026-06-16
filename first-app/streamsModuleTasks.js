import {createReadStream, createWriteStream} from "fs";

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