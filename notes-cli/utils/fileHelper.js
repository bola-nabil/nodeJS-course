import {loadNotes} from "../services/notesService.js";
import { add } from "../commands/add.js";
import { list } from "../commands/list.js";
import { read } from "../commands/read.js";
import { remove } from "../commands/remove.js";
import {update} from "../commands/update.js";

export const commandOrder = process.argv[2];
export const notesData = await loadNotes();

export const commandInput = async (command) => {

    if(!commandOrder) {
        return "Please provide a command.";
    }

    switch(command) {
        case "add": 
            return await add(); break;
        case "list": 
            return list(); break;
        case "read": 
            return read(); break;
        case "remove": 
            return await  remove(); break;
        case "update":
            return  await update(); break;
        default: "Unknown command.";
    }
}