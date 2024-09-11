import fs from "node:fs";

console.log("leyendo el primer archivo");
fs.readFile("./archivo.txt", "utf-8", (err, text) => {
  console.log(text);
});

console.log("hace cosas mientras lees");
console.log("leyendo el segundo archivo");
fs.readFile("./archivo2.txt", "utf-8", (err, text2) => {
  console.log(text2);
});
