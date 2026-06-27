import {loadNotes} from "../services/notesService.js";
import { add } from "../commands/add.js";
import { list } from "../commands/list.js";
import { read } from "../commands/read.js";
import { remove } from "../commands/remove.js";
import {update} from "../commands/update.js";

export const commandChecker = (command) => {
    const firstArg = process.argv[2];

}

export const commandOrder = process.argv[2];

export const notesData = await loadNotes();

export const commandInput = (command) => {

    if(!commandOrder) {
        return "Please provide a command.";
    }

    switch(command) {
        case "add": await add(); break;
        case "list": list(); break;
        case "read": read(); break;
        case "remove": await  remove(); break;
        case "update": await update(); break;
        default: "Unknown command."; break;
    }
}