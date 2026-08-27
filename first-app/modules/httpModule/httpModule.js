import http from "http"; // http module

const server = http.createServer((req, res) => {

    res.writeHead(200,  { 'Content-Type': 'text/plain' });
    res.end("Hello world\n")
});

const PORT = 3000;

server.listen(PORT, "localhost", () => {
    console.log(`Server running in port ${PORT} localhost`);
});