import {add} from "./commands/add.js";
import {list} from "./commands/list.js";
import {read} from "./commands/read.js";

const addCommand = await add();
console.log(addCommand);

// list command
const listCommand = list();
console.log(listCommand);

// read command
const readCommand = read();
console.log(readCommand);