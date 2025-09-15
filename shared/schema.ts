import { pgTable, text, serial, integer, boolean } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

// Create separate schemas to ensure passwords are never exposed
export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export const publicUserSchema = createInsertSchema(users).pick({
  username: true,
}).extend({
  id: z.number()
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = z.infer<typeof publicUserSchema>;
export type UserWithPassword = typeof users.$inferSelect;
