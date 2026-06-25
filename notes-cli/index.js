import {addCommand} from "./commands/add.js";
import {loadNotes, saveNotes} from "./services/notesService.js";

const add = addCommand();
console.log(add);

const notesData = await loadNotes();
console.log(notesData);

const saveNotesData = await saveNotes([{"id": 1}]);
console.log(saveNotesData);