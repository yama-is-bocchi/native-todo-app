import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import * as path from "node:path";
import dotenv from "dotenv";
import tsconfigPaths from "vite-tsconfig-paths";
dotenv.config({ path: path.resolve(__dirname, ".env") });
// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react(), tsconfigPaths()],
	define: {
		"process.env": process.env,
	},
});