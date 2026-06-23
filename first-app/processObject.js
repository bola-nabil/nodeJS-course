// Process ID (PID)
const processId = process.pid;

// Parent Process ID
const parentProcessId = process.ppid;

// Node.js Version
const nodeVersion = process.version;
console.log(nodeVersion);

// Platform
const platformProcess = process.platform;
console.log("Platform:", platformProcess); // win32

// CPU Architecture
const cpuProcess = process.arch;
console.log("CPU process:", cpuProcess); // x64

// Current Working Directory
const currentDir = process.cwd();
console.log("Current Dir:", currentDir);