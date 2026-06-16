import {userInfo, uptime, type, release, totalmem, freemem
    , platform, arch, hostname, homedir, version, cpus, networkInterfaces
} from "os";

// userInfo() // give information about user os
const userDetails = userInfo();

// time of os
const time = uptime();

// information about os
const currentOS = {
    name: type(),
    release: release(),
    memory: (totalmem() / 1024 / 1024 / 1024).toFixed(2),
    freeSpace: freemem()
};

// console.log(platform()); - win32
// console.log(arch()) - x64
// console.log(hostname()) - name of device
// console.log(homedir()) -- home dir
// console.log(version())


// User and Environment
const user = userInfo();
console.log("username: ", user.username);
console.log("user id: ", user.uid);
console.log("group id", user.gid);
console.log("group id", user.homedir);

// CPU Information
const cpu = cpus();
console.log(cpu)

console.log(networkInterfaces());