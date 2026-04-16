# Instrucciones para limpiar caché y probar la descarga de PDF

## El problema
El navegador está usando una versión antigua del archivo `script.js` que está en caché.

## Solución: Recargar con caché limpio

### Opción 1: Recarga forzada (Recomendado)
1. Con la página abierta en el navegador, presiona:
   - **Mac**: `Cmd + Shift + R`
   - **Windows/Linux**: `Ctrl + Shift + R`
   
2. Esto forzará al navegador a recargar todos los archivos sin usar caché

### Opción 2: Limpiar caché del navegador
1. Abre las Herramientas de Desarrollo:
   - **Mac**: `Cmd + Option + I`
   - **Windows/Linux**: `F12` o `Ctrl + Shift + I`

2. Haz clic derecho en el botón de recargar (junto a la barra de direcciones)

3. Selecciona "Vaciar caché y recargar de manera forzada"

### Opción 3: Modo incógnito
1. Abre una ventana de incógnito:
   - **Mac**: `Cmd + Shift + N`
   - **Windows/Linux**: `Ctrl + Shift + N`

2. Abre el archivo: `file:///Users/chepe/.gemini/antigravity/scratch/studio-moviles/index.html`

3. Prueba la descarga del PDF

## Verificación
Después de recargar, verifica en la consola del navegador (F12 → Console) que no haya errores cuando hagas clic en "Descargar PDF".

## Si sigue sin funcionar
Si después de limpiar el caché sigue sin funcionar, por favor:
1. Abre la consola del navegador (F12)
2. Haz clic en "Descargar PDF"
3. Copia cualquier mensaje de error que aparezca en rojo
4. Compártelo conmigo para poder diagnosticar el problema
