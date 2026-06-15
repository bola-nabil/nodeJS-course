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

// second task
const orderData = {
    id: 101,
    product: "Laptop",
    price: 1500
};

emitter.on("orderCreated", ({id}) => {
    console.log(`Order #${id} created`)
});

emitter.on("orderCreated", ({product}) => {
    console.log(`Product ${product}`)
});

emitter.on("orderCreated", ({price}) => {
    console.log(`Price $${price}`)
});

emitter.emit("orderCreated", orderData);
