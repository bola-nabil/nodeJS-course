import http from "http"; // http module

const server = http.createServer((req, res) => {
    if(req.method === "GET" && req.url === "/") {
        res.statusCode = 200;
        res.end("Home");
        return;
    }

    if(req.method === "GET" && req.url === "/users") {
        res.statusCode = 200;
        res.end("Users");
        return;
    }
    res.statusCode = 404;
    res.end("Not found");
});

const PORT = 3000;

server.listen(PORT, "localhost", () => {
    console.log(`Server running in port ${PORT} http://localhost/${PORT}`);
});