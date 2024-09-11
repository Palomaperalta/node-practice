import fs from "node:fs";

fs.readdir(".", (err, files) => {
  if (err) {
    console.log("error al leer el directorio", err);
    return;
  }

  files.forEach((file) => {
    console.log(file);
  });
});
