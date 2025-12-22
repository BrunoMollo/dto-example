import { int, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const usersTable = sqliteTable("sweet_bread", {
  id: int().primaryKey({ autoIncrement: true }),
  name: text({ length: 20 }).notNull(),
});
