#!/usr/bin/env python3
"""
Script para crear Apple Touch Icon y OG Image desde el logo principal
"""
from PIL import Image
import os

def create_apple_touch_icon():
    """Crear Apple Touch Icon (180x180px) desde Logoo-nw.png"""
    print("Creando Apple Touch Icon...")

    # Abrir imagen original
    img = Image.open('logo/Logoo-nw.png')

    # Convertir a RGB si es RGBA
    if img.mode == 'RGBA':
        # Crear fondo negro
        background = Image.new('RGB', img.size, (0, 0, 0))
        background.paste(img, mask=img.split()[3])  # 3 es el canal alpha
        img = background

    # Redimensionar manteniendo aspect ratio
    img.thumbnail((180, 180), Image.Resampling.LANCZOS)

    # Crear canvas cuadrado de 180x180 con fondo negro
    canvas = Image.new('RGB', (180, 180), (0, 0, 0))

    # Centrar la imagen en el canvas
    offset = ((180 - img.width) // 2, (180 - img.height) // 2)
    canvas.paste(img, offset)

    # Guardar
    canvas.save('public/apple-touch-icon.png', 'PNG', optimize=True)
    print(f"OK - Apple Touch Icon creado: {canvas.size}")


def create_og_image():
    """Crear OG Image (1200x630px) desde Logoo-nw.png"""
    print("Creando OG Image para redes sociales...")

    # Abrir imagen original
    img = Image.open('logo/Logoo-nw.png')

    # Convertir a RGB si es RGBA
    if img.mode == 'RGBA':
        background = Image.new('RGB', img.size, (0, 0, 0))
        background.paste(img, mask=img.split()[3])
        img = background

    # Redimensionar manteniendo aspect ratio para que quepa en 1200x630
    img.thumbnail((1200, 630), Image.Resampling.LANCZOS)

    # Crear canvas de 1200x630 con fondo negro
    canvas = Image.new('RGB', (1200, 630), (0, 0, 0))

    # Centrar la imagen en el canvas
    offset = ((1200 - img.width) // 2, (630 - img.height) // 2)
    canvas.paste(img, offset)

    # Guardar
    canvas.save('public/og-image.png', 'PNG', optimize=True)
    print(f"OK - OG Image creado: {canvas.size}")


if __name__ == '__main__':
    print("NextWave IA - Generador de Iconos\n")

    # Verificar que existe la carpeta public
    if not os.path.exists('public'):
        os.makedirs('public')

    # Crear iconos
    create_apple_touch_icon()
    create_og_image()

    print("\nTodos los iconos creados exitosamente!")
    print("\nArchivos generados:")
    print("  - public/favicon.ico (multi-resolucion)")
    print("  - public/favicon.png (32x32px)")
    print("  - public/apple-touch-icon.png (180x180px)")
    print("  - public/og-image.png (1200x630px)")
