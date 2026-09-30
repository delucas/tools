# Dataset

Generá conjuntos de datos artificiales con propiedades controladas: uniforme, normal, binomial, Poisson o exponencial, con cantidad, parámetros y semilla a elección. Misma semilla, mismos datos.

## Uso

1. Abrir `index.html`.
2. Elegir distribución, parámetros, cantidad y semilla (🎲 para una al azar).
3. Mirar el resumen, la tabla empírico vs teórico y el histograma.
4. Copiar o descargar el CSV para analizarlo en A/B o ¿azar?.

Los parámetros se guardan solos en `localStorage` (clave `dataset`). Con el botón "🔗 Compartir" se copia un link que regenera los mismos datos (`?dist=…&n=…&seed=…`). El botón "🗑️ Reiniciar" borra lo guardado y vuelve al ejemplo normal(100, 15).
