import { defineConfig } from "drizzle-kit";
import "./envConfig.ts";

export default defineConfig({
	dialect: "postgresql",
	schema: "./lib/schema.ts",
	dbCredentials: {
		url: process.env.DATABASE_URL!,
	},
});
