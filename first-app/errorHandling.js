// The Error Object
const err = new Error("Something went wrong");
// console.log(err.message);
// console.log(err.name);
// console.log(err.stack);

// Throwing Your Own Errors
function divide(a, b) {
    if(b === 0) {
        throw new Error("Cannot divide by zero");
    }

    return a / b;
}

try {
    divide(10, 0);
} catch(err) {
    console.log(err.message);
}

// Error Handling in Callback APIs
import {readFile} from "fs";

readFile("./content/index.txt", "utf-8", (data, err) => {
    if(err) {
        console.log("Error", err.message);
        return;
    }

    console.log("Data", data);
});