// Task 1
console.log(process.pid);
console.log(process.ppid);
console.log(process.version);
console.log(process.platform);
console.log(process.arch);

// Task 2
const currentDir = process.cwd();
console.log("Current Dir:", currentDir);
// process.chdir("../");
// console.log("Dir After Changed:", process.cwd());

// Task 3
const num1 = Number(process.argv[2]);
const num2 = Number(process.argv[3]);
console.log(`Sum = ${num1 + num2}`);

// Task 4
const name = process.argv[2];
const country = process.argv[3];
const greeting = `Hello ${name} from ${country}`;
console.log(greeting);

// Task 5
// set FAVORITE_LANGUAGE=JavaScript
console.log(process.env.FAVORITE_LANGUAGE);

// Task 6
import dotenv from "dotenv";
dotenv.config();
console.log(`App Name: ${process.env.APP_NAME}`);
console.log(`App Port: ${process.env.PORT}`);

// Task 7
const username = process.argv[2];

if (!username) {
    console.log("Username is required");
    process.exit(1);
}

console.log(`Welcome ${username}`);

// Task 8
process.on("exit", (code) => {
    console.log("Thanks for using this app");
});

// Final Project

const userName = process.argv[2];
const userAge = process.argv[3];

// 1. Validate FIRST
if (!userName) {
    console.log("❌ Username is required");
    process.exit(1);
}

// 2. Main output
console.log(`Welcome ${userName} - Your age is: ${userAge}`);
console.log("Current Dir:", process.cwd());
console.log(`Process ID: ${process.pid}`);
console.log(`Platform: ${process.platform}`);

// 3. Memory usage (fixed)
const memory = process.memoryUsage();
console.log(`Memory Usage: ${(memory.rss / 1024 / 1024).toFixed(2)} MB`);

// 4. Exit event
process.on("exit", (code) => {
    console.log("Exit Program");
});