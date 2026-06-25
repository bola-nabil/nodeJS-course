import {addCommand} from "./commands/add.js";
import {loadNotes} from "./services/notesService.js";

const add = addCommand();
console.log(add);

const notesData = loadNotes();
console.log(notesData);