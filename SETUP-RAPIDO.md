# 🚀 SETUP RÁPIDO - NextWave IA Landing

## ⚡ OPCIÓN 1: Script Automatizado (Recomendado)

```bash
node scripts/auto-setup.js
```

El script abrirá automáticamente todas las URLs necesarias en tu navegador y te guiará paso a paso.

---

## 📋 OPCIÓN 2: Manual (15 minutos)

### 1. SUPABASE MIGRATION (2 min) ⚠️ CRÍTICO

```bash
# 1. Generar el archivo SQL
node scripts/setup-database.js

# 2. Abrir Supabase
https://supabase.com/dashboard/project/ghjeufqafwwrwunetdhg/editor

# 3. Copiar el contenido de: .migration-temp.sql
# 4. Pegar en SQL Editor y presionar RUN
```

---

### 2. STRIPE WEBHOOK (5 min) ⚠️ CRÍTICO

**A) Crear Webhook en Stripe:**

```
1. Ir a: https://dashboard.stripe.com/webhooks
2. Click "+ Add endpoint"
3. URL: https://nextwave-ia-landing.vercel.app/api/stripe-webhook
4. Events:
   - checkout.session.completed
   - checkout.session.async_payment_succeeded
   - checkout.session.async_payment_failed
5. Copiar "Signing secret" (whsec_...)
```

**B) Agregar a Vercel:**

```
1. Ir a: https://vercel.com/javier-inguerzons-projects/nextwave-ia-landing/settings/environment-variables

2. Add New:
   Key: STRIPE_WEBHOOK_SECRET
   Value: whsec_tu_secreto_aqui
   Environments: ✅ Production ✅ Preview ✅ Development

3. Save + Redeploy
```

---

### 3. GOOGLE ANALYTICS (3 min) ⭐ RECOMENDADO

```
1. Ir a: https://analytics.google.com/

2. Crear propiedad:
   - Nombre: NextWave IA Landing
   - URL: https://nextwave-ia-landing.vercel.app

3. Copiar Measurement ID (G-XXXXXXXXXX)

4. Agregar a Vercel:
   Key: VITE_GA_MEASUREMENT_ID
   Value: G-XXXXXXXXXX

5. Save + Redeploy
```

---

### 4. MICROSOFT CLARITY (2 min) - OPCIONAL

```
1. Ir a: https://clarity.microsoft.com/
2. New Project: NextWave IA
3. URL: nextwave-ia-landing.vercel.app
4. Copiar Project ID
5. Agregar a Vercel como: VITE_CLARITY_PROJECT_ID
```

---

### 5. SENTRY (3 min) - OPCIONAL

```
1. Ir a: https://sentry.io/
2. Create Project (React)
3. Copiar DSN
4. Agregar a Vercel como: VITE_SENTRY_DSN
```

---

## ✅ VERIFICACIÓN

**Después de configurar todo:**

### Supabase Migration ✓

```
1. Ir a: https://supabase.com/dashboard/project/ghjeufqafwwrwunetdhg/editor
2. Click "Table Editor"
3. Buscar tabla "purchases"
4. Verificar columnas: id, stripe_session_id, customer_email, etc.
```

### Stripe Webhook ✓

```
1. Ir a: https://dashboard.stripe.com/webhooks
2. Click en tu webhook
3. "Send test webhook" → checkout.session.completed
4. Ver "✅ Succeeded" en logs
```

### Google Analytics ✓

```
1. Visitar: https://nextwave-ia-landing.vercel.app
2. Esperar 5 minutos
3. Ir a: https://analytics.google.com/
4. Ver "1 usuario activo" en tiempo real
```

---

## 📊 URLs IMPORTANTES

| Servicio                 | URL                                                                                              |
| ------------------------ | ------------------------------------------------------------------------------------------------ |
| **Supabase Dashboard**   | https://supabase.com/dashboard/project/ghjeufqafwwrwunetdhg                                      |
| **Stripe Webhooks**      | https://dashboard.stripe.com/webhooks                                                            |
| **Vercel Env Variables** | https://vercel.com/javier-inguerzons-projects/nextwave-ia-landing/settings/environment-variables |
| **Vercel Deployments**   | https://vercel.com/javier-inguerzons-projects/nextwave-ia-landing                                |
| **Google Analytics**     | https://analytics.google.com/                                                                    |
| **Microsoft Clarity**    | https://clarity.microsoft.com/                                                                   |
| **Sentry**               | https://sentry.io/                                                                               |

---

## 🆘 PROBLEMAS COMUNES

### "Error al ejecutar SQL en Supabase"

- Verifica que estás en el proyecto correcto
- Verifica que no existe ya la tabla "purchases"
- Si existe, elimínala primero: `DROP TABLE purchases CASCADE;`

### "Webhook no recibe eventos"

- Verifica que el STRIPE_WEBHOOK_SECRET está en Vercel
- Verifica que hiciste Redeploy después de agregar la variable
- Verifica que la URL del webhook es correcta

### "Google Analytics no muestra datos"

- Espera al menos 24 horas para datos completos
- "Real-time" muestra datos después de 5 minutos
- Verifica que el Measurement ID es correcto

---

## 🎯 TIEMPO TOTAL ESTIMADO

- **Mínimo (solo críticos)**: 7 minutos
- **Recomendado (con GA4)**: 10 minutos
- **Completo (todo)**: 15 minutos

---

**¿Dudas?** Revisa el checklist completo en: `scripts/setup-checklist.md`
