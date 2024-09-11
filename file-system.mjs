import fs from "node:fs";

const stats = fs.statSync("./archivo.txt");

console.log(stats.isFile(), stats.isDirectory());
