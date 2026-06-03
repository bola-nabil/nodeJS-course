import {readFileSync} from "fs";

const testingContent = readFileSync("./content/test.txt", "utf-8");
console.log(testingContent);