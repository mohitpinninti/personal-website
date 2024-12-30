import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
    plugins: [react()],
    server: {
        proxy: {
            "/api": {
                target: mode === 'production' ? 'http://api.notion.com' : 'http://localhost:8843',
                // target: "https://api.notion.com",
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/api/, ''),
                secure: false,
            },
        },
    },
}));
