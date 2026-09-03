import http from "http";

const server = http.createServer((req, res) => {
    if(req.method === "GET" && req.url === "/") {
        res.setHeader("Content-Type", "application/json");

        res.end(JSON.stringify({
            "name": "bola",
            "age": 25
        }));
    }
});

const PORT = 5000;

server.listen(PORT, "localhost", () => {
    console.log(`Server running in http://localhost:${PORT}`);
});