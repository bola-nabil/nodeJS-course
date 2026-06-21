// Creates an empty buffer filled with zeros
const buffer = Buffer.alloc(4); // <Buffer 00 00 00 00>

// Create a buffer from a string
const bufferFromString = Buffer.from("Hello"); // <Buffer 48 65 6c 6c 6f>

// Converting Buffer to String
const covertingStringBuffer = bufferFromString.toString(); // Hello