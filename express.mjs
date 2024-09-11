import express from "express";
const app = express();

const PORT = process.env.PORT ?? 1234;
app.disable("x-powered-by");

app.get("/", (req, res) => {
  res.send("<hi> Mi Pagina </h1>");
});

app.use((req, res) => {
  res.status(404).send("<hi>404</h1>");
});

app.listen(PORT, () => {
  console.log(`server listening on port http://localhost:${PORT}`);
});
