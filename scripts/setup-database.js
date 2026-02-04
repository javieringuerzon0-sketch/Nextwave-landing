#!/usr/bin/env node
/**
 * Script automatizado para preparar la migración de Supabase
 * Crea la tabla 'purchases' para guardar las compras de Stripe
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Leer archivo de migración
const migrationPath = path.join(__dirname, '../supabase/migrations/001_create_purchases_table.sql');
const sqlContent = fs.readFileSync(migrationPath, 'utf8');

console.log('=================================================');
console.log('  SUPABASE DATABASE MIGRATION');
console.log('=================================================\n');
console.log('Migracion: 001_create_purchases_table.sql');
console.log('\n-------------------------------------------------\n');

console.log('INSTRUCCIONES:\n');
console.log('1. Abre tu proyecto en Supabase:');
console.log('   https://supabase.com/dashboard/project/ghjeufqafwwrwunetdhg');
console.log('\n2. Ve a "SQL Editor" en el menu lateral');
console.log('\n3. Copia el SQL que se guardo en .migration-temp.sql');
console.log('\n4. Pega en el editor y presiona RUN (Ctrl+Enter)');
console.log('\n-------------------------------------------------\n');

// Guardar SQL en un archivo temporal para fácil acceso
const tempSqlPath = path.join(__dirname, '../.migration-temp.sql');
fs.writeFileSync(tempSqlPath, sqlContent);

console.log('OK - SQL guardado en: .migration-temp.sql');
console.log('\nPuedes abrir ese archivo y copiar todo el contenido.\n');

console.log('VERIFICACION DESPUES DE EJECUTAR:');
console.log('1. Ve a "Table Editor" en Supabase');
console.log('2. Deberias ver la tabla "purchases"');
console.log('3. La tabla debe tener estas columnas:');
console.log('   - id (UUID)');
console.log('   - stripe_session_id (TEXT)');
console.log('   - customer_email (TEXT)');
console.log('   - amount_total (BIGINT)');
console.log('   - status (TEXT)');
console.log('   - created_at (TIMESTAMPTZ)');
console.log('\n=================================================\n');
