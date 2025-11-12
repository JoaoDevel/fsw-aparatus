import "dotenv/config";
import { defineConfig, env } from "prisma/config";

export default defineConfig({
  schema: "prisma/schema.prisma",
  migrations: {
    path: "prisma/migrations",
    seed: "tsx prisma/seed.ts", // Serve para colocar dados no meu banco
  },
  engine: "classic",
  datasource: {
    url: env("DATABASE_URL"),
  },
});
