import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import sitemap from 'vite-plugin-sitemap';
import { robots } from 'vite-plugin-robots';
import tailwindcss from '@tailwindcss/vite';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
    base: '/', // <-- serve at root instead of /portfolio/
    build: {
        sourcemap: true,
        chunkSizeWarningLimit: 1600,
    },
    plugins: [
        tailwindcss(),
        vue(),
        robots(),
        sitemap({
            hostname: '',
            basePath: '/', // <-- update basePath too
            changefreq: 'hourly',
            priority: 1,
        }),
    ],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src'), // <-- correct alias
        },
    },
    server: {
        // Optional dev server config
    },
    optimizeDeps: {
        exclude: ['@tailwindcss/vite'],
        force: true,
    },
});
