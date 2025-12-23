import type { Express } from "express";
import type { SweetBreadService } from "../services/sweetBreadService";

export function apiRoutes(
  app: Express,
  services: { sweatBreadService: SweetBreadService },
) {
  const sweatBreadService = services.sweatBreadService;

  app
    .route("/api/v1/pan-dulces")
    /**
     * @swagger
     * /api/v1/pan-dulces:
     *   post:
     *     summary: Crear un nuevo pan dulce
     *     description: Crea un nuevo pan dulce en el sistema
     *     requestBody:
     *       required: true
     *       content:
     *         application/json:
     *           schema:
     *             type: object
     *             required:
     *               - id
     *               - name
     *               - type
     *               - weight_in_grams
     *               - brand
     *               - tier
     *             properties:
     *               id:
     *                 type: integer
     *                 example: 1
     *               name:
     *                 type: string
     *                 example: "Pan de Pascua"
     *               type:
     *                 type: string
     *                 enum: ["CANDIED_FRUIT", "CHOCOLATE_CHIPS", "PLAIN"]
     *                 example: "CANDIED_FRUIT"
     *               weight_in_grams:
     *                 type: number
     *                 example: 500
     *               brand:
     *                 type: string
     *                 example: "La Universal"
     *               tier:
     *                 type: string
     *                 enum: ["LOW_COST", "STANDARD", "PREMIUM"]
     *                 example: "PREMIUM"
     *     responses:
     *       201:
     *         description: Pan dulce creado exitosamente
     *       400:
     *         description: Error en los datos de entrada
     *       500:
     *         description: Error interno del servidor
     *     tags:
     *       - Pan Dulces
     */
    .post(async (req, res) => {
      console.log(req.body);

      console.log("createing sweet bread");
      await sweatBreadService.createSweetBread(req.body);
      console.log("sweet bread created");

      res.status(201).send({ created: true });
    })
    /**
     * @swagger
     * /api/v1/pan-dulces:
     *   get:
     *     summary: Obtener todos los pan dulces
     *     description: Recupera una lista de todos los pan dulces disponibles en el sistema
     *     responses:
     *       200:
     *         description: Lista de pan dulces obtenida exitosamente
     *       500:
     *         description: Error interno del servidor
     *     tags:
     *       - Pan Dulces
     */
    .get(async (_, res) => {
      console.log("retrieving all sweet bread");
      const result = await sweatBreadService.getAllSweetBread();
      console.log("all sweet bread retrieved");

      res.send(result);
    });

  return app;
}
