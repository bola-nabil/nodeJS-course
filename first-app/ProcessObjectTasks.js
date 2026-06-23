// Task 1
console.log(process.pid);
console.log(process.ppid);
console.log(process.version);
console.log(process.platform);
console.log(process.arch);

// Task 2
const currentDir = process.cwd();
console.log("Current Dir:", currentDir);
process.chdir("../");
console.log("Dir After Changed:", process.cwd());

// Task 3
const num1 = Number(process.argv[2]);
const num2 = Number(process.argv[3]);
console.log(`Sum = ${num1 + num2}`);

// Task 4
const name = process.argv[2];
const country = process.argv[3];
const greeting = `Hello ${name} from ${country}`;
console.log(greeting);