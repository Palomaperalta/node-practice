const http = require("node:http");
const { findAvaiablePort } = require("./free-port.js");

const server = http.createServer((req, res) => {
  console.log("request recieved");
  res.end("Hola mundo ");
});

findAvaiablePort(3000).then((port) => {
  server.listen(port, () => {
    console.log(`server listening on http://localhost:${port}`);
  });
});
