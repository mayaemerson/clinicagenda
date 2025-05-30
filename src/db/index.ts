import "dotenv/config";
import { drizzle } from "drizzle-orm/postgres-js";
import * as schema from "../db/schema";
import postgres from "postgres";

const client = postgres(process.env.DATABASE_URL!, {
  ssl: process.env.DATABASE_SSL === "true",
});

export const db = drizzle(client, { schema });
