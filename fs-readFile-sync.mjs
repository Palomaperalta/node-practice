import fs from "node:fs";

console.log("leyendo el primer archivo");
const text = fs.readFileSync("./archivo.txt", "utf-8");
console.log("primer texto:", text);

console.log("hace cosas mientras lees");

console.log("leyendo el segundo archivo");
const secondText = fs.readFileSync("./archivo2.txt", "utf-8");
console.log("primer texto:", secondText);
