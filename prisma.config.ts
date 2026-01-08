import { PrismaAdapter } from "@prisma/adapter-pg";
import { defineConfig } from "@prisma/internals";
import { Pool } from "pg";

export default defineConfig({
  datasources: {
    db: {
      url: process.env.DATABASE_URL,
    },
  },
});
