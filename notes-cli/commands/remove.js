import {commandChecker, commandOrder, notesData} from "../utils/fileHelper.js";

export const remove = () => {
    commandChecker("remove");

    const target = process.argv[3];

    if(commandOrder === "remove") {
        const filteredNotes = notesData.filter(
            note => note.title !== target
        );

        if (filteredNotes.length === notesData.length) {
            return "Note not found";
        }

        return "Successfully removed";
    }
}