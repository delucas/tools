# Fingerprint

Calculá MD5, SHA-1, SHA-256, SHA-384 y SHA-512 de un texto o de archivos, con historial local.

## Uso

1. Pegá un texto y tocá `Calcular hashes del texto`, o arrastrá archivos (o tocalos para elegirlos).
2. El resultado actual muestra los 5 hashes, cada uno con su botón 📋 para copiarlo.
3. El historial guarda nombre, tipo (texto/archivo), tamaño, fecha y los 5 hashes (hasta 100). Podés borrar filas con ✕, copiarlo o descargarlo en CSV, o vaciarlo con `🗑️ Borrar`.
4. Todo se calcula y guarda en tu navegador: nada se sube a ningún lado. `🗑️ Reiniciar` borra todo.

MD5 y SHA-1 sirven para integridad y compatibilidad, no para contraseñas ni firmas. MD5 usa SparkMD5 por CDN (la primera vez necesita conexión); SHA usa `crypto.subtle` del navegador.
