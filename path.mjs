import path from "node:path";
//barra separadora de carpetas segun sist operativo
console.log(path.sep);

//unir rutas
const filePath = path.join("content", "subfolder", "test.txt");
console.log(filePath);

//nombre archivo
const base = path.basename("/tmp/palo-files/password.txt");
console.log(base);
// nos da la extension correcta
const extension = path.extname("image.jpg");
console.log(extension);
