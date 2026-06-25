import {readFile, writeFile} from "fs/promises";

export const loadNotes = async () => {
    try {
        const readContent = await readFile("notes.json", "utf-8");
        const content = JSON.parse(readContent);
        return content;
    } catch(err) {
        return [];
    }
}

export const saveNotes = async(notes) => {
    const data = notes;
    const dataToJson = JSON.stringify(data);
} 