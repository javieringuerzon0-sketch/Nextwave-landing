# 🚀 DEPLOYMENT SUPER FÁCIL - HOSTINGER SSH TERMINAL

## ⚡ MÉTODO RÁPIDO (5 MINUTOS)

### 📋 PASO 1: Abrir SSH Terminal en Hostinger

1. **Abre tu navegador** y ve a: **<https://hpanel.hostinger.com/>**
2. **Inicia sesión** con tu cuenta de Hostinger
3. **Selecciona tu plan de hosting** (el que usas para tu sitio)
4. En el menú lateral, busca y haz clic en:
   - **"Terminal SSH"**
   - O **"Avanzado" → "SSH Terminal"**
   - O **"Browser Terminal"**

5. Se abrirá una **terminal negra en tu navegador** (ya estarás conectado automáticamente)

---

### 📝 PASO 2: Copiar y Pegar Comandos

Una vez que veas la terminal SSH de Hostinger, copia TODO el siguiente bloque de comandos y pégalo en la terminal:

```bash
cd ~/public_html && \
git clone https://github.com/javieringuerzon0-sketch/Nextwave-landing.git temp_nextwave && \
cd temp_nextwave && \
cp -r dist/* ~/public_html/ && \
cp .htaccess ~/public_html/ && \
cd ~/public_html && \
rm -rf temp_nextwave && \
chmod 644 .htaccess && \
find . -type f -name "*.html" -exec chmod 644 {} \; && \
find . -type f -name "*.css" -exec chmod 644 {} \; && \
find . -type f -name "*.js" -exec chmod 644 {} \; && \
echo "✅ DEPLOYMENT COMPLETADO - Visita tu dominio para verificar"
```

**Instrucciones:**

1. **Copia** todo el bloque de arriba (desde `cd ~/public_html` hasta el final)
2. **Pega** en la terminal SSH de Hostinger (clic derecho → Paste, o Ctrl+Shift+V)
3. **Presiona Enter**
4. **Espera 30-60 segundos**
5. Verás el mensaje: `✅ DEPLOYMENT COMPLETADO`

---

### ✅ PASO 3: Verificar tu Sitio

1. **Abre tu dominio** en el navegador
2. **Verifica que carga** correctamente
3. Si ves errores, abre la **consola del navegador** (presiona F12)

---

## 🆘 SI HAY ALGÚN ERROR

### Error: "git: command not found"

**Solución:** Hostinger no tiene Git instalado. Usa este método alternativo:

#### **Método Alternativo: Upload Manual**

1. En tu computadora, ve a la carpeta:

   ```
   C:\Users\Javier Inguerzon\.gemini\antigravity\Developer IA\Nextwave IA landing\dist
   ```

2. En Hostinger:
   - Ve a **"Files"** → **"File Manager"**
   - Navega a `public_html`
   - Sube **TODO** el contenido de la carpeta `dist`
   - También sube el archivo `.htaccess` (está en la raíz del proyecto)

3. ¡Listo!

---

### Error: "Permission denied"

**Solución:** Ejecuta este comando en el terminal SSH:

```bash
cd ~/public_html && chmod -R 755 . && chmod 644 .htaccess
```

---

### Error: "Directory not found"

Puede que tu directorio web no sea `public_html`. Identifícalo:

```bash
pwd
ls -la ~
```

Busca directorios como:

- `public_html`
- `domains/tu-dominio.com/public_html`
- `htdocs`

Reemplaza `~/public_html` en los comandos con el directorio correcto.

---

## 📊 VERIFICACIÓN POST-DEPLOYMENT

Después del deployment, verifica:

- [ ] El sitio carga en tu dominio
- [ ] No hay error 404
- [ ] La navegación funciona (Home, Planes, Nosotros)
- [ ] No hay errores en consola (F12)
- [ ] Las imágenes cargan correctamente
- [ ] El formulario de contacto funciona
- [ ] HTTPS está activo (candado verde)

---

## 🎯 RESUMEN SÚPER RÁPIDO

```
1. Abre hPanel → SSH Terminal
2. Copia y pega los comandos de arriba
3. Presiona Enter
4. Espera 1 minuto
5. ¡Listo! Visita tu dominio
```

---

## 💡 ¿NECESITAS LAS VARIABLES DE ENTORNO?

Si tu sitio usa Supabase, Brevo, etc., necesitarás crear un archivo `.env` en el servidor:

```bash
cd ~/public_html
nano .env
```

Pega tus variables:

```env
VITE_SUPABASE_URL=tu_url
VITE_SUPABASE_ANON_KEY=tu_key
BREVO_API_KEY=tu_api_key
GEMINI_API_KEY=tu_gemini_key
```

Presiona `Ctrl+X`, luego `Y`, luego `Enter` para guardar.

**NOTA:** Las variables `VITE_*` se compilan en el build, así que si las cambias, necesitarás hacer un nuevo build.

---

## 🎉 ¡ESO ES TODO

Tu sitio debería estar funcionando ahora. Si tienes algún problema, avísame y te ayudo a resolverlo.

**¡Feliz deployment! 🚀**
