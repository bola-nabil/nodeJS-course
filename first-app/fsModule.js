import {readFileSync, writeFileSync} from "fs";

const testingContent = readFileSync("./content/test.txt", "utf-8");

// writeFileSync
writeFileSync("./content/result.txt", "Result of test"); // create result file
const readResultTesting = readFileSync("./content/result.txt", "utf-8");
