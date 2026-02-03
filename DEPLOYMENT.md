# NextWave IA - Guía de Deployment

## 🚀 Deployment Automático

El proyecto está configurado con CI/CD automático usando GitHub Actions y Vercel.

### Push a Production

```bash
git add .
git commit -m "descripción de cambios"
git push origin master
```

Esto automáticamente:
1. Ejecuta tests (vitest)
2. Valida linting (ESLint)
3. Verifica types (TypeScript)
4. Hace build (Vite)
5. Despliega a Vercel Production

### Preview Deployments

Cada Pull Request genera automáticamente un deployment de preview:
1. Abre un PR en GitHub
2. GitHub Actions crea deployment de preview
3. El bot comenta el URL en el PR

## 🔧 Configuración de Variables de Entorno

### En Vercel Dashboard

1. Ve a: https://vercel.com/tu-proyecto/settings/environment-variables

2. Agrega estas variables:

**REQUERIDAS:**
```
VITE_SUPABASE_URL=https://tu-proyecto.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

**BACKEND (webhooks):**
```
SUPABASE_SERVICE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
BREVO_API_KEY=xkeysib-...
STRIPE_SECRET_KEY=sk_live_...
STRIPE_WEBHOOK_SECRET=whsec_...
```

**ANALYTICS (opcionales):**
```
VITE_SENTRY_DSN=https://xxx@xxx.ingest.sentry.io/xxx
VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX
VITE_CLARITY_PROJECT_ID=xxxxxxxxx
```

### Usando Vercel CLI

```bash
# Agregar variable
vercel env add NOMBRE_VARIABLE

# Ver variables
vercel env ls

# Eliminar variable
vercel env rm NOMBRE_VARIABLE
```

## 📦 Deployment Manual

Si necesitas hacer deployment manual:

```bash
# Login a Vercel (solo primera vez)
vercel login

# Deploy a preview
vercel

# Deploy a production
vercel --prod
```

## 🗄️ Migraciones de Base de Datos

Las migraciones de Supabase están en `supabase/migrations/`.

### Aplicar Migraciones

#### Opción 1: Supabase Dashboard
1. Ve a SQL Editor en Supabase Dashboard
2. Copia y pega el contenido de `001_create_purchases_table.sql`
3. Ejecuta

#### Opción 2: Supabase CLI
```bash
# Instalar Supabase CLI
npm install -g supabase

# Login
supabase login

# Vincular proyecto
supabase link --project-ref tu-proyecto-id

# Aplicar migraciones
supabase db push
```

## 🔐 Configuración de Webhooks

### Stripe Webhook

1. Ve a: https://dashboard.stripe.com/webhooks
2. Crea nuevo endpoint
3. URL: `https://tu-dominio.vercel.app/api/stripe-webhook`
4. Eventos a escuchar:
   - `checkout.session.completed`
   - `checkout.session.async_payment_succeeded`
   - `checkout.session.async_payment_failed`
5. Copia el Webhook Secret
6. Agrégalo en Vercel: `STRIPE_WEBHOOK_SECRET=whsec_...`

## 📊 Configurar Analytics

### Google Analytics 4

1. Crea propiedad en: https://analytics.google.com/
2. Obtén tu Measurement ID (formato: G-XXXXXXXXXX)
3. Agrégalo en Vercel: `VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX`

### Microsoft Clarity

1. Crea proyecto en: https://clarity.microsoft.com/
2. Obtén tu Project ID
3. Agrégalo en Vercel: `VITE_CLARITY_PROJECT_ID=xxxxxxxxx`

### Sentry

1. Crea proyecto en: https://sentry.io/
2. Obtén tu DSN
3. Agrégalo en Vercel: `VITE_SENTRY_DSN=https://xxx@xxx.ingest.sentry.io/xxx`

## 🔄 Rollback

Si necesitas volver a una versión anterior:

```bash
# Ver deployments
vercel ls

# Promover deployment anterior a production
vercel promote [deployment-url]
```

O desde Vercel Dashboard:
1. Ve a Deployments
2. Encuentra el deployment anterior
3. Click en "..." → "Promote to Production"

## 🧪 Testing en Production

Después de cada deployment, verifica:

- [ ] Sitio carga correctamente
- [ ] Formulario ProjectInquiry funciona
- [ ] Newsletter signup funciona
- [ ] Navegación entre páginas
- [ ] Analytics registra eventos
- [ ] Stripe payments funcionan (modo test primero)

## 🚨 Troubleshooting

### Build Fails

```bash
# Limpiar cache de Vercel
vercel --force

# Verificar build local
npm run build
```

### Variables de Entorno No Funcionan

1. Verifica que estén agregadas en el environment correcto (Production/Preview/Development)
2. Redeploy después de agregar variables nuevas
3. Las variables con prefijo `VITE_` son públicas (frontend)
4. Las variables sin prefijo son privadas (backend/API routes)

### API Routes 404

Verifica que `vercel.json` tenga la configuración de rewrites correcta.

## 📝 Logs

Ver logs en tiempo real:

```bash
vercel logs [deployment-url] --follow
```

O en Vercel Dashboard → Deployment → Runtime Logs
