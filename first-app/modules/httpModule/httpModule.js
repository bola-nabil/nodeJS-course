import http from "http"; // http module

const server = http.createServer((req, res) => {
    res.writeHead(200, {
        "content-type": "text/html"
    });
    res.write("<h1>NovaCart Project</h1>");
    res.write("<h1>Hello welcome</h1>");
    res.end();
});

const PORT = 3000;

server.listen(PORT, "localhost", () => {
    console.log(`Server running in port ${PORT} http://localhost:${PORT}`);
});

server.on("error", (error) => {
    console.error("Server Error", error.message);
});

server.close(() => {
    console.log("Server closed");
})