#!/usr/bin/env node
/**
 * Script para ejecutar la migración de Supabase automáticamente
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Leer .env.local
const envPath = path.join(__dirname, '../.env.local');
const envContent = fs.readFileSync(envPath, 'utf8');

// Extraer variables
const SUPABASE_URL = envContent.match(/VITE_SUPABASE_URL=(.+)/)?.[1];
const SUPABASE_ANON_KEY = envContent.match(/VITE_SUPABASE_ANON_KEY=(.+)/)?.[1];

if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
  console.error('❌ Error: No se encontraron credenciales de Supabase en .env.local');
  process.exit(1);
}

console.log('🔧 Ejecutando migración de Supabase...\n');

// Leer SQL
const sqlPath = path.join(__dirname, '../supabase/migrations/001_create_purchases_table.sql');
const sql = fs.readFileSync(sqlPath, 'utf8');

// Ejecutar SQL via Supabase REST API
const projectRef = SUPABASE_URL.split('//')[1].split('.')[0];
const apiUrl = `${SUPABASE_URL}/rest/v1/rpc`;

console.log('Proyecto:', projectRef);
console.log('URL:', SUPABASE_URL);
console.log('\nEjecutando SQL...\n');

// Para ejecutar SQL directo necesitamos usar la función query de Supabase
// Pero eso requiere SERVICE_KEY, no ANON_KEY

console.log('⚠️  ADVERTENCIA: Para ejecutar SQL directamente necesito SUPABASE_SERVICE_KEY');
console.log('La ANON_KEY solo permite operaciones limitadas.\n');

console.log('OPCIÓN 1: Agregar SUPABASE_SERVICE_KEY a .env.local');
console.log('   1. Ve a: https://supabase.com/dashboard/project/' + projectRef + '/settings/api');
console.log('   2. Copia el "service_role secret" (empieza con eyJ...)');
console.log('   3. Agrégalo a .env.local:');
console.log('      SUPABASE_SERVICE_KEY=eyJ...');
console.log('   4. Vuelve a ejecutar este script\n');

console.log('OPCIÓN 2: Ejecutar manualmente (MÁS RÁPIDO - 30 segundos)');
console.log('   1. Abre: https://supabase.com/dashboard/project/' + projectRef + '/sql/new');
console.log('   2. Copia el contenido de: .migration-temp.sql');
console.log('   3. Pega en el editor');
console.log('   4. Click RUN\n');

console.log('¿Qué prefieres hacer?');
