import { z } from "zod";

const mySchema = z.object({
  name: z.string().min(3).max(20),
  type: z.enum(["CANDIED_FRUIT", "CHOCOLATE_CHIPS", "PLAIN"]),
  weight_in_grams: z.number().min(100).max(1000),
  brand: z.string(),
  tier: z.enum(["LOW_COST", "STANDARD", "PREMIUM"]),
});
