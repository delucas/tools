# Roller

Dados de N caras (entre 2 y 1000), de 1 a 20 dados por tirada, suma, distribución exacta, historial y descarga en CSV.

## Uso

1. Elegí las caras con el número o los atajos (d4, d6, d8, d10, d12, d20, d100).
2. Indicá cuántos dados suma cada tirada (por ejemplo, `2` para tirar 2d6). Tocá `🎲 Tirar` para una tirada, o pedí hasta 100 tiradas con `Tirar N veces` (salen de a una, cada 100 ms, y se destacan en el historial).
3. El gráfico muestra la probabilidad de cada suma posible según las caras y la cantidad de dados: con 2d6, el 7 es más probable que el 2. También resalta la suma de la última tirada.
4. El historial guarda fecha, caras, dados, valores individuales y suma (hasta 500). Copialo o descargalo en CSV, o borralo con `🗑️ Borrar`.
5. Todo se guarda automáticamente en el navegador. `🗑️ Reiniciar` restaura el d6 vacío.

Aleatoriedad: cada dado usa `crypto.getRandomValues` con muestreo por rechazo (sin sesgo de módulo). La distribución de la suma se calcula de forma exacta combinando las caras de cada dado.
