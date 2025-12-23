import { int, sqliteTable, text } from "drizzle-orm/sqlite-core";
import type { SweetBreadTier, SweetBreadType } from "../domain/sweetBread";

export const sweetBreadTable = sqliteTable("sweet_bread", {
  id: int().primaryKey({ autoIncrement: true }),
  name: text().notNull(),
  type: text({ length: 1 }).notNull().$type<SweetBreadType>(),
  weight_in_grams: int().notNull(),
  brand: text().notNull(),
  tier: text({ length: 1 }).notNull().$type<SweetBreadTier>(),
  secret_ingredient: text(),
});
