# ✅ CHECKLIST DE CONFIGURACIÓN - NextWave IA Landing

## 📋 ESTADO ACTUAL

### ✅ COMPLETADO

- [x] Favicons configurados
- [x] OG Image para redes sociales
- [x] Apple Touch Icon
- [x] Código deployado en Vercel
- [x] Supabase conectado
- [x] Código de analytics integrado

---

## 🔧 PENDIENTE DE CONFIGURACIÓN

### 1️⃣ SUPABASE MIGRATION (CRÍTICO - 2 minutos)

**¿Por qué?** Para guardar las compras que se hagan con Stripe

**Pasos:**

1. Abre: https://supabase.com/dashboard/project/ghjeufqafwwrwunetdhg

2. Click en **SQL Editor** (menú lateral izquierdo)

3. Click en **New Query**

4. Copia TODO el contenido del archivo: `supabase/migrations/001_create_purchases_table.sql`
   - También está guardado en: `.migration-temp.sql` (después de correr el script)

5. Pega en el editor SQL

6. Click en **RUN** (o presiona Ctrl+Enter)

7. Deberías ver: "Success. No rows returned"

**Verificación:**

- Click en **Table Editor**
- Busca la tabla **purchases**
- Deberías ver columnas: id, stripe_session_id, customer_email, amount_total, etc.

**Estado:** [ ] Pendiente

---

### 2️⃣ STRIPE WEBHOOK (CRÍTICO - 5 minutos)

**¿Por qué?** Para recibir notificaciones cuando alguien compre

**Pasos:**

1. Ve a: https://dashboard.stripe.com/webhooks

2. Click **+ Add endpoint**

3. Configura:
   - **Endpoint URL**: `https://nextwave-ia-landing.vercel.app/api/stripe-webhook`
   - **Description**: NextWave IA - Payment Notifications
   - **Events to send** (selecciona estos 3):
     - ✅ `checkout.session.completed`
     - ✅ `checkout.session.async_payment_succeeded`
     - ✅ `checkout.session.async_payment_failed`

4. Click **Add endpoint**

5. Copia el **Signing secret** (empieza con `whsec_...`)

6. Ve a Vercel: https://vercel.com/javier-inguerzons-projects/nextwave-ia-landing/settings/environment-variables

7. Click **Add New**:
   - **Key**: `STRIPE_WEBHOOK_SECRET`
   - **Value**: `whsec_tu_secreto_aqui`
   - **Environments**: ✅ Production ✅ Preview ✅ Development

8. Click **Save**

9. **IMPORTANTE**: Redeploy el sitio para que tome la nueva variable:
   - Deployment → Click en los 3 puntos → Redeploy

**Estado:** [ ] Pendiente

---

### 3️⃣ GOOGLE ANALYTICS 4 (RECOMENDADO - 3 minutos)

**¿Por qué?** Para saber cuántas personas visitan tu sitio

**Pasos:**

1. Ve a: https://analytics.google.com/

2. Si no tienes cuenta, créala (gratis)

3. Click **Administrar** (⚙️ abajo a la izquierda)

4. Click **+ Crear propiedad**

5. Configura:
   - **Nombre de la propiedad**: NextWave IA Landing
   - **Zona horaria**: (GMT-06:00) Ciudad de México
   - **Moneda**: Peso mexicano (MXN)

6. Click **Siguiente**

7. Información de la empresa:
   - **Sector**: Servicios profesionales / Tecnología
   - **Tamaño**: Pequeña empresa

8. Click **Crear**

9. En "Configura tu flujo de datos":
   - Click **Web**
   - **URL del sitio web**: `https://nextwave-ia-landing.vercel.app`
   - **Nombre del flujo**: NextWave IA Web

10. Click **Crear flujo**

11. Copia el **ID de medición** (formato: `G-XXXXXXXXXX`)

12. Ve a Vercel: https://vercel.com/javier-inguerzons-projects/nextwave-ia-landing/settings/environment-variables

13. Click **Add New**:
    - **Key**: `VITE_GA_MEASUREMENT_ID`
    - **Value**: `G-XXXXXXXXXX`
    - **Environments**: ✅ Production ✅ Preview ✅ Development

14. Click **Save** y **Redeploy**

**Estado:** [ ] Pendiente

---

### 4️⃣ MICROSOFT CLARITY (OPCIONAL - 2 minutos)

**¿Por qué?** Para ver grabaciones de cómo usan tu sitio (gratis)

**Pasos:**

1. Ve a: https://clarity.microsoft.com/

2. **Sign in** con cuenta Microsoft (crea una gratis si no tienes)

3. Click **+ New Project**

4. Configura:
   - **Name**: NextWave IA
   - **Website URL**: `nextwave-ia-landing.vercel.app`
   - **Site category**: Business

5. Click **Add new project**

6. Copia el **Project ID** (aparece en la parte superior)

7. Ve a Vercel: https://vercel.com/javier-inguerzons-projects/nextwave-ia-landing/settings/environment-variables

8. Click **Add New**:
   - **Key**: `VITE_CLARITY_PROJECT_ID`
   - **Value**: (pega el Project ID)
   - **Environments**: ✅ Production ✅ Preview ✅ Development

9. Click **Save** y **Redeploy**

**Estado:** [ ] Pendiente

---

### 5️⃣ SENTRY ERROR TRACKING (OPCIONAL - 3 minutos)

**¿Por qué?** Para detectar errores de JavaScript antes que los usuarios

**Pasos:**

1. Ve a: https://sentry.io/signup/

2. Crea cuenta gratuita

3. Click **Create Project**

4. Configura:
   - **Platform**: React
   - **Project name**: nextwave-ia-landing
   - **Team**: (deja el default)

5. Click **Create Project**

6. Copia el **DSN** (formato: `https://xxx@xxx.ingest.sentry.io/xxx`)

7. Ve a Vercel: https://vercel.com/javier-inguerzons-projects/nextwave-ia-landing/settings/environment-variables

8. Click **Add New**:
   - **Key**: `VITE_SENTRY_DSN`
   - **Value**: (pega el DSN)
   - **Environments**: ✅ Production ✅ Preview ✅ Development

9. Click **Save** y **Redeploy**

**Estado:** [ ] Pendiente

---

## 🎯 RESUMEN DE PRIORIDADES

### 🔴 URGENTE (Hacer ANTES del lanzamiento)

1. [ ] Supabase Migration (2 min)
2. [ ] Stripe Webhook (5 min)

### 🟡 IMPORTANTE (Hacer en la primera semana)

3. [ ] Google Analytics (3 min)

### 🟢 OPCIONAL (Cuando tengas tiempo)

4. [ ] Microsoft Clarity (2 min)
5. [ ] Sentry (3 min)

---

## 🚀 DESPUÉS DE COMPLETAR TODO

### Verificar que funciona:

1. **Supabase Migration**:
   - Ve a Table Editor → Tabla "purchases" existe ✅

2. **Stripe Webhook**:
   - Ve a Stripe Dashboard → Webhooks
   - Click en tu webhook → "Send test webhook"
   - Debería aparecer "✅ Succeeded" en logs

3. **Google Analytics**:
   - Visita tu sitio: https://nextwave-ia-landing.vercel.app
   - Espera 5 minutos
   - Ve a GA4 Dashboard → En tiempo real
   - Deberías ver "1 usuario activo"

4. **Microsoft Clarity**:
   - Visita tu sitio
   - Espera 10 minutos
   - Ve a Clarity Dashboard → Recordings
   - Deberías ver tu sesión grabada

5. **Sentry**:
   - Abre consola del navegador (F12)
   - Escribe: `throw new Error('test')`
   - Ve a Sentry Dashboard
   - Deberías ver el error capturado

---

## 📞 SOPORTE

Si algo no funciona:

- Revisa los logs en Vercel: https://vercel.com/javier-inguerzons-projects/nextwave-ia-landing/logs
- Verifica variables de entorno en Vercel
- Asegúrate de haber hecho **Redeploy** después de agregar variables

---

**Última actualización:** 2026-02-03
**Tiempo estimado total:** 15-20 minutos para todo
