import {readFile} from "fs/promises";

export const loadNotes = async () => {
    const readContent = await readFile("notes.json", "utf-8");

    const content = JSON.parse(readContent);
}