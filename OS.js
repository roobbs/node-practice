const os = require("node:os");

console.log("informacion de SO");
console.log("-------------");
console.log("Nombre del SO", os.platform);
console.log("Version del SO", os.release);
console.log("Arquitectura del SO", os.arch);
console.log("Cpus del SO", os.cpus());
console.log("Memoria Libre", os.freemem() / 1024 / 1024);
console.log("Memoria Total", os.totalmem() / 1024 / 1024);
