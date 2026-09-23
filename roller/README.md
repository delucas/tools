# Roller

Dado de N caras (entre 2 y 1000) con tiradas simples o múltiples, historial y descarga en CSV.

## Uso

1. Elegí las caras con el número o los atajos (d4, d6, d8, d10, d12, d20, d100).
2. Tocá `🎲 Tirar` para una tirada, o pedí hasta 100 tiradas con `Tirar N veces` (salen de a una, cada 100 ms, y se destacan en el historial).
3. El historial guarda fecha, caras y resultado (hasta 500). Copialo o descargalo en CSV, o borralo con `🗑️ Borrar`.
4. Todo se guarda automáticamente en el navegador. `🗑️ Reiniciar` restaura el d6 vacío.

Aleatoriedad: `crypto.getRandomValues` con muestreo por rechazo (sin sesgo de módulo), verificado con test chi-cuadrado en d6, d7, d20 y d100.
