import {createReadStream} from "fs";

// Readable Stream
const readStream = createReadStream("./content/index.txt", "utf-8");

readStream.on("data", (chunk) => {
    console.log("Chunk:", chunk);
})