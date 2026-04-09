import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";
import * as schema from "./schema";
import { ENV } from "../config/env";

if (!ENV.DATABASE_URL) {
  throw new Error("DATABASE_URL is not set in environment variables");
}

const pool = new Pool({
  connectionString: ENV.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});

// Force connection test immediately
pool
  .connect()
  .then((client) => {
    console.log("Database connected successfully ✅");
    client.release();
  })
  .catch((err) => {
    console.error("💥 Database connection error:", err);
  });

export const db = drizzle({ client: pool, schema });