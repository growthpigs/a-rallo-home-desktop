import { drizzle } from "drizzle-orm/neon-serverless";
import { neon } from "@neondatabase/serverless";
import { eq } from "drizzle-orm";
import { users, type User, type InsertUser, type UserWithPassword } from "@shared/schema";
import bcrypt from "bcrypt";

// modify the interface with any CRUD methods
// you might need

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  getUserWithPasswordByUsername(username: string): Promise<UserWithPassword | undefined>;
  createUser(user: InsertUser): Promise<User>;
  verifyPassword(username: string, password: string): Promise<boolean>;
}

export class DatabaseStorage implements IStorage {
  private db;
  private saltRounds = 12;

  constructor() {
    if (!process.env.DATABASE_URL) {
      throw new Error("DATABASE_URL environment variable is required");
    }
    const sql = neon(process.env.DATABASE_URL);
    this.db = drizzle(sql);
  }

  async getUser(id: number): Promise<User | undefined> {
    try {
      const result = await this.db.select({
        id: users.id,
        username: users.username
      }).from(users).where(eq(users.id, id)).limit(1);
      return result[0];
    } catch (error) {
      console.error("Error getting user by id:", error);
      return undefined;
    }
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    try {
      const result = await this.db.select({
        id: users.id,
        username: users.username
      }).from(users).where(eq(users.username, username)).limit(1);
      return result[0];
    } catch (error) {
      console.error("Error getting user by username:", error);
      return undefined;
    }
  }

  async getUserWithPasswordByUsername(username: string): Promise<UserWithPassword | undefined> {
    try {
      const result = await this.db.select().from(users).where(eq(users.username, username)).limit(1);
      return result[0];
    } catch (error) {
      console.error("Error getting user with password by username:", error);
      return undefined;
    }
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    try {
      // Hash the password before storing
      const hashedPassword = await bcrypt.hash(insertUser.password, this.saltRounds);
      
      const result = await this.db.insert(users).values({
        username: insertUser.username,
        password: hashedPassword
      }).returning({
        id: users.id,
        username: users.username
      });
      
      return result[0];
    } catch (error: any) {
      // Handle duplicate username constraint violation
      if (error.code === '23505' || error.message?.includes('duplicate key')) {
        throw new Error('Username already exists');
      }
      console.error("Error creating user:", error);
      throw new Error('Failed to create user');
    }
  }

  async verifyPassword(username: string, password: string): Promise<boolean> {
    try {
      const user = await this.getUserWithPasswordByUsername(username);
      if (!user) {
        return false;
      }
      return await bcrypt.compare(password, user.password);
    } catch (error) {
      console.error("Error verifying password:", error);
      return false;
    }
  }
}

export const storage = new DatabaseStorage();
