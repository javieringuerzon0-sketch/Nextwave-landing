# 🚀 Nextwave IA - Guía de Deployment en Hostinger

## 📋 Requisitos Previos

- Cuenta de GitHub con el repositorio configurado
- Cuenta de Hostinger con hosting activo
- Variables de entorno configuradas

## 🔧 Configuración Inicial

### 1. Variables de Entorno en Hostinger

Accede a tu panel de Hostinger y configura las siguientes variables de entorno:

```bash
# Supabase
VITE_SUPABASE_URL=tu_url_de_supabase
VITE_SUPABASE_ANON_KEY=tu_anon_key

# Brevo (Email)
BREVO_API_KEY=tu_brevo_api_key

# Sentry (Opcional)
VITE_SENTRY_DSN=tu_sentry_dsn

# Stripe
STRIPE_SECRET_KEY=tu_stripe_secret_key
STRIPE_WEBHOOK_SECRET=tu_webhook_secret

# Google Analytics (Opcional)
VITE_GA_MEASUREMENT_ID=tu_measurement_id

# Gemini API
GEMINI_API_KEY=tu_gemini_api_key
```

### 2. Conectar GitHub a Hostinger

#### Opción A: Mediante Git (Recomendado)

1. Accede a tu hosting vía SSH
2. Navega a `public_html` o tu directorio web
3. Clona el repositorio:

   ```bash
   git clone https://github.com/javieringuerzon0-sketch/Nextwave-landing.git .
   ```

4. Instala dependencias:

   ```bash
   npm install
   ```

5. Crea archivo `.env.local` con tus variables de entorno

6. Genera el build de producción:

   ```bash
   npm run build
   ```

7. Mueve los archivos de `dist` a la raíz:

   ```bash
   cp -r dist/* .
   ```

#### Opción B: Mediante GitHub Actions (Automático)

Hostinger soporta deployments automáticos. Configura en el panel:

1. Ve a "Git" en el panel de Hostinger
2. Conecta tu repositorio de GitHub
3. Selecciona la rama `master`
4. Configura el comando de build: `npm run build`
5. Directorio de output: `dist`

### 3. Configuración de Dominio

1. En el panel de Hostinger, ve a "Dominios"
2. Apunta tu dominio al directorio donde está el build
3. Asegúrate de que `.htaccess` esté en la raíz para el manejo de rutas SPA

### 4. SSL/HTTPS

Hostinger provee SSL gratuito:

1. Ve a "SSL" en el panel
2. Activa "SSL Gratuito" para tu dominio
3. Fuerza HTTPS (ya configurado en `.htaccess`)

## 🔄 Actualización del Sitio

### Actualización Manual

```bash
# 1. Conecta vía SSH
ssh tu_usuario@tu_dominio.com

# 2. Navega al directorio
cd public_html

# 3. Pull de cambios
git pull origin master

# 4. Instala nuevas dependencias (si hay)
npm install

# 5. Build
npm run build

# 6. Mueve archivos
cp -r dist/* .
```

### Actualización Automática (GitHub Actions)

Si configuraste GitHub Actions, solo necesitas:

```bash
git add .
git commit -m "Update: descripción de cambios"
git push origin master
```

El deployment se hará automáticamente.

## 📁 Estructura de Archivos en Hostinger

```
public_html/
├── .htaccess           # Configuración de Apache
├── index.html          # Entrada principal
├── assets/             # CSS, JS, imágenes compilados
├── .env.local          # Variables de entorno (NUNCA en Git)
├── api/                # Funciones serverless (si aplica)
└── ...                 # Otros archivos del build
```

## ✅ Verificación Post-Deployment

1. **Verifica que el sitio carga**: Visita tu dominio
2. **Revisa la consola**: F12 → Console (no debe haber errores)
3. **Prueba rutas**: Navega por diferentes secciones
4. **Verifica formularios**: Prueba el contacto y chat
5. **Revisa analytics**: Confirma que Google Analytics esté funcionando

## 🐛 Troubleshooting

### Error 404 en rutas internas

- ✅ Solución: Verifica que `.htaccess` esté en la raíz y configurado correctamente

### Assets no cargan (404)

- ✅ Solución: Verifica que los archivos de `dist` se copiaron correctamente

### Variables de entorno no funcionan

- ✅ Solución: En Hostinger, las variables `VITE_*` deben configurarse antes del build

### Redirección infinita HTTPS

- ✅ Solución: Comenta temporalmente las reglas de redirección en `.htaccess`

## 🔒 Seguridad

- ✅ `.env.local` está en `.gitignore` (nunca subir a GitHub)
- ✅ HTTPS forzado mediante `.htaccess`
- ✅ Headers de seguridad configurados
- ✅ API keys del lado del servidor protegidas

## 📈 Performance

- ✅ Compresión GZIP habilitada
- ✅ Cache de navegador configurado
- ✅ Code splitting automático (Vite)
- ✅ Assets optimizados

## 🆘 Contacto y Soporte

Si encuentras problemas:

1. Revisa los logs de Hostinger
2. Consulta la documentación de Hostinger
3. Contacta al soporte de Hostinger si es necesario

---

**Última actualización**: 2026-02-04
