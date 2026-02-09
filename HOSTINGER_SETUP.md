# 🔧 Configuración de Hostinger FTP

## Error actual: "530 Login incorrect"

### ✅ Paso 1: Obtener credenciales correctas de Hostinger

1. Entra a tu panel de Hostinger (hpanel.hostinger.com)
2. Ve a **Sitios web** → Selecciona tu dominio
3. En el menú lateral, busca **Archivos** → **Administrador de archivos** o **FTP**
4. Busca la sección **Cuentas FTP** o crea una nueva cuenta FTP

**Datos que necesitas:**

- **Servidor FTP**: Generalmente es `ftp.tudominio.com` o un servidor como `srv123.hostinger.com`
- **Usuario FTP**: Puede ser `u123456789` o `tudominio.com` (depende de Hostinger)
- **Contraseña FTP**: La que configuraste o te dieron
- **Puerto**: 21 (FTP normal) o 990 (FTPS)
- **Directorio**: `/public_html/` o `/domains/tudominio.com/public_html/`

---

### ✅ Paso 2: Configurar secretos en GitHub

1. Ve a tu repositorio en GitHub
2. Click en **Settings** (Configuración)
3. En el menú lateral: **Secrets and variables** → **Actions**
4. Agrega o actualiza estos 3 secretos:
   - **FTP_SERVER**: `ftp.tudominio.com` (o el servidor que te dio Hostinger)
   - **FTP_USERNAME**: tu usuario FTP completo
   - **FTP_PASSWORD**: tu contraseña FTP

**⚠️ IMPORTANTE**:

- NO incluyas `ftp://` en el servidor
- NO incluyas el puerto en el servidor
- La contraseña debe ser exacta (sin espacios extras)

---

### ✅ Paso 3: Probar la conexión

Después de configurar los secretos, haz un commit cualquiera para activar el deploy:

```bash
# Esto activará el deploy automáticamente
git commit --allow-empty -m "test: Verify FTP connection"
git push origin master
```

Luego ve a **GitHub** → **Actions** y revisa si ahora el deploy funciona ✅

---

### 🔧 Solución alternativa si FTPS no funciona:

Algunos servidores de Hostinger solo aceptan FTP normal (sin 'S'). Si el error persiste, cambia el protocolo en `.github/workflows/deploy-hostinger.yml`:

```yaml
protocol: ftp # En lugar de ftps
```

---

### 📞 Soporte Hostinger

Si sigues sin poder conectarte:

- Contacta al soporte de Hostinger
- Pídeles que verifiquen que tu cuenta FTP esté activa
- Pídeles las credenciales exactas (servidor, usuario, puerto)
