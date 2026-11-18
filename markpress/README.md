# MarkPress

Editor markdown de dos paneles: escribí a la izquierda, mirá el resultado a la derecha.

## Uso

1. Escribí Markdown (títulos, listas, tablas, código) con LaTeX mezclado: `$...$` en línea y `$$...$$` en bloque.
2. Elegí el estilo del documento: Actual, LaTeX (Latin Modern, justificado) o Tufte.
3. Tocá `🖨️ PDF` para abrir el diálogo de impresión ya optimizado (A4, solo el documento) y elegí "Guardar como PDF".
4. Tocá `📝 Writer` para descargar un `.odt` que se abre y se edita en LibreOffice Writer. Usa formato directo (nada de estilos con nombre) sobre A4; las fórmulas se convierten a texto con símbolos Unicode y las imágenes quedan como su texto alternativo.
5. Guardá el fuente con `💾 Guardar` (descarga un `.md`) o abrilo después con `📂 Abrir`.
6. El borrador se guarda automáticamente en este navegador; `🗑️ Reiniciar` vuelve al ejemplo inicial.

Todo corre en el navegador, sin backend. Dependencias por CDN: marked, KaTeX, Bootstrap y fflate (este último solo para empaquetar el `.odt`).
