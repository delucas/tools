# Stats

Describí una columna numérica: medidas de centro y dispersión, forma, valores atípicos, histograma y diagrama de caja y bigotes.

## Uso

1. Abrir `index.html`.
2. Pegar una columna de valores: uno por línea, o un CSV de una columna con encabezado opcional.
3. Revisar el resumen, el histograma y la caja y bigotes.
4. Copiar el resumen con “📋 Copiar resumen” o compartir el link.

Acepta punto o coma decimal y descarta los valores no numéricos (avisa cuántos). Si el texto tiene más de una columna numérica, usa la primera y lo indica. Los cuartiles usan interpolación lineal (R-7) y los atípicos, cercas de 1,5 × IQR.

El resumen agrupa las medidas en centro, dispersión, posición y forma. Cada una muestra su fórmula en LaTeX y una línea breve que explica qué mide. La mediana aparece también como Q₂, porque son lo mismo.

El estado se guarda solo en `localStorage` (clave `stats`). “🔗 Compartir” copia un link con los datos si son chicos; “🗑️ Reiniciar” borra lo guardado y vuelve al ejemplo de tiempos con outlier.
