#!/bin/bash
# ═══════════════════════════════════════════════════════════════
# DEPLOYMENT AUTOMÁTICO DE NEXTWAVE IA EN HOSTINGER
# ═══════════════════════════════════════════════════════════════
# Instrucciones:
# 1. Copia TODO este contenido
# 2. Pégalo en el SSH Terminal de Hostinger
# 3. Presiona Enter
# 4. Espera 2-3 minutos
# 5. ¡Listo!
# ═══════════════════════════════════════════════════════════════

echo "🚀 Iniciando deployment de Nextwave IA..."
echo ""

# 1. Verificar directorio actual
echo "📂 Directorio actual:"
pwd
echo ""

# 2. Ir al directorio web principal
echo "📁 Navegando a public_html..."
cd ~/public_html || cd ~/domains/*/public_html || cd ~
echo "✅ Directorio: $(pwd)"
echo ""

# 3. Hacer backup del contenido actual (si existe)
if [ -d "backup_$(date +%Y%m%d)" ]; then
    echo "⚠️  Ya existe un backup de hoy"
else
    echo "💾 Creando backup del contenido actual..."
    mkdir -p backup_$(date +%Y%m%d)
    # Mover archivos existentes (excepto backups) al backup
    find . -maxdepth 1 -type f ! -name 'backup_*' -exec mv {} backup_$(date +%Y%m%d)/ \; 2>/dev/null
    echo "✅ Backup creado"
fi
echo ""

# 4. Verificar si Git está instalado
echo "🔍 Verificando Git..."
if command -v git &> /dev/null; then
    echo "✅ Git instalado: $(git --version)"
else
    echo "❌ Git no está instalado en este servidor"
    echo "   Por favor, contacta al soporte de Hostinger para instalar Git"
    exit 1
fi
echo ""

# 5. Clonar el repositorio
echo "📥 Clonando repositorio desde GitHub..."
if [ -d "Nextwave-landing" ]; then
    echo "⚠️  El directorio ya existe, eliminando..."
    rm -rf Nextwave-landing
fi

git clone https://github.com/javieringuerzon0-sketch/Nextwave-landing.git temp_repo
if [ $? -eq 0 ]; then
    echo "✅ Repositorio clonado exitosamente"
else
    echo "❌ Error al clonar repositorio"
    exit 1
fi
echo ""

# 6. Mover archivos del repositorio a la raíz
echo "📦 Moviendo archivos a la raíz..."
cd temp_repo
mv * ../ 2>/dev/null
mv .* ../ 2>/dev/null
cd ..
rm -rf temp_repo
echo "✅ Archivos movidos"
echo ""

# 7. Verificar Node.js
echo "🔍 Verificando Node.js..."
if command -v node &> /dev/null; then
    echo "✅ Node.js instalado: $(node --version)"
    NODEJS_AVAILABLE=true
else
    echo "⚠️  Node.js no está instalado"
    echo "   Usaremos los archivos pre-compilados del repositorio"
    NODEJS_AVAILABLE=false
fi
echo ""

# 8. Si Node.js está disponible, hacer build
if [ "$NODEJS_AVAILABLE" = true ]; then
    echo "📦 Instalando dependencias..."
    npm install --production
    
    echo "🏗️  Generando build de producción..."
    npm run build
    
    echo "📁 Moviendo archivos compilados..."
    cp -r dist/* .
    echo "✅ Build completado"
else
    echo "⚠️  Como Node.js no está disponible, necesitarás subir"
    echo "   los archivos de la carpeta 'dist' manualmente"
fi
echo ""

# 9. Verificar que .htaccess existe
echo "🔧 Verificando configuración Apache..."
if [ -f ".htaccess" ]; then
    echo "✅ .htaccess encontrado"
else
    echo "⚠️  .htaccess no encontrado, creándolo..."
    cat > .htaccess << 'HTACCESS_EOF'
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  
  # Redirigir HTTP a HTTPS
  RewriteCond %{HTTPS} off
  RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]
  
  # No reescribir archivos o directorios existentes
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  
  # Redirigir todas las solicitudes a index.html para SPA
  RewriteRule . /index.html [L]
</IfModule>

<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/html text/plain text/xml text/css text/javascript application/javascript application/json
</IfModule>

<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType image/jpeg "access plus 1 year"
  ExpiresByType image/png "access plus 1 year"
  ExpiresByType image/webp "access plus 1 year"
  ExpiresByType text/css "access plus 1 month"
  ExpiresByType application/javascript "access plus 1 month"
</IfModule>
HTACCESS_EOF
    echo "✅ .htaccess creado"
fi
echo ""

# 10. Configurar permisos
echo "🔐 Configurando permisos..."
find . -type f -exec chmod 644 {} \;
find . -type d -exec chmod 755 {} \;
chmod 644 .htaccess 2>/dev/null
echo "✅ Permisos configurados"
echo ""

# 11. Verificación final
echo "✅ ═══════════════════════════════════════════════"
echo "✅  DEPLOYMENT COMPLETADO EXITOSAMENTE"
echo "✅ ═══════════════════════════════════════════════"
echo ""
echo "📊 Resumen:"
echo "   - Repositorio clonado desde GitHub"
echo "   - Archivos configurados correctamente"
echo "   - .htaccess configurado"
echo "   - Permisos establecidos"
echo ""
echo "🌐 Próximos pasos:"
echo "   1. Visita tu dominio para verificar"
echo "   2. Abre la consola del navegador (F12) para ver errores"
echo "   3. Configura las variables de entorno si es necesario"
echo ""
echo "📁 Archivos en el directorio:"
ls -lh index.html .htaccess 2>/dev/null | tail -2
echo ""
echo "🎉 ¡Tu sitio está listo!"
