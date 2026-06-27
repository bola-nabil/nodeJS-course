import { loadNotes, saveNotes } from "../services/notesService.js";

export const add = async() => {
    const secondArg = process.argv[3];
    const notesData = await loadNotes();

   const newId =
  notesData.length === 0
    ? 1
    : notesData[notesData.length - 1].id + 1;

   const objectData = {
     id: newId,
     title: secondArg,
     createdAt: new Date().toISOString(),
   }

   const titleData = notesData.map((data) => data.title);

   if(titleData.includes(secondArg)) {
     return "Note already exists.";
   }

   notesData.push(objectData);
   await saveNotes(notesData);
   return "Note added successfully.";
}