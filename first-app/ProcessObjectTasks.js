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