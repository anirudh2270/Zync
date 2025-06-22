import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { defineConfig } from "drizzle-kit";

export const auth = betterAuth({
	database: drizzleAdapter(defineConfig, {
		provider: "pg",
	}),
});
