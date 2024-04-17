const fs = require("node:fs/promises");

console.log("leyendo primer archivo");
fs.readFile("./archivo.txt", "utf-8").then((text) => {
  console.log("primer texto: ", text);
});

console.log("hacer cosas mientras tanto");

console.log("leyendo segundo archivo");
fs.readFile("./archivo2.txt", "utf-8").then((text) => {
  console.log("segundo texto: ", text);
});
