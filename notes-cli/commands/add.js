import { loadNotes, saveNotes } from "../services/notesService.js";

export const addCommand = async() => {
    const firstArg = process.argv[2];
    const secondArg = process.argv[3];

   const firstCommand = `Command: ${firstArg}`;
   const secondCommand = `Title: ${secondArg}`;

   if(!firstArg) {
        return "Please provide a command.";
   }

   if(firstArg !== "add") {
        return "Unknown command.";
   }
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