import {createReadStream, createWriteStream} from "fs";

// Readable Stream
const readStream = createReadStream("./content/index.txt", "utf-8");

readStream.on("data", (chunk) => {
    console.log("Chunk:", chunk);
});

// Writable Stream
const writeStream = createWriteStream("./content/ouput.txt");
writeStream.write("Hello ");
writeStream.write("World !");
writeStream.end();