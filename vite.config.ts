import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, '.', '');
    return {
      server: {
        port: 3000,
        host: '0.0.0.0',
      },
      plugins: [react()],
      define: {
        'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
        'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
      },
      build: {
        rollupOptions: {
          output: {
            manualChunks: {
              // Vendor chunks for better caching
              'react-vendor': ['react', 'react-dom', 'react-router-dom'],
              'ui-vendor': ['lucide-react', 'react-helmet-async'],
              'analytics': ['@vercel/analytics', '@vercel/speed-insights', 'web-vitals'],
              'monitoring': ['@sentry/react'],
              'supabase': ['@supabase/supabase-js'],
              'utils': ['dompurify'],
            },
          },
        },
        // Increase chunk size warning limit
        chunkSizeWarningLimit: 600,
      },
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
          '@components': path.resolve(__dirname, './src/components'),
          '@hooks': path.resolve(__dirname, './src/hooks'),
          '@utils': path.resolve(__dirname, './src/utils'),
          '@types': path.resolve(__dirname, './src/types'),
          '@constants': path.resolve(__dirname, './src/constants'),
          '@styles': path.resolve(__dirname, './src/styles'),
          '@assets': path.resolve(__dirname, './src/assets'),
          '@lib': path.resolve(__dirname, './src/lib'),
        }
      }
    };
});
