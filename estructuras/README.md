# Estructuras

Dibujá matrices, pilas, colas, grafos, árboles y arreglos para tus clases con un motor compartido: cada estructura es una especificación (texto + opciones) sobre el mismo canvas, paleta y exports.

## Uso

1. Elegí la pestaña: Arreglo, Matriz, Pila / Cola, Lista, Árbol o Grafo.
2. Escribí los valores y tocá ▶ Aplicar.
   - Matriz: una fila por línea, columnas separadas por coma (las filas pueden tener distinta cantidad: no se rellenan).
   - Pila/cola: lista con coma o por línea (en pila el primero es el tope; en cola van de frente a fin).
   - Lista: valores con coma o por línea; tipo simple, doble o circular, con punteros head y tail opcionales.
   - Grafo: una arista por token (coma o línea) como `A-B:3` (costo opcional); `G` sola es un nodo aislado. Los nodos se arrastran y conservan su lugar.
   - Árbol: un nodo por línea, con sangría para los hijos (Tab mete 2 espacios). El layout es automático.
   - Arreglo: valores con coma o por línea; punteros como `i:2` (letra:índice visible). Arrastrá ⬆ para moverlos.
3. Pintá celdas y nodos con la paleta o cambiá el trazo de las líneas tocando la forma (🧹 Sin formato los quita).
4. Exportá en SVG, PNG (fondo transparente), 📋 Excalidraw (flechas bindeadas a los nodos, todo agrupado) o PPTX con figuras editables para tus diapositivas.
5. Ajustá opciones (nombre, base, índices, orientación, punteros) y todo viaja en el link de 🔗 Compartir.

Todo se guarda en el navegador (clave `estructuras`, viaja con el Escritorio).

## Contrato de spec

Todo lo que necesita una estructura nueva:

- `slug`, `nombre`, `hint`, `ejemplo`.
- `opciones`: `[{ key, etiqueta, tipo: texto|select|check, defecto }]` (el formulario se genera solo).
- `dibujar(estado) -> { shapes, W, H }` con formas `{rect, circle, line, arrow, text}` e ids estables (los colores persisten por id).
- Roles de pintura: `celda`/`nodo` (relleno), `linea` (trazo); `grupo` para flecha + cartel.
- Opcional: `drag` en una forma + `onDrag(estado, clave, x, y)` para arrastrar (el motor convierte a coordenadas de mundo); `ghost: true` para áreas de toque invisibles (no salen en los exports, con `pinta` redirigen el pintado); `tabIndent: true` para que Tab maneje sangría en el textarea.

El motor (canvas, paleta, SVG/PNG/PPTX/Excalidraw, estado y links) no se toca.

Convención: los indicadores usan glifos direccionales (⬆ ⬅ ⬇ ➡) en vez de líneas dibujadas — p. ej. ➡ para el tope y ⬆ para frente/fin. Vale también para arreglos y futuras estructuras.
