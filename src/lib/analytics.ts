import { onCLS, onFCP, onLCP, onTTFB, onINP, Metric } from 'web-vitals';

/**
 * Google Analytics 4 - Tracking
 */

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    dataLayer?: any[];
  }
}

export const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID;

// Inicializar Google Analytics
export function initGA() {
  if (!GA_MEASUREMENT_ID || !import.meta.env.PROD) {
    console.log('Google Analytics disabled (development mode or missing ID)');
    return;
  }

  // Cargar gtag.js de forma asíncrona
  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
  document.head.appendChild(script);

  // Inicializar dataLayer
  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag(...args: unknown[]) {
    window.dataLayer?.push(args);
  };
  window.gtag('js', new Date());
  window.gtag('config', GA_MEASUREMENT_ID, {
    send_page_view: false, // Manejamos pageviews manualmente
  });

  console.log('✅ Google Analytics initialized');
}

// Track page view
export function trackPageView(url: string, title?: string) {
  if (!window.gtag || !GA_MEASUREMENT_ID) return;

  window.gtag('event', 'page_view', {
    page_title: title || document.title,
    page_location: url,
    page_path: new URL(url).pathname,
  });
}

// Track custom events
export function trackEvent(
  eventName: string,
  params?: {
    category?: string;
    label?: string;
    value?: number;
    [key: string]: any;
  }
) {
  if (!window.gtag || !GA_MEASUREMENT_ID) return;

  window.gtag('event', eventName, params);
}

// Track form submissions
export function trackFormSubmit(formName: string, success: boolean) {
  trackEvent('form_submit', {
    form_name: formName,
    success: success,
  });
}

// Track newsletter signups
export function trackNewsletterSignup(email: string) {
  trackEvent('newsletter_signup', {
    category: 'engagement',
    label: email,
  });
}

// Track CTA clicks
export function trackCTAClick(ctaName: string, destination?: string) {
  trackEvent('cta_click', {
    cta_name: ctaName,
    destination: destination,
  });
}

/**
 * Web Vitals - Performance Monitoring
 */

function sendToAnalytics(metric: Metric) {
  // Log en desarrollo
  if (import.meta.env.DEV) {
    console.log('Web Vital:', metric);
  }

  // Enviar a Google Analytics
  if (window.gtag && GA_MEASUREMENT_ID) {
    window.gtag('event', metric.name, {
      event_category: 'Web Vitals',
      event_label: metric.id,
      value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
      non_interaction: true,
    });
  }

  // Enviar a Sentry (si está configurado)
  if (window.Sentry) {
    window.Sentry.captureMessage(`Web Vital: ${metric.name}`, {
      level: 'info',
      extra: {
        name: metric.name,
        value: metric.value,
        rating: metric.rating,
        navigationType: metric.navigationType,
      },
    });
  }
}

export function initWebVitals() {
  // Core Web Vitals
  onCLS(sendToAnalytics); // Cumulative Layout Shift
  onLCP(sendToAnalytics); // Largest Contentful Paint
  onINP(sendToAnalytics); // Interaction to Next Paint (reemplaza FID)

  // Other metrics
  onFCP(sendToAnalytics); // First Contentful Paint
  onTTFB(sendToAnalytics); // Time to First Byte

  console.log('✅ Web Vitals tracking initialized');
}

/**
 * Microsoft Clarity - Heatmaps & Session Recording
 */

const CLARITY_PROJECT_ID = import.meta.env.VITE_CLARITY_PROJECT_ID;

export function initClarity() {
  if (!CLARITY_PROJECT_ID || !import.meta.env.PROD) {
    console.log('Microsoft Clarity disabled (development mode or missing ID)');
    return;
  }

  // @ts-expect-error - Clarity initialization script
  (function (c, l, a, r, i, t, y) {
    c[a] =
      c[a] ||
      function (...args: unknown[]) {
        (c[a].q = c[a].q || []).push(args);
      };
    t = l.createElement(r);
    t.async = 1;
    t.src = 'https://www.clarity.ms/tag/' + i;
    y = l.getElementsByTagName(r)[0];
    y.parentNode.insertBefore(t, y);
  })(window, document, 'clarity', 'script', CLARITY_PROJECT_ID);

  console.log('✅ Microsoft Clarity initialized');
}

/**
 * Inicializar todos los servicios de analytics
 */
export function initAllAnalytics() {
  if (!import.meta.env.PROD) {
    console.log('📊 Analytics disabled in development');
    return;
  }

  // Google Analytics
  initGA();

  // Web Vitals
  initWebVitals();

  // Microsoft Clarity
  initClarity();

  console.log('🚀 All analytics initialized');
}

// Declarar Sentry global para TypeScript
declare global {
  interface Window {
    Sentry?: any;
  }
}
