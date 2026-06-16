import {createReadStream, createWriteStream} from "fs";
import {Transform} from "stream";

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

// Transform Stream
const upperCase = new Transform({
    transform(chunk, encoding, callback) {
        callback(null, chunk.toString().toUpperCase());
    }
});

// Real Example: Copy File
const readStr = createReadStream("./content/index.txt");
const writeStr = createWriteStream("./content/ouput.txt");

readStr.pipe(writeStr);