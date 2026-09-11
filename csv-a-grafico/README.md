# CSV a Gráfico

Pegá datos en formato CSV y generá un gráfico: torta, series (barras apiladas) o líneas. Usa [Chart.js](https://www.chartjs.org/) para el renderizado, con una paleta de colores fija (mismo color para la misma posición de serie/categoría en cada generación).

## Uso

1. Abrir `index.html`.
2. Pegar el CSV en el textarea, con encabezado. Primera columna: categorías. Columnas siguientes: una serie cada una.
   - Soporta separador por coma o por punto y coma (se detecta solo), y decimales con coma si el separador es punto y coma.
3. Opcional: ponerle un título al gráfico en el campo de arriba.
4. Elegir el tipo de gráfico:
   - **🥧 Torta**: una sola serie (la primera columna de valores), con número y porcentaje por porción.
   - **📊 Series**: cada columna de valores es una serie, en barras apiladas.
   - **📈 Líneas**: cada columna de valores es una línea distinta.

   En Series y Líneas, los ejes se titulan solos con el encabezado del CSV: el eje X toma el nombre de la primera columna, y el eje Y el de la serie cuando hay una sola (con varias series, esa info ya la da la leyenda).

El CSV, el título y el tipo de gráfico elegido se guardan en `localStorage`. El botón 🗑️ borra todo y vuelve al ejemplo. El botón 🔗 copia un link con los datos, el título y el tipo de gráfico codificados en la URL (parámetros `data`, `title` y `type`), para compartir el gráfico ya armado.
