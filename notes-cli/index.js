import {add} from "./commands/add.js";
import {loadNotes, saveNotes} from "./services/notesService.js";

const addCommand = await add();
console.log(addCommand);