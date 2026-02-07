# 🔐 Configuración SSH para Hostinger

## PASO 1: Obtener Credenciales SSH de Hostinger

### Opción A: Desde el Panel de Hostinger (hPanel)

1. **Inicia sesión en Hostinger**
   - Ve a <https://hpanel.hostinger.com/>
   - Inicia sesión con tu cuenta

2. **Accede a Configuración SSH**
   - En el panel principal, selecciona tu hosting
   - Ve a **Avanzado** → **SSH Access** (Acceso SSH)
   - O busca "SSH" en el buscador del panel

3. **Habilita SSH** (si no está habilitado)
   - Activa el toggle "SSH Access"
   - Se generarán automáticamente tus credenciales

4. **Anota tus credenciales**

   ```
   Host/IP: server-XX-XX.hosting.com (ejemplo: server-123-456.hosting.com)
   Port: 22 (puerto estándar)
   Username: u123456789 (ejemplo, será diferente)
   Password: [usa tu contraseña de hosting o genera una nueva]
   ```

### Opción B: Credenciales que necesitamos

Te aparecerán estos datos en el panel:

- **SSH Username**: `uXXXXXXXXX` (número único)
- **Server/Host**: `server-XXX-XXX.hosting.com`
- **Port**: `22`
- **Password**: Tu contraseña de hosting (o puedes cambiarla)

---

## IMPORTANTE: Información que necesito de ti

Por favor, obtén del panel de Hostinger y dime:

1. **SSH Username**: u_________
2. **Server/Host**: server-_**-**_.hosting.com
3. **Port**: (normalmente 22)
4. **Directorio web**: (normalmente `public_html` o el nombre de tu dominio)

---

## Una vez que tengas esa información, procedemos con la conexión
