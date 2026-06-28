import { notesData } from "../utils/fileHelper.js";
import { saveNotes } from "../services/notesService.js";

export const update = async() => {
    const oldTitle = process.argv[3];
    const newTitle = process.argv[4];

     const duplicateTitle = notesData.some(
        note => note.title === newTitle
    );

    if (duplicateTitle) {
        return "A note with this title already exists.";
    }

    notesData.map(note => {
        if(note.title === oldTitle) {
           return {
            ...note,
            title: newTitle
           }
        }
    });

    await saveNotes(update);
}