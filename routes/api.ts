import type { Express } from "express";
import type { SweetBreadService } from "../services/sweetBreadService";

export function apiRoutes(
  app: Express,
  services: { sweatBreadService: SweetBreadService },
) {
  const sweatBreadService = services.sweatBreadService;

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

  return app;
}
