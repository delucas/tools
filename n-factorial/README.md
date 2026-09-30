# n! — Explorador de conjuntos finitos

Explorador visual de combinatoria sobre conjuntos finitos: definí un conjunto y recorré sus 10 estructuras (potencia, combinaciones, permutaciones, variaciones, variaciones con repetición, combinaciones con repetición, derangements, particiones, particiones en k bloques y composiciones), con fórmulas en LaTeX, conteos exactos y enumeración paginada. Incluye la sección Explosión combinatoria para comparar el crecimiento de 2ⁿ, n!, n³ y Bₙ.

## Uso

1. Abrir `index.html`.
2. Escribir los elementos separados por comas o saltos de línea (ej: `a, b, c, d`).
3. Elegir una familia y ajustar `k`, la longitud o las partes según corresponda.
4. Filtrar, paginar, copiar o exportar a TXT/CSV.

El estado se guarda solo en `localStorage` (clave `n-factorial`). Con el botón "🔗 Compartir" se copia un link con el estado (`?e=…&f=…&k=…&l=…`). El botón "🗑️ Reiniciar" borra lo guardado y vuelve al ejemplo inicial.

Los conteos usan `BigInt` (exactos) y la enumeración se limita a 2000 objetos con aviso: espacios más grandes muestran el total exacto más una muestra.

## Convención del pseudocódigo

Cada familia muestra el algoritmo que genera sus objetos, siguiendo la especificación de sintaxis de pseudocódigo del repo (la misma de PSEditor): `ALGORITMO` en mayúsculas, `←` para asignar, `|S|` para el cardinal, índices desde 0, `PARA…HASTA…HACER`, `MIENTRAS`, `SI…ENTONCES…SINO`, `//` para comentarios y bloques delimitados solo con indentación.

Única diferencia: la indentación es de **2 espacios** en vez de 4, para que los bloques entren en el panel sin scroll horizontal. Con el botón "↗ Abrir en PSEditor" el código se abre directamente en esa herramienta.
