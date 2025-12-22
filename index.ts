import express from "express";
import { db } from "./db/client";
import { SweetBreadService } from "./services/sweetBreadService";

const app = express();
const port = 3000;

app.use(express.json());

const sweatBreadService = new SweetBreadService(db);

app.get("/", (_, res) => {
  res.send("API de pan dulces");
});

app
  .route("/api/v1/pan-dulces")
  .post(async (req, res) => {
    console.log(req.body);

    console.log("createing sweet bread");
    const result = await sweatBreadService.createSweetBread(req.body);
    console.log("sweet bread created");

    res.send(result);
  })
  .get(async (_, res) => {
    console.log("retrieving all sweet bread");
    const result = await sweatBreadService.getAllSweetBread();
    console.log("all sweet bread retrieved");

    res.send(result);
  });

app.listen(port, () => {
  console.log(`Pan dulces API corriendo en puerto ${port}`);
});
