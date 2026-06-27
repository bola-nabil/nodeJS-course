import {notesData} from "../utils/fileHelper.js";

export const read = () => {
    const target = process.argv[3];

    const foundSearch = notesData.find((data) => data.title === target);

    if(foundSearch) {
        return `ID: ${foundSearch.id}\nTitle: ${foundSearch.title}\nCreated: ${foundSearch.createdAt}`;
    } else {
        return "Note not found.";
    }
}