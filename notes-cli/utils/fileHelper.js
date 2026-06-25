import {loadNotes} from "../services/notesService.js";

export const commandChecker = (command) => {
    const firstArg = process.argv[2];
    const secondArg = process.argv[3];

    if(!firstArg) {
        return "Please provide a command.";
    }

    if(firstArg !== command) {
            return "Unknown command.";
    }
}

export const commandOrder = process.argv[2];

export const notesData = await loadNotes();