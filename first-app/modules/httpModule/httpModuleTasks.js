import http from "http";

// const server = http.createServer((req, res) => {
//     // GET /
//     if (req.method === "GET" && req.url === "/") {
//         res.statusCode = 200;
//         res.end("Welcome to my API");
//         return;
//     }

//     // GET /users
//     if (req.method === "GET" && req.url === "/users") {
//         res.statusCode = 200;
//         res.setHeader("Content-Type", "application/json");

//         res.end(
//             JSON.stringify([
//                 {
//                     id: 1,
//                     name: "Bola Nabil",
//                     age: 17
//                 }
//             ])
//         );

//         return;
//     }

//     // GET /products
//     if (req.method === "GET" && req.url === "/products") {
//         res.statusCode = 200;
//         res.setHeader("Content-Type", "application/json");

//         res.end(
//             JSON.stringify([
//                 {
//                     id: 1,
//                     title: "IPhone 17 Pro",
//                     price: "5000$"
//                 }
//             ])
//         );

//         return;
//     }

//     // POST /users
//     if (req.method === "POST" && req.url === "/users") {
//         res.statusCode = 201;
//         res.end("Created");
//         return;
//     }

//     // DELETE /users
//     if (req.method === "DELETE" && req.url === "/users") {
//         res.statusCode = 204;
//         res.end();
//         return;
//     }

//     // 404
//     res.statusCode = 404;
//     res.end("Not Found");
// });

// const PORT = 5000;

// server.listen(PORT, "localhost", () => {
//     console.log(`Server is running at http://localhost:${PORT}`);
// });

// small Books API

const books = [
    {
        id: 1,
        title: "Clean Code",
        author: "Robert C. Martin"
    },
    {
        id: 2,
        title: "Atomic Habits",
        author: "James Clear"
    }
];

const server = http.createServer((req, res) => {

    // GET /books
    if (req.method === "GET" && req.url === "/books") {
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        res.end(JSON.stringify(books));
        return;
    }

    // GET /books/:id
    if (req.method === "GET" && req.url.startsWith("/books/")) {

        const bookId = Number(req.url.split("/")[2]);

        const book = books.find((book) => book.id === bookId);

        if (!book) {
            res.statusCode = 404;
            res.end("Book not found");
            return;
        }

        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        res.end(JSON.stringify(book));
        return;
    }

    // POST /books
    if (req.method === "POST" && req.url === "/books") {

        let body = "";

        req.on("data", (chunk) => {
            body += chunk;
        });

        req.on("end", () => {
            const newBook = JSON.parse(body);

            const book = {
                id: books.length + 1,
                ...newBook
            };

            books.push(book);

            res.statusCode = 201;
            res.setHeader("Content-Type", "application/json");
            res.end(JSON.stringify(book));
        });

        return;
    }

    // PATCH /books/:id
    if (req.method === "PATCH" && req.url.startsWith("/books/")) {

        const bookId = Number(req.url.split("/")[2]);

        const book = books.find((book) => book.id === bookId);

        if (!book) {
            res.statusCode = 404;
            res.end("Book not found");
            return;
        }

        let body = "";

        req.on("data", (chunk) => {
            body += chunk;
        });

        req.on("end", () => {
            const updates = JSON.parse(body);

            Object.assign(book, updates);

            res.statusCode = 200;
            res.setHeader("Content-Type", "application/json");
            res.end(JSON.stringify(book));
        });

        return;
    }

    // DELETE /books/:id
    if (req.method === "DELETE" && req.url.startsWith("/books/")) {

        const bookId = Number(req.url.split("/")[2]);

        const bookIndex = books.findIndex(
            (book) => book.id === bookId
        );

        if (bookIndex === -1) {
            res.statusCode = 404;
            res.end("Book not found");
            return;
        }

        books.splice(bookIndex, 1);

        res.statusCode = 204;
        res.end();

        return;
    }

    // 404
    res.statusCode = 404;
    res.end("404 Not Found");
});

const PORT = 5000;

server.listen(PORT, "localhost", () => {
    console.log(`Server running at http://localhost:${PORT}`);
});