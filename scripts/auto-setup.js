#!/usr/bin/env node
/**
 * Script maestro de configuración automática
 * Abre todas las URLs necesarias y muestra checklist interactivo
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { exec } from 'child_process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.clear();
console.log('\n');
console.log('╔═══════════════════════════════════════════════════════════╗');
console.log('║                                                           ║');
console.log('║     NEXTWAVE IA - CONFIGURACION AUTOMATICA               ║');
console.log('║                                                           ║');
console.log('╚═══════════════════════════════════════════════════════════╝');
console.log('\n');

// Función para abrir URL en el navegador
function openBrowser(url) {
  const start =
    process.platform === 'darwin' ? 'open' : process.platform === 'win32' ? 'start' : 'xdg-open';
  exec(`${start} ${url}`);
}

// Guardar SQL de migración
const migrationPath = path.join(__dirname, '../supabase/migrations/001_create_purchases_table.sql');
const sqlContent = fs.readFileSync(migrationPath, 'utf8');
const tempSqlPath = path.join(__dirname, '../.migration-temp.sql');
fs.writeFileSync(tempSqlPath, sqlContent);

console.log('PASO 1/5: SUPABASE MIGRATION');
console.log('─────────────────────────────────────────────────────────────');
console.log('✓ SQL guardado en: .migration-temp.sql');
console.log('\nAbriendo Supabase Dashboard...\n');

setTimeout(() => {
  openBrowser('https://supabase.com/dashboard/project/ghjeufqafwwrwunetdhg/editor');
}, 1000);

console.log('INSTRUCCIONES:');
console.log('1. Se abrira el SQL Editor de Supabase');
console.log('2. Abre el archivo: .migration-temp.sql');
console.log('3. Copia TODO el contenido');
console.log('4. Pega en el SQL Editor');
console.log('5. Presiona RUN (Ctrl+Enter)');
console.log('\nPresiona ENTER cuando hayas terminado...');

// Esperar input del usuario
process.stdin.once('data', () => {
  console.log('\n✓ Supabase Migration completada\n');

  console.log('\n');
  console.log('PASO 2/5: STRIPE WEBHOOK');
  console.log('─────────────────────────────────────────────────────────────');
  console.log('Abriendo Stripe Dashboard...\n');

  setTimeout(() => {
    openBrowser('https://dashboard.stripe.com/webhooks');
  }, 1000);

  console.log('INSTRUCCIONES:');
  console.log('1. Click en "+ Add endpoint"');
  console.log('2. Endpoint URL:');
  console.log('   https://nextwave-ia-landing.vercel.app/api/stripe-webhook');
  console.log('3. Events (seleccionar estos 3):');
  console.log('   - checkout.session.completed');
  console.log('   - checkout.session.async_payment_succeeded');
  console.log('   - checkout.session.async_payment_failed');
  console.log('4. Copiar el "Signing secret" (whsec_...)');
  console.log('\nPresiona ENTER cuando hayas terminado...');

  process.stdin.once('data', () => {
    console.log('\n✓ Stripe Webhook configurado\n');

    console.log('\n');
    console.log('PASO 3/5: AGREGAR STRIPE WEBHOOK SECRET A VERCEL');
    console.log('─────────────────────────────────────────────────────────────');
    console.log('Abriendo Vercel Environment Variables...\n');

    setTimeout(() => {
      openBrowser(
        'https://vercel.com/javier-inguerzons-projects/nextwave-ia-landing/settings/environment-variables'
      );
    }, 1000);

    console.log('INSTRUCCIONES:');
    console.log('1. Click en "Add New"');
    console.log('2. Key: STRIPE_WEBHOOK_SECRET');
    console.log('3. Value: (pega el whsec_... de Stripe)');
    console.log('4. Environments: Production + Preview + Development');
    console.log('5. Click Save');
    console.log('6. IMPORTANTE: Redeploy el sitio');
    console.log('\nPresiona ENTER cuando hayas terminado...');

    process.stdin.once('data', () => {
      console.log('\n✓ Webhook Secret agregado a Vercel\n');

      console.log('\n');
      console.log('PASO 4/5: GOOGLE ANALYTICS (OPCIONAL)');
      console.log('─────────────────────────────────────────────────────────────');
      console.log('Abriendo Google Analytics...\n');

      setTimeout(() => {
        openBrowser('https://analytics.google.com/');
      }, 1000);

      console.log('INSTRUCCIONES:');
      console.log('1. Crear propiedad: NextWave IA Landing');
      console.log('2. Tipo: Web');
      console.log('3. URL: https://nextwave-ia-landing.vercel.app');
      console.log('4. Copiar Measurement ID (G-XXXXXXXXXX)');
      console.log('5. Agregar a Vercel como: VITE_GA_MEASUREMENT_ID');
      console.log('\n¿Quieres configurar Google Analytics ahora? (s/n)');

      process.stdin.once('data', input => {
        const answer = input.toString().trim().toLowerCase();

        if (answer === 's' || answer === 'y') {
          console.log('\nEspera a crear la propiedad y presiona ENTER...');
          process.stdin.once('data', () => {
            console.log('\n✓ Google Analytics configurado\n');
            finishSetup();
          });
        } else {
          console.log('\n⊘ Google Analytics omitido (puedes configurarlo despues)\n');
          finishSetup();
        }
      });
    });
  });
});

function finishSetup() {
  console.log('\n');
  console.log('╔═══════════════════════════════════════════════════════════╗');
  console.log('║                                                           ║');
  console.log('║     ✓ CONFIGURACION COMPLETADA                          ║');
  console.log('║                                                           ║');
  console.log('╚═══════════════════════════════════════════════════════════╝');
  console.log('\n');

  console.log('RESUMEN:');
  console.log('✓ Supabase Migration ejecutada');
  console.log('✓ Stripe Webhook configurado');
  console.log('✓ Variables de entorno agregadas');
  console.log('\n');

  console.log('SIGUIENTE PASOS:');
  console.log('1. Verifica que la tabla "purchases" existe en Supabase');
  console.log('2. Verifica que el webhook aparece en Stripe Dashboard');
  console.log('3. Redeploy en Vercel si aun no lo hiciste');
  console.log('\n');

  console.log('OPCIONALES (cuando tengas tiempo):');
  console.log('- Microsoft Clarity: https://clarity.microsoft.com/');
  console.log('- Sentry: https://sentry.io/');
  console.log('\n');

  console.log('Ver checklist completo en: scripts/setup-checklist.md');
  console.log('\n');

  process.exit(0);
}
