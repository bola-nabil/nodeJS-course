import { loadNotes } from "../services/notesService";

export const list = () => {
      const notesData = await loadNotes();

      if (notesData.length === 0) {
          return "No notes found.";
      }

      const data = notesData.map((data) => {
        return  `ID: ${data.id}\nTitle: ${data.title}\nCreated: ${data.createdAt}`
      });

      return data.join("\n\n");
}