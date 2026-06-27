import {add} from "./commands/add.js";
import {list} from "./commands/list.js";

const addCommand = await add();
console.log(addCommand);

// list command
const listCommand = await list();
console.log(listCommand);