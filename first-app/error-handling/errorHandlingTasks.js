// task 1: Throw an error if b equals 0
function divide(a, b) {
    if(b === 0) {
        throw new Error("Can't divide by zero");
    }

    return a / b;
}

try {
   console.log(divide(15, 0));
} catch(err) {
    console.log(err.message);
}

// task 2
import {readFile} from "fs";

readFile("users.txt", "utf-8", (err, data) => {
    if(err) {
        console.log("File not found");
        return;
    }

    console.log(data);
});

// task 3
try {
    const data = JSON.parse('{"name": "Ali"}');
    console.log(data);
} catch (err) {
    console.log("Error:", err.message);
}