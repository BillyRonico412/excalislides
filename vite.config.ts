import path from "node:path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

// biome-ignore lint/style/noDefaultExport: required for Vite
export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "./src"),
		},
	},
})
