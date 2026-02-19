import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

export default defineConfig({
    base: '/---COMES-TO-LIFE---/',
    plugins: [react()],
    resolve: {
        alias: {
            "@": path.resolve("./src"),
        },
    },
})
