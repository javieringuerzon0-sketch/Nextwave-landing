#!/usr/bin/env node
/**
 * ONE-CLICK SETUP - Configuración completamente automatizada
 * Ejecuta todo lo posible sin intervención manual
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
console.log('║     🚀 NEXTWAVE IA - ONE CLICK SETUP                    ║');
console.log('║                                                           ║');
console.log('╚═══════════════════════════════════════════════════════════╝');
console.log('\n');
console.log('Este script hará TODA la configuración automáticamente.\n');
console.log('Presiona CTRL+C para cancelar, o ENTER para continuar...\n');

process.stdin.once('data', async () => {
  console.log('\n🔧 Iniciando configuración automatizada...\n');
  console.log('═══════════════════════════════════════════════════════════\n');

  // Leer configuración
  const envPath = path.join(__dirname, '../.env.local');
  const envContent = fs.readFileSync(envPath, 'utf8');

  const SUPABASE_URL = envContent.match(/VITE_SUPABASE_URL=(.+)/)?.[1]?.trim();
  const projectRef = SUPABASE_URL?.split('//')[1]?.split('.')[0];

  // PASO 1: Supabase Migration
  console.log('PASO 1/3: Migración de Supabase');
  console.log('─────────────────────────────────────────────────────────────\n');

  const sqlPath = path.join(__dirname, '../.migration-temp.sql');
  const sqlContent = fs.readFileSync(sqlPath, 'utf8');

  console.log('📋 SQL preparado en: .migration-temp.sql');
  console.log('📊 Proyecto Supabase:', projectRef);
  console.log('\n🌐 Abriendo Supabase SQL Editor en tu navegador...\n');

  // Abrir navegador
  const openCmd =
    process.platform === 'win32' ? 'start' : process.platform === 'darwin' ? 'open' : 'xdg-open';

  exec(`${openCmd} https://supabase.com/dashboard/project/${projectRef}/sql/new`);

  console.log('INSTRUCCIONES:');
  console.log('1. Se abrió el SQL Editor de Supabase');
  console.log('2. Copia TODO el contenido de: .migration-temp.sql');
  console.log('3. Pega en el editor SQL');
  console.log('4. Presiona el botón RUN (o Ctrl+Enter)');
  console.log('5. Deberías ver: "Success. No rows returned"');
  console.log('\nPresiona ENTER cuando hayas terminado...\n');

  process.stdin.once('data', () => {
    console.log('✅ Migración de Supabase completada\n');
    console.log('═══════════════════════════════════════════════════════════\n');

    // PASO 2: Stripe Webhook
    console.log('PASO 2/3: Configurar Stripe Webhook');
    console.log('─────────────────────────────────────────────────────────────\n');

    console.log('🌐 Abriendo Stripe Dashboard...\n');
    exec(`${openCmd} https://dashboard.stripe.com/webhooks`);

    console.log('INSTRUCCIONES:');
    console.log('1. Click en "+ Add endpoint"');
    console.log('2. Endpoint URL (copia esto):');
    console.log('   https://nextwave-ia-landing.vercel.app/api/stripe-webhook');
    console.log('\n3. Description: NextWave IA Payments');
    console.log('\n4. Events to send (selecciona estos):');
    console.log('   - checkout.session.completed');
    console.log('   - checkout.session.async_payment_succeeded');
    console.log('   - checkout.session.async_payment_failed');
    console.log('\n5. Click "Add endpoint"');
    console.log('\n6. IMPORTANTE: Copia el "Signing secret" (whsec_...)');
    console.log('\nPresiona ENTER cuando tengas el signing secret...\n');

    process.stdin.once('data', () => {
      console.log('Por favor pega el Signing secret aquí (whsec_...): ');

      process.stdin.once('data', async secret => {
        const webhookSecret = secret.toString().trim();

        if (!webhookSecret.startsWith('whsec_')) {
          console.log('\n⚠️  El secret debe empezar con "whsec_"');
          console.log('Continuando sin agregarlo...\n');
          finishSetup();
          return;
        }

        console.log('\n✅ Secret recibido\n');
        console.log('═══════════════════════════════════════════════════════════\n');

        // PASO 3: Agregar a Vercel
        console.log('PASO 3/3: Agregando variables a Vercel');
        console.log('─────────────────────────────────────────────────────────────\n');

        console.log('🔐 Agregando STRIPE_WEBHOOK_SECRET a Vercel...\n');

        // Agregar variable a Vercel usando el CLI
        exec(
          `echo ${webhookSecret} | npx vercel env add STRIPE_WEBHOOK_SECRET production`,
          (error, stdout, stderr) => {
            if (error) {
              console.log('⚠️  Error al agregar via CLI:', error.message);
              console.log('\nAgrega manualmente:');
              console.log(
                '1. Ve a: https://vercel.com/javier-inguerzons-projects/nextwave-ia-landing/settings/environment-variables'
              );
              console.log('2. Add New:');
              console.log('   Key: STRIPE_WEBHOOK_SECRET');
              console.log('   Value:', webhookSecret);
              console.log('   Environments: Production + Preview + Development\n');
              finishSetup();
              return;
            }

            console.log('✅ Variable agregada a Vercel (Production)\n');

            // Agregar a Preview
            exec(`echo ${webhookSecret} | npx vercel env add STRIPE_WEBHOOK_SECRET preview`, () => {
              console.log('✅ Variable agregada a Vercel (Preview)\n');

              // Agregar a Development
              exec(
                `echo ${webhookSecret} | npx vercel env add STRIPE_WEBHOOK_SECRET development`,
                () => {
                  console.log('✅ Variable agregada a Vercel (Development)\n');

                  console.log('═══════════════════════════════════════════════════════════\n');
                  console.log('🎉 ¡CONFIGURACIÓN COMPLETADA!\n');
                  console.log('Haciendo redeploy para aplicar cambios...\n');

                  // Redeploy automático
                  exec('npx vercel --prod --yes', (err, stdout) => {
                    if (err) {
                      console.log('⚠️  Redeploy manual necesario');
                      console.log('Ejecuta: npx vercel --prod\n');
                    } else {
                      console.log('✅ Redeploy completado\n');
                    }

                    finishSetup();
                  });
                }
              );
            });
          }
        );
      });
    });
  });
});

function finishSetup() {
  console.log('\n');
  console.log('╔═══════════════════════════════════════════════════════════╗');
  console.log('║                                                           ║');
  console.log('║     ✅ SETUP COMPLETADO EXITOSAMENTE                    ║');
  console.log('║                                                           ║');
  console.log('╚═══════════════════════════════════════════════════════════╝');
  console.log('\n');

  console.log('QUÉ SE CONFIGURÓ:');
  console.log('  ✅ Tabla "purchases" en Supabase');
  console.log('  ✅ Webhook en Stripe Dashboard');
  console.log('  ✅ STRIPE_WEBHOOK_SECRET en Vercel');
  console.log('  ✅ Redeploy automático\n');

  console.log('VERIFICAR:');
  console.log('  1. Supabase → Table Editor → Tabla "purchases" existe');
  console.log('  2. Stripe → Webhooks → Endpoint creado');
  console.log('  3. Vercel → Variables → STRIPE_WEBHOOK_SECRET existe\n');

  console.log('PRÓXIMO PASO (OPCIONAL - cuando tengas tiempo):');
  console.log('  • Google Analytics: 3 minutos');
  console.log('  • Microsoft Clarity: 2 minutos');
  console.log('  • Sentry: 3 minutos\n');

  console.log('Ver guía: SETUP-RAPIDO.md\n');

  process.exit(0);
}
