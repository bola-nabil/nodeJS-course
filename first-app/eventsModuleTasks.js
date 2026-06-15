// first task
import EventEmitter from "events";

const emitter = new EventEmitter();

emitter.on("newUser", (username) => {
    console.log(`User registered ${username}`);
});

emitter.on("newUser", (username) => {
    console.log(`Sending welcome email ${username}`)
});

emitter.emit("newUser", "Ahmed");