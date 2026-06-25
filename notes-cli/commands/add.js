export const addCommand = () => {
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

   return `${firstCommand}\n${secondCommand}`;
}