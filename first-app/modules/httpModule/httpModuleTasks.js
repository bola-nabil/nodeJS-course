import http from "http";

const server = http.createServer((req, res) => {

    // GET /
    if (req.method === "GET" && req.url === "/") {
        res.statusCode = 200;
        res.end("Welcome to my API");
        return;
    }

    // GET /users
    if (req.method === "GET" && req.url === "/users") {
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");

        res.end(
            JSON.stringify([
                {
                    id: 1,
                    name: "Bola Nabil",
                    age: 17
                }
            ])
        );

        return;
    }

    // GET /products
    if (req.method === "GET" && req.url === "/products") {
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");

        res.end(
            JSON.stringify([
                {
                    id: 1,
                    title: "IPhone 17 Pro",
                    price: "5000$"
                }
            ])
        );

        return;
    }

    // POST /users
    if (req.method === "POST" && req.url === "/users") {
        res.statusCode = 201;
        res.end("Created");
        return;
    }

    // DELETE /users
    if (req.method === "DELETE" && req.url === "/users") {
        res.statusCode = 204;
        res.end();
        return;
    }

    // 404
    res.statusCode = 404;
    res.end("Not Found");
});

const PORT = 5000;

server.listen(PORT, "localhost", () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});