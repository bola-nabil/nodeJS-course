import {readFileSync, writeFileSync} from "fs";
import {readFile} from "fs/promises";

// const testingContent = readFileSync("./content/test.txt", "utf-8");

// writeFileSync
// writeFileSync("./content/result.txt", "Result of test"); // create result file
// const readResultTesting = readFileSync("./content/result.txt", "utf-8");

// readFile
// readFile("./content/test.txt", "utf-8", (err, data) => {
//     if(err) throw err;
//     console.log(data);
// })

// readFile Modern version
const data = await readFile("./content/result.txt", "utf-8");
console.log(data);