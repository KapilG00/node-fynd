const os = require("node:os");

const user = os.userInfo();
console.log("user:", user);

const nameOfOS = os.type();
console.log("nameOfOS:", nameOfOS);

const noOfCpu = os.cpus();
console.log("noOfCpu:", noOfCpu, noOfCpu.length);

const totalMemory = os.totalmem();
console.log("totalMemory:", totalMemory);
