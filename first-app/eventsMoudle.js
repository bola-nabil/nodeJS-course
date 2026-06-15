import {EventEmitter} from 'events';
const customEmitter = new EventEmitter();

// first example
customEmitter.on("response", () => {
    console.log("Server Response");
});

customEmitter.on("response", () => {
    console.log("second event");
});
customEmitter.emit("response");

// Passing Data with Events
customEmitter.on("userLogin", (username) => {
    console.log(`Welcome ${username}`);
});

customEmitter.emit("userLogin", "bola");

// Multiple Parameters
customEmitter.on("login", (username, age) => {
    console.log(`Login ${username} - ${age}`);
});

customEmitter.emit("login", "bola", 22);