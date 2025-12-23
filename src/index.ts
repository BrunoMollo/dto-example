import express from "express";
import { db } from "./db/client";
import { SweetBreadService } from "./services/sweetBreadService";
import { apiRoutes } from "./routes/api";
import { configureSwagger } from "./config/swagger";

const app = express();
const port = 3000;

app.use(express.json());
configureSwagger(app, { port });

const sweatBreadService = new SweetBreadService(db);

apiRoutes(app, { sweatBreadService });

app.listen(port, () => {
  console.log(`Pan dulces API corriendo en puerto ${port}`);
});
