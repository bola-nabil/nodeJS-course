import {readFileSync, writeFileSync, writeFile, appendFile,
    unlink, rename, mkdir, readdir
} from "fs";
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
// const data = await readFile("./content/result.txt", "utf-8");
// console.log(data);

// writeFile
// writeFile("./content/index.txt", "Index.html", (err) => {
//     if(err) throw err;
// });

// appendFile
// appendFile("./content/index.txt", "using with html", (err) => {
//     if(err) throw err;
// })

// unlink
// unlink("./content/test.txt", (err) => {
//     if(err) throw err;
// })

// rename
// rename("test.txt", "./content/result.txt", (err) => {
//     if(err) throw err;
// })

// mkdir
// mkdir("myFolder", (err) => {
//     if(err) throw err;
// })

// readdir
// readdir("./content", (err, files) => {
//     if(err) throw err;
//     console.log(files);
// })