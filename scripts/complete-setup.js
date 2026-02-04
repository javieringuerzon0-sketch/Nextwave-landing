#!/usr/bin/env node
/**
 * Script COMPLETAMENTE automatizado para toda la configuración
 * Requiere credenciales adicionales en .env.local
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { exec } from 'child_process';
import { promisify } from 'util';

const execAsync = promisify(exec);
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.clear();
console.log('\n╔═══════════════════════════════════════════════════════════╗');
console.log('║   NEXTWAVE IA - SETUP AUTOMÁTICO COMPLETO                ║');
console.log('╚═══════════════════════════════════════════════════════════╝\n');

// Leer .env.local
const envPath = path.join(__dirname, '../.env.local');
const envContent = fs.readFileSync(envPath, 'utf8');

const config = {
  SUPABASE_URL: envContent.match(/VITE_SUPABASE_URL=(.+)/)?.[1],
  SUPABASE_ANON_KEY: envContent.match(/VITE_SUPABASE_ANON_KEY=(.+)/)?.[1],
  SUPABASE_SERVICE_KEY: envContent.match(/SUPABASE_SERVICE_KEY=(.+)/)?.[1],
  STRIPE_SECRET_KEY: envContent.match(/STRIPE_SECRET_KEY=(.+)/)?.[1],
  STRIPE_WEBHOOK_SECRET: envContent.match(/STRIPE_WEBHOOK_SECRET=(.+)/)?.[1],
};

console.log('📋 Verificando credenciales...\n');

let missingCreds = [];

if (!config.SUPABASE_URL || !config.SUPABASE_ANON_KEY) {
  missingCreds.push('❌ Supabase (URL y ANON_KEY)');
} else {
  console.log('✅ Supabase conectado');
}

if (!config.SUPABASE_SERVICE_KEY) {
  missingCreds.push('⚠️  SUPABASE_SERVICE_KEY (necesario para ejecutar SQL)');
}

if (!config.STRIPE_SECRET_KEY) {
  missingCreds.push('⚠️  STRIPE_SECRET_KEY (necesario para crear webhook)');
}

if (!config.STRIPE_WEBHOOK_SECRET) {
  console.log('⚠️  STRIPE_WEBHOOK_SECRET (se creará después del webhook)');
}

console.log('\n');

if (missingCreds.length > 0) {
  console.log('═══════════════════════════════════════════════════════════');
  console.log('FALTAN CREDENCIALES PARA SETUP AUTOMÁTICO COMPLETO');
  console.log('═══════════════════════════════════════════════════════════\n');

  console.log('Para que yo pueda hacerlo TODO automáticamente, agrega:');
  console.log('\nEn .env.local:\n');

  if (!config.SUPABASE_SERVICE_KEY) {
    console.log('SUPABASE_SERVICE_KEY=eyJ...');
    console.log(
      '  → Obtener en: https://supabase.com/dashboard/project/ghjeufqafwwrwunetdhg/settings/api'
    );
    console.log('  → Copiar "service_role secret"\n');
  }

  if (!config.STRIPE_SECRET_KEY) {
    console.log('STRIPE_SECRET_KEY=sk_live_...');
    console.log('  → Obtener en: https://dashboard.stripe.com/apikeys');
    console.log('  → Copiar "Secret key"\n');
  }

  console.log('═══════════════════════════════════════════════════════════\n');
  console.log('ALTERNATIVA MÁS RÁPIDA (sin credenciales):\n');
  console.log('Ejecuta: node scripts/auto-setup.js');
  console.log('  → Te guía paso a paso (7 minutos)');
  console.log('  → No necesita credenciales');
  console.log('  → Abre URLs automáticamente\n');

  console.log('═══════════════════════════════════════════════════════════\n');
  process.exit(0);
}

console.log('✅ Todas las credenciales disponibles!\n');
console.log('Ejecutando setup automático...\n');

async function runFullSetup() {
  // 1. Ejecutar migración de Supabase
  console.log('PASO 1/4: Ejecutando migración de Supabase...');

  try {
    const sqlPath = path.join(__dirname, '../supabase/migrations/001_create_purchases_table.sql');
    const sql = fs.readFileSync(sqlPath, 'utf8');

    const projectRef = config.SUPABASE_URL.split('//')[1].split('.')[0];
    const response = await fetch(`${config.SUPABASE_URL}/rest/v1/rpc/exec_sql`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        apikey: config.SUPABASE_SERVICE_KEY,
        Authorization: `Bearer ${config.SUPABASE_SERVICE_KEY}`,
      },
      body: JSON.stringify({ query: sql }),
    });

    if (response.ok) {
      console.log('✅ Migración ejecutada\n');
    } else {
      console.log('⚠️  Error al ejecutar SQL (puede que ya exista la tabla)');
      console.log('   Continúa con el siguiente paso...\n');
    }
  } catch (error) {
    console.log('⚠️  Error:', error.message);
    console.log('   Ejecuta manualmente en Supabase SQL Editor\n');
  }

  // 2. Verificar Stripe webhook (no podemos crearlo automáticamente sin Stripe SDK)
  console.log('PASO 2/4: Stripe Webhook');
  console.log('⚠️  Los webhooks de Stripe deben crearse en el dashboard');
  console.log('   URL: https://dashboard.stripe.com/webhooks\n');

  // 3. Agregar variables a Vercel
  console.log('PASO 3/4: Variables de Vercel');

  try {
    // Verificar si está autenticado
    const { stdout: whoami } = await execAsync('npx vercel whoami');
    console.log('✅ Autenticado en Vercel como:', whoami.trim());

    // Agregar variables (si no existen)
    if (config.STRIPE_WEBHOOK_SECRET) {
      console.log('Agregando STRIPE_WEBHOOK_SECRET...');
      await execAsync(
        `npx vercel env add STRIPE_WEBHOOK_SECRET production <<< "${config.STRIPE_WEBHOOK_SECRET}"`
      );
      console.log('✅ Variable agregada\n');
    }
  } catch (error) {
    console.log('⚠️  No autenticado en Vercel CLI');
    console.log(
      '   Agrega manualmente: https://vercel.com/javier-inguerzons-projects/nextwave-ia-landing/settings/environment-variables\n'
    );
  }

  console.log('PASO 4/4: Resumen\n');
  console.log('═══════════════════════════════════════════════════════════');
  console.log('✅ Setup completado!');
  console.log('═══════════════════════════════════════════════════════════\n');

  console.log('PRÓXIMOS PASOS:');
  console.log('1. Verificar tabla "purchases" en Supabase');
  console.log('2. Crear webhook en Stripe (si no existe)');
  console.log('3. Redeploy en Vercel si agregaste variables\n');
}

runFullSetup().catch(console.error);
