# Tabletop

Convertí tablas entre Markdown, CSV, TSV, HTML, ASCII y LaTeX: pegá, corregí en la grilla y llevate el resultado.

## Uso

1. Abrir `index.html`.
2. Pegar la tabla en el paso 1 y tocar **📥 Cargar a la grilla** (detecta solo si es Markdown, CSV con coma o punto y coma, TSV, HTML, ASCII o LaTeX `tabular`; acepta comillas y decimales con coma).
3. Corregir en la grilla del paso 2: celdas editables, +/− fila y columna, ✕ por fila y llave de primera fila = encabezado.
4. En el paso 3, elegir el tab de salida (**📋 Copiar** o **⬇️ Descargar** como `.md`, `.csv`, `.tsv`, `.html`, `.txt` o `.tex`). El tab **Enriquecido** muestra la tabla renderizada y la copia como HTML real: pegala directo en Word, Docs u Outlook y cae como tabla. El tab **ASCII** deja elegir el ancho máximo de columna (20 por defecto) y parte el texto en vivo. El tab **LaTeX** genera un `tabular` simple con `\hline`.

Todo se guarda en `localStorage`. Compartir copia una URL con la tabla (hasta ~2KB; si es más grande, avisa). Reiniciar vuelve al ejemplo y limpia el query string.
