# n! — Finite Set Explorer

Explorador visual de combinatoria sobre conjuntos finitos: definí un conjunto y recorré sus estructuras (potencia, combinaciones, permutaciones, variaciones y más), con fórmulas en LaTeX, conteos exactos y enumeración paginada.

## Uso

1. Abrir `index.html`.
2. Escribir los elementos separados por comas o saltos de línea (ej: `a, b, c, d`).
3. Elegir una familia y ajustar `k` o la longitud según corresponda.
4. Filtrar, paginar, copiar o exportar a TXT/CSV.

El estado se guarda solo en `localStorage` (clave `n-factorial`). Con el botón "🔗 Compartir" se copia un link con el estado (`?e=…&f=…&k=…&l=…`). El botón "🗑️ Reiniciar" borra lo guardado y vuelve al ejemplo inicial.

Los conteos usan `BigInt` (exactos) y la enumeración se limita a 2000 objetos con aviso: espacios más grandes muestran el total exacto más una muestra.
