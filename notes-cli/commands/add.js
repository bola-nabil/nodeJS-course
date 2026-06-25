export const addCommand = () => {
    const firstArg = process.argv[2];
    const secondArg = process.argv[3];

   const firstCommand = `Command: ${firstArg}`;
   const secondCommand = `Title: ${secondArg}`;

   console.log(`${firstCommand}\n${secondCommand}`);
}