import {createReadStream} from "fs";

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