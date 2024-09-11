import fs from "node:fs/promises";

console.log("leyendo el primer archivo");
fs.readFile("./archivo.txt", "utf-8").then((text) => {
  console.log("primer texto", text);
});

console.log("hace cosas mientras lees");
console.log("leyendo el segundo archivo");
fs.readFile("./archivo2.txt", "utf-8").then((text) => {
  console.log("segundo texto", text);
});
