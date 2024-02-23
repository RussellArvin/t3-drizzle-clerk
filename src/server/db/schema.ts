import { sql } from "drizzle-orm";
import {
  pgTable,
  text,
  timestamp,
  uuid,
} from "drizzle-orm/pg-core";

export const user = pgTable(
  "user",
  {
    id:uuid("id").primaryKey(),
    email:text("email").notNull(),
    createdAt: timestamp("created_at")
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull(),
    updatedAt: timestamp("updatedAt")
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
  }
);
