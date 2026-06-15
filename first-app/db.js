import {readFile, writeFile} from "fs/promises";

// add user
async function addUser(name) {

    let usersData = [];
    const users = await readFile("./database.json", "utf-8");

    usersData = JSON.parse(users);
    const lastId = usersData.length;

    const newUser = {
        id: lastId + 1,
        name: name
    };

    usersData.push(newUser);

    await writeFile("./database.json", `${JSON.stringify(usersData)}`);
}

addUser("bola");