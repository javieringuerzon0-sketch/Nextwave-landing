# 🔐 CLAVE SSH GENERADA - CONFIGURACIÓN EN HOSTINGER

## ✅ PASO 1: CLAVE SSH GENERADA (COMPLETADO)

Tu clave SSH ha sido generada exitosamente en:

- **Clave privada**: `C:\Users\Javier Inguerzon\.ssh\hostinger_nextwave`
- **Clave pública**: `C:\Users\Javier Inguerzon\.ssh\hostinger_nextwave.pub`

---

## 📋 PASO 2: AGREGAR CLAVE PÚBLICA A HOSTINGER

### Tu Clave Pública SSH (YA ESTÁ EN TU PORTAPAPELES)

```
ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAILoT/QZ0103nsi8hT4OBm4VJwPub4mBmdMn0OOc7OD1Md hostinger-nextwave
```

### Instrucciones para Agregar a Hostinger

#### **Opción A: Desde el Panel de Hostinger (hPanel)**

1. **Accede a Hostinger**
   - Ve a: <https://hpanel.hostinger.com/>
   - Inicia sesión

2. **Navega a SSH Access**
   - Selecciona tu plan de hosting
   - Ve a **Avanzado** → **SSH Access**

3. **Agrega la Clave SSH**
   - Busca la sección "**SSH Keys**" o "**Manage SSH Keys**"
   - Haz clic en "**Add New SSH Key**" o "**Add SSH Key**"

4. **Pega la Clave**
   - **Nombre/Label**: `nextwave-deployment`
   - **Clave pública**: Presiona `Ctrl+V` para pegar (ya está en tu portapapeles)
   - La clave debe empezar con: `ssh-ed25519 AAAAC3NzaC1lZDI1NTE5...`

5. **Guarda**
   - Haz clic en "**Add Key**" o "**Save**"

---

#### **Opción B: Mediante SSH Terminal (Manual)**

Si Hostinger tiene terminal SSH integrado:

1. Abre el **Browser SSH Terminal** desde hPanel
2. Ejecuta estos comandos:

```bash
# Crear directorio .ssh si no existe
mkdir -p ~/.ssh
chmod 700 ~/.ssh

# Agregar tu clave pública
echo "ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAILoT/QZ0103nsi8hT4OBm4VJwPub4mBmdMn0OOc7OD1Md hostinger-nextwave" >> ~/.ssh/authorized_keys

# Configurar permisos correctos
chmod 600 ~/.ssh/authorized_keys
```

---

## ✅ PASO 3: VERIFICAR CONEXIÓN (YO LO HARÉ)

Una vez que hayas agregado la clave en Hostinger, avísame con "listo" y yo:

1. Me conectaré vía SSH usando la clave
2. Clonaré el repositorio de GitHub
3. Instalaré dependencias
4. Generaré el build de producción
5. Configuraré todo automáticamente

---

## 🎯 ¿QUÉ HACER AHORA?

1. **Abre tu navegador** → <https://hpanel.hostinger.com/>
2. **Ve a SSH Access** (Avanzado → SSH Access)
3. **Busca "Add SSH Key"** o similar
4. **Pega la clave** (Ctrl+V, ya está copiada en tu portapapeles)
5. **Guarda**
6. **Dime "listo"** y yo continúo con el deployment automático

---

## 📝 COPIA DE LA CLAVE (por si acaso)

Si necesitas copiarla nuevamente, aquí está:

```
ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAILoT/QZ0103nsi8hT4OBm4VJwPub4mBmdMn0OOc7OD1Md hostinger-nextwave
```

---

## ⚠️ IMPORTANTE

- Esta clave SSH es **específica para Hostinger**
- No compartas la clave privada con nadie
- La clave pública es segura compartirla (es la que agregamos a Hostinger)

---

Una vez que agregues la clave, **avísame** y procedemos con el deployment completo. 🚀
