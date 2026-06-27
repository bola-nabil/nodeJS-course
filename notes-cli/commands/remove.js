import {commandChecker, commandOrder, notesData} from "../utils/fileHelper.js";
import {saveNotes} from "../services/notesService.js";

export const remove = async() => {
    commandChecker("remove");

    const target = process.argv[3];

    if(commandOrder === "remove") {
        const filteredNotes = notesData.filter(
            note => note.title !== target
        );

        if (filteredNotes.length === notesData.length) {
            return "Note not found";
        }

        await saveNotes(filteredNotes)
        return "Successfully removed";
    }
}