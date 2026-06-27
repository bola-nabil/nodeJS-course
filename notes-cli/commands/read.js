import {commandChecker, commandOrder, notesData} from "../utils/fileHelper.js";

export const read = () => {
    commandChecker("read");

    const target = process.argv[3];

    const foundSearch = notesData.find((data) => data.title === target);

    if(commandOrder === "read") {
        return foundSearch;
    }
}