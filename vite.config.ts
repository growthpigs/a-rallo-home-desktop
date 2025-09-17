import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";

export default defineConfig({
  plugins: [
    react(),
    runtimeErrorOverlay(),
    ...(process.env.NODE_ENV !== "production" &&
    process.env.REPL_ID !== undefined
      ? [
          await import("@replit/vite-plugin-cartographer").then((m) =>
            m.cartographer(),
          ),
        ]
      : []),
  ],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "client", "src"),
      "@shared": path.resolve(import.meta.dirname, "shared"),
      "@assets": path.resolve(import.meta.dirname, "attached_assets"),
      "@webp": path.resolve(import.meta.dirname, "attached_assets/webp"),
    },
  },
  root: path.resolve(import.meta.dirname, "client"),
  build: {
    outDir: path.resolve(import.meta.dirname, "dist/public"),
    emptyOutDir: true,
    // Optimize build for performance
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom'],
          'framer': ['framer-motion'],
          'radix': [
            '@radix-ui/react-accordion',
            '@radix-ui/react-dialog',
            '@radix-ui/react-dropdown-menu',
            '@radix-ui/react-separator',
            '@radix-ui/react-slot',
          ],
          'utils': ['clsx', 'tailwind-merge', 'class-variance-authority'],
        },
        // Asset naming for better caching
        assetFileNames: (assetInfo) => {
          const info = assetInfo.name.split('.');
          const extType = info[info.length - 1];
          if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(extType)) {
            return `assets/images/[name]-[hash][extname]`;
          }
          return `assets/[name]-[hash][extname]`;
        },
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
      },
    },
    // Increase chunk size warning limit for large images
    chunkSizeWarningLimit: 2000,
    // Minify for production
    minify: 'esbuild',
    target: 'es2020',
    // Enable source maps for debugging
    sourcemap: process.env.NODE_ENV !== 'production',
  },
  optimizeDeps: {
    include: [
      'react', 
      'react-dom',
      'framer-motion',
      '@radix-ui/react-accordion',
      '@radix-ui/react-dialog',
      '@radix-ui/react-dropdown-menu',
    ],
    exclude: ['@replit/vite-plugin-runtime-error-modal'],
  },
  server: {
    fs: {
      strict: true,
      deny: ["**/.*"],
    },
    // Enable compression
    middlewareMode: false,
  },
  // Performance optimizations
  esbuild: {
    logOverride: { 'this-is-undefined-in-esm': 'silent' }
  },
  // Enable CSS code splitting
  css: {
    modules: {
      localsConvention: 'camelCase'
    }
  }
});