// task 1
const bufferTask1 = Buffer.from("NodeJS");
console.log(bufferTask1);
console.log(bufferTask1.toString());

// task 2
const bufferTask2 = Buffer.alloc(8);
bufferTask2.write("Backend");
console.log(bufferTask2.toString());