import { loadNotes } from "../services/notesService";

export const read = () => {
    const target = process.argv[3];

    if (!target) {
        return "Please provide a note title.";
    }
    
    const notesData = await loadNotes();

    const foundSearch = notesData.find((data) => data.title === target);

    if(foundSearch) {
        return `ID: ${foundSearch.id}\nTitle: ${foundSearch.title}\nCreated: ${foundSearch.createdAt}`;
    } else {
        return "Note not found.";
    }
}