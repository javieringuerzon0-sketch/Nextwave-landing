import React from 'react';
import ReactDOM from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import * as Sentry from '@sentry/react';
import { inject } from '@vercel/analytics';
import App from './App';
import './src/styles/globals.css';
import { validateEnv } from './src/lib/validateEnv';
import { initAllAnalytics } from './src/lib/analytics';

// Validar variables de entorno ANTES de iniciar la app
validateEnv();

// Inicializar Vercel Analytics
inject();

// Inicializar otros servicios de analytics (GA4, Clarity, Web Vitals)
initAllAnalytics();

// Configurar Sentry para error tracking
// IMPORTANTE: Reemplaza el DSN con tu propio DSN de Sentry.io
const SENTRY_DSN = import.meta.env.VITE_SENTRY_DSN;

if (SENTRY_DSN && import.meta.env.PROD) {
  Sentry.init({
    dsn: SENTRY_DSN,
    environment: import.meta.env.MODE,
    integrations: [
      Sentry.browserTracingIntegration(),
      Sentry.replayIntegration({
        maskAllText: true,
        blockAllMedia: true,
      }),
    ],
    // Performance Monitoring
    tracesSampleRate: 1.0, // Captura 100% de las transacciones
    // Session Replay
    replaysSessionSampleRate: 0.1, // 10% de sesiones normales
    replaysOnErrorSampleRate: 1.0, // 100% de sesiones con error
  });
}

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error('Could not find root element to mount to');
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </React.StrictMode>
);
