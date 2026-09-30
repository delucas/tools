# ¿azar?

Analizá si una secuencia se parece al modelo esperado: frecuencias observadas vs esperadas, χ² de bondad de ajuste, prueba de rachas para binarias y gráficos de barras y de secuencia.

## Uso

1. Abrir `index.html`.
2. Pegar la secuencia (números o categorías), fijar caras si corresponde y ajustar las esperadas en la tabla.
3. Con el botón de Roller ("🎲 Analizar en ¿azar?") se traen las últimas 500 tiradas del dado actual; también vale pegar su CSV.
4. Leer χ², rachas y la frase de compatibilidad (compatible ≠ aleatorio probado).

La secuencia se guarda sola en `localStorage` (clave `azar`, con tope de tamaño). Con el botón "🔗 Compartir" se copia un link con secuencias chicas. El botón "🗑️ Reiniciar" borra lo guardado y vuelve al ejemplo del dado.
