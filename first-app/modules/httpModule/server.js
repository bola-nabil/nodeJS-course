import http from "http";

const server = http.createServer((req, res) => {
    res.setHeader("Content-Type", "text/html");

    console.log("Request header", req.headers);
    
    if(req.method === "GET" && req.url === "/") {
        res.statusCode = 200;
         res.end(`
            <h1>Home Page</h1>

            <nav>
                <a href="/">Home</a>
                <a href="/about">About</a>
                <a href="/contact">Contact</a>
            </nav>
        `);
        return;
    }

    if(req.method === "GET" && req.url === "/about") {
        res.statusCode = 200;
        res.end(`
            <h1>About Page</h1>
            <a href="/">Home</a>
        `);
        return;
    }

    if(req.method === "GET" && req.url === "/contact") {
        res.statusCode = 200;
        res.end(`
            <h1>Contact Page</h1>
            <a href="/">Home</a>
        `);
        return;
    }

    res.statusCode = 404;
    res.end("<h1>Page not found</h1>");
});

const PORT = 5000;

server.listen(PORT, "localhost", () => {
    console.log(`Server running in http://localhost:${PORT}`);
});