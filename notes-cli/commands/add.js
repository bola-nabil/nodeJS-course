import { loadNotes, saveNotes } from "../services/notesService.js";

export const add = async() => {
    const secondArg = process.argv[3];

    if (!secondArg) {
        return "Please provide a note title.";
    }

    const notesData = await loadNotes();
    
    const duplicate = notesData.some(
        note => note.title === secondArg
    );

    if (duplicate) {
        return "Note already exists.";
    }

   const newId =
  notesData.length === 0
    ? 1
    : notesData[notesData.length - 1].id + 1;

   const objectData = {
     id: newId,
     title: secondArg,
     createdAt: new Date().toISOString(),
   }

   notesData.push(objectData);
   await saveNotes(notesData);
   return "Note added successfully.";
}