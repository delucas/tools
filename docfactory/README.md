# DocFactory

Pequeño motor de combinar correspondencia: una plantilla Markdown con `{{marcadores}}` más un CSV pegado generan un documento por cada fila.

## Uso

1. Escribí la plantilla en Markdown usando `{{nombre-del-campo}}`. El nombre debe coincidir exacto con el encabezado del CSV; los campos detectados aparecen como botones para insertarlos donde esté el cursor.
2. Pegá el CSV (encabezados en la primera fila, separado por comas, con comillas si un valor contiene comas).
3. Navegá los documentos con Anterior/Siguiente o el selector. Si a una fila le falta un dato, el `{{marcador}}` queda visible y se muestra un aviso.
4. Copiá el documento visible o descargalo como `.md` (`doc-N.md`), o descargá todos juntos en `documentos.md`.
5. Todo se guarda en el navegador. Compartir copia una URL con plantilla y datos; Reiniciar vuelve al ejemplo.
