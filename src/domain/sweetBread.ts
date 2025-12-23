export type SweetBreadType = "CANDIED_FRUIT" | "CHOCOLATE_CHIPS" | "PLAIN";
export type SweetBreadTier = "LOW_COST" | "STANDARD" | "PREMIUM";

export interface SweetBread {
  id: number;
  name: string;
  type: SweetBreadType;
  weight_in_grams: number;
  brand: string;
  tier: SweetBreadTier;
  secret_ingredient: string | null;
}
