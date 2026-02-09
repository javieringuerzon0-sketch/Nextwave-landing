# 🔧 Solución para Error "530 Login incorrect"

## ⚠️ El problema:

El servidor FTP de Hostinger rechaza las credenciales. Esto significa que **usuario O contraseña están incorrectos**.

---

## ✅ SOLUCIÓN PASO A PASO:

### 1️⃣ Verifica tus credenciales en Hostinger:

Ve a: **hpanel.hostinger.com** → **Archivos** → **FTP Accounts**

**Datos que necesitas:**

```
Servidor:  217.196.55.111
Usuario:   u819742742.nextwaveia.com
Puerto:    21
```

### 2️⃣ **VERIFICA LA CONTRASEÑA**:

⚠️ **Este es el problema más común**. Asegúrate de:

- Copiar la contraseña **EXACTAMENTE** como aparece
- NO agregar espacios al inicio o final
- Si la contraseña tiene caracteres especiales (`@`, `#`, `$`, etc.), cópialos exactamente

💡 **RECOMENDACIÓN**: Si no estás seguro de la contraseña:

1. Ve a **Hostinger FTP Accounts**
2. Click en **Change Password** para la cuenta `u819742742.nextwaveia.com`
3. Genera una **nueva contraseña SIN caracteres especiales** (solo letras y números)
4. Guárdala en GitHub Secrets

---

### 3️⃣ Actualizar secretos en GitHub:

1. Ve a: `https://github.com/javieringuerzon0-sketch/Nextwave-landing/settings/secrets/actions`

2. **Edita estos secretos** (click en cada uno → Update):

   | Secreto        | Valor EXACTO                |
   | -------------- | --------------------------- |
   | `FTP_SERVER`   | `217.196.55.111`            |
   | `FTP_USERNAME` | `u819742742.nextwaveia.com` |
   | `FTP_PASSWORD` | `[tu-contraseña-exacta]`    |

3. **Asegúrate de que NO haya espacios** al copiar y pegar

---

### 4️⃣ Probar la conexión manualmente (opcional):

Puedes probar tu conexión FTP con FileZilla:

1. Descarga FileZilla (cliente FTP gratuito)
2. Conecta con:
   - Host: `217.196.55.111`
   - Usuario: `u819742742.nextwaveia.com`
   - Contraseña: [tu contraseña]
   - Puerto: `21`

Si FileZilla NO puede conectarse, el problema está en tus credenciales de Hostinger.

---

### 5️⃣ Después de actualizar los secretos:

Haz un push cualquiera para activar el deploy:

```bash
git commit --allow-empty -m "test: Retry FTP with correct credentials"
git push origin master
```

---

## 🆘 Si sigue sin funcionar:

1. **Contacta soporte de Hostinger** y pide:
   - Verificar que la cuenta FTP `u819742742.nextwaveia.com` esté **activa**
   - Verificar que el servidor `217.196.55.111` sea el correcto
   - Verificar que el puerto `21` esté abierto

2. **Posible solución**: Crear una **nueva cuenta FTP** desde el panel de Hostinger con una contraseña simple (solo letras y números)
