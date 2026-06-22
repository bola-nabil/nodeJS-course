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