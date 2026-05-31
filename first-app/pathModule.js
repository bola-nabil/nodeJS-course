import {sep, join, basename, dirname, extname, resolve} from "path";
import {fileURLToPath} from "url";

// console.log(sep); - \ 

// console.log(basename(filePath)); // print file name

const fileNameWithoutExt = basename("/app/src/App.jsx", ".jsx");
// console.log(fileNameWithoutExt);

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// extname
console.log(extname("index.html")); // html
console.log(extname("index.conffe.html")); // html
console.log(extname("index.")); // .
console.log(extname("index")); // 
console.log(extname(".index")); // 

// join
const filePath = join("src", "components", "Greeting.jsx"); // join path
console.log(join('/users', '../system', './logs', 'file.txt'));

// resolve
console.log(resolve("file.txt"));
console.log(resolve("/src", "components", "Users.jsx"));
console.log(__dirname, "config", "app.json");