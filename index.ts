import express from "express";

const app = express();
const port = 3000;

app.get("/", (_, res) => {
  res.send("API de pan dulces");
});

app.listen(port, () => {
  console.log(`Pan dulces API corriendo en puerto ${port}`);
});
