import swaggerUi from "swagger-ui-express";
import swaggerJsdoc from "swagger-jsdoc";
import type { Express } from "express";

export function configureSwagger(app: Express, { port }: { port: number }) {
  // Definición de metadatos de la API
  const swaggerOptions: swaggerJsdoc.Options = {
    definition: {
      openapi: "3.0.0",
      info: {
        title: "Pan Dulces API ",
        version: "1.0.0",
        description: "Documentación generada con swagger-jsdoc",
      },
      servers: [
        {
          url: `http://localhost:${port}`,
        },
      ],
    },
    apis: ["../routes/*.ts"],
  };

  const swaggerDocs = swaggerJsdoc(swaggerOptions);

  app.use("/swagger", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

  return app;
}
