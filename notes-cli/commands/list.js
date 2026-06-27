import {commandChecker, commandOrder, notesData} from "../utils/fileHelper.js"

export const list = () => {
      const data = notesData.map((data) => {
        return  `ID: ${data.id}\nTitle: ${data.title}\nCreated: ${data.createdAt}`
      });

      return data.toString();
}