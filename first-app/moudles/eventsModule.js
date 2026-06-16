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

// once -- run only one time
customEmitter.once("welcome", () => {
    console.log("welcome");
});

customEmitter.emit("welcome"); // run only
customEmitter.emit("welcome");

// off -- remove listener
function greet() {
    console.log("hello");
}

customEmitter.on("greet", greet);
customEmitter.off("greet", greet);
customEmitter.emit("greet"); // noting

// removeAllListeners -- remove all listeners for an events
customEmitter.removeAllListeners("greet");
customEmitter.emit("greet"); // nothing

// Listener Count
function hi() {
    console.log("hi");
}
customEmitter.on("hi", hi);
customEmitter.on("hi", hi);
customEmitter.on("hi", hi);
console.log(customEmitter.listenerCount("hi")); // output 3

// real world example
customEmitter.on("userRegistered", (user) => {
    console.log(`Welcome ${user}`);
});

customEmitter.on("userRegistered", (user) => {
    console.log(`Send email to ${user}`);
});

function registerUser(name) {
    console.log("User Saved");

    customEmitter.emit("userRegistered", name);
}

registerUser("bola");