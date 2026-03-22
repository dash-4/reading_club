import { defineConfig } from "drizzle-kit";
import * as dotenv from "dotenv";

dotenv.config({ path: ".env.local" });

export default defineConfig({
  schema: "./src/db/schema.ts",          // проверь путь!
  out: "./drizzle",
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.POSTGRES_URL!,      // или POSTGRES_PRISMA_URL! — попробуй обе по очереди
  },
  verbose: true,
  strict: true,
});