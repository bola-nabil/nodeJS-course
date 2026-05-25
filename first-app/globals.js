console.log(__dirname); // Current folder path
console.log(__filename); // Full current file path
console.log(process.argv); // Gets terminal arguments.


const name = process.argv[2];
console.log(`Hello ${name}`); // Bola

console.log(process.env);
const PORT = process.env.PORT || 3000; // 3000

console.log("start");
process.exit();
console.log("End"); // not print

global.name = "Bola";
console.log(global.name); // Bola

const buffer = Buffer.from("hello");
console.log(buffer); // binary

console.log(module); // details about current module