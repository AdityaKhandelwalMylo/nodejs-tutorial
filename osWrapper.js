const os = require("os");

//Platform
console.log(os.platform());

//CPU architecture
console.log(os.arch());

//CPU core info
console.log(os.cpus().length);

//Free memory and total memory
console.log(os.freemem(), os.totalmem());

//home dir
console.log(os.homedir(), os.hostname());

//uptime
console.log(os.uptime());
