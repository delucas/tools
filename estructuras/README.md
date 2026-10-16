# Estructuras

Dibujá matrices, pilas y colas para tus clases con un motor compartido: cada estructura es una especificación (texto + opciones) sobre el mismo canvas, paleta y exports.

## Uso

1. Elegí la pestaña: Matriz o Pila / Cola.
2. Escribí los valores y tocá ▶ Aplicar. En matrices: una fila por línea, columnas separadas por coma (las filas pueden tener distinta cantidad: no se rellenan). En pila/cola: lista con coma o por línea (en pila el primero es el tope; en cola van de frente a fin).
3. Pintá celdas con la paleta o cambiá el trazo de las flechas tocando la forma.
4. Exportá en SVG, PNG (fondo transparente), 📋 Excalidraw (cuadrados nítidos, textos atados, todo agrupado) o PPTX con figuras editables para tus diapositivas.
5. Ajustá opciones (nombre, base, índices debajo/dentro/ocultos, orientación) y todo viaja en el link de 🔗 Compartir.

Todo se guarda en el navegador (clave `estructuras`, viaja con el Escritorio).

## Próximo: migrar grafo, árbol y arreglo

Contrato de spec (todo lo que necesita una estructura nueva):

- `slug`, `nombre`, `hint`, `ejemplo`.
- `opciones`: `[{ key, etiqueta, tipo: texto|select|check, defecto }]` (el formulario se genera solo).
- `dibujar(estado) -> { shapes, W, H }` con formas `{rect, circle, line, arrow, text}` e ids estables (los colores persisten por id).
- Roles de pintura: `celda`/`nodo` (relleno), `linea` (trazo); `grupo` para flecha + cartel.

Mapa: grafo = círculos + flechas curvas; árbol = lo mismo con layout por niveles; arreglo = fila de celdas + ⬆ con letra (ver `FLECHAS`). El motor (canvas, paleta, SVG/PNG/PPTX/Excalidraw, estado y links) no se toca.

Convención: los indicadores usan glifos direccionales (⬆ ⬅ ⬇ ➡) en vez de líneas dibujadas — p. ej. ➡ para el tope y ⬆ para frente/fin. Vale también para arreglos y futuras estructuras.
