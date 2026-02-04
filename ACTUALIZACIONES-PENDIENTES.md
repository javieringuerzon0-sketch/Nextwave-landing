# 📋 Actualizaciones Pendientes - NextWave IA

## 🔄 Variables con Placeholders (Actualizar cuando tengas las cuentas)

### Google Analytics 4

**Estado actual:** Placeholder (`G-PLACEHOLDER123`)
**Cómo actualizar:**

1. Ir a: https://analytics.google.com/
2. Crear propiedad: "NextWave IA Landing"
3. Copiar Measurement ID (G-XXXXXXXXXX)
4. Actualizar en Vercel:
   ```bash
   npx vercel env rm VITE_GA_MEASUREMENT_ID production
   echo "G-TU-ID-REAL" | npx vercel env add VITE_GA_MEASUREMENT_ID production
   ```
5. Redeploy: `npx vercel --prod`

### Microsoft Clarity

**Estado actual:** Placeholder (`clarity-placeholder`)
**Cómo actualizar:**

1. Ir a: https://clarity.microsoft.com/
2. Crear proyecto: "NextWave IA"
3. Copiar Project ID
4. Actualizar en Vercel:
   ```bash
   npx vercel env rm VITE_CLARITY_PROJECT_ID production
   echo "TU-PROJECT-ID" | npx vercel env add VITE_CLARITY_PROJECT_ID production
   ```
5. Redeploy: `npx vercel --prod`

### Sentry

**Estado actual:** Placeholder
**Cómo actualizar:**

1. Ir a: https://sentry.io/
2. Crear proyecto (React)
3. Copiar DSN
4. Actualizar en Vercel:
   ```bash
   npx vercel env rm VITE_SENTRY_DSN production
   echo "TU-DSN" | npx vercel env add VITE_SENTRY_DSN production
   ```
5. Redeploy: `npx vercel --prod`

---

## 🌐 Dominio Personalizado (Opcional)

**Actualmente:** nextwave-ia-landing.vercel.app
**Para configurar dominio propio (ej: nextwaveia.com):**

1. Comprar dominio en: Namecheap, GoDaddy, o Google Domains
2. En Vercel Dashboard:
   - Settings → Domains
   - Add domain: `nextwaveia.com`
   - Add: `www.nextwaveia.com`
3. Configurar DNS (en tu registrador):

   ```
   Type: A
   Name: @
   Value: 76.76.21.21

   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com
   ```

4. Esperar propagación (24-48 horas)

---

## 📧 Emails Transaccionales (Opcional)

**Para enviar emails de confirmación de compra:**

### Opción 1: Resend (Recomendado)

1. Crear cuenta: https://resend.com/
2. Verificar dominio
3. Obtener API key
4. Agregar a Vercel:
   ```bash
   echo "TU-API-KEY" | npx vercel env add RESEND_API_KEY production
   ```
5. Crear función en `api/send-email.ts`

### Opción 2: SendGrid

1. Crear cuenta: https://sendgrid.com/
2. Crear API key
3. Agregar a Vercel:
   ```bash
   echo "TU-API-KEY" | npx vercel env add SENDGRID_API_KEY production
   ```

---

## 💳 Stripe Modo Live (Cuando estés listo para cobros reales)

**Actualmente:** Modo Test (sk*test*...)
**Para activar modo producción:**

1. Completar activación de cuenta en Stripe
2. Obtener Live keys:
   - https://dashboard.stripe.com/apikeys
   - Copiar: Secret key (sk*live*...)
3. Actualizar en .env.local:
   ```bash
   STRIPE_SECRET_KEY=sk_live_...
   ```
4. Actualizar webhook:
   - Eliminar webhook de test
   - Crear nuevo webhook en modo live
   - Actualizar STRIPE_WEBHOOK_SECRET en Vercel
5. Redeploy y probar con tarjeta real

---

## ✅ Lo que YA está configurado y funcionando

- [x] Supabase Migration (tabla purchases)
- [x] Stripe Webhook (modo test)
- [x] Variables de Vercel
- [x] Favicons + OG Image + Apple Touch Icon
- [x] SEO completo
- [x] Security headers
- [x] Performance optimization
- [x] CI/CD con GitHub Actions
- [x] Testing (Vitest)
- [x] Error tracking preparado (Sentry placeholder)
- [x] Analytics preparado (GA4 + Clarity placeholders)

---

## 🎯 Checklist de Lanzamiento

### Antes de hacer público:

- [ ] Actualizar GA4 con ID real
- [ ] Actualizar Clarity con ID real
- [ ] Actualizar Sentry con DSN real
- [ ] Configurar dominio personalizado (opcional)
- [ ] Cambiar a Stripe Live mode
- [ ] Probar flujo completo de compra
- [ ] Verificar emails de confirmación (si configuraste)

### Al lanzar:

- [ ] Anunciar en redes sociales
- [ ] Enviar a clientes/contactos
- [ ] Monitorear analytics primeras 24h
- [ ] Revisar errores en Sentry
- [ ] Verificar que las compras se guardan en Supabase

---

**Última actualización:** 2026-02-03
**Proyecto:** NextWave IA Landing
**URL:** https://nextwave-ia-landing.vercel.app
