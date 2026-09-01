import http from "http"; // http module

const server = http.createServer((req, res) => {
    console.log("request header", req.headers);
    console.log("request method", req.method);
    console.log("request url", req.url);

    if(req.method === "GET" && req.url === "/") {
        res.statusCode = 200;
        res.end("Home page");
        return;
    }
    res.statusCode = 404;
    res.end("Page not found");
});

const PORT = 3000;

server.listen(PORT, "localhost", () => {
    console.log(`Server running in port ${PORT} http://localhost:${PORT}`);
});