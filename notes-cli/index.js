import {addCommand} from "./commands/add.js";
import {loadNotes, saveNotes} from "./services/notesService.js";

const add = await addCommand();
console.log(add);