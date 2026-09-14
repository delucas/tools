# PSEditor

Editor de pseudocódigo en español construido con CodeMirror 6. Resalta sintaxis, indenta bloques, muestra números de línea y completa paréntesis, corchetes y llaves. Las palabras reservadas se escriben en mayúsculas e incluyen `ALGORITMO`. El editor usa Eclipse en modo claro y Dracula en modo oscuro.

## Uso

1. Escribí las palabras reservadas en mayúsculas. `ALGORITMO`, `FUNCION`, `SI`, `SI NO`, `PARA` y `MIENTRAS` abren bloques delimitados solo con indentación; Enter indenta automáticamente la línea siguiente.
2. Usá `#` para comentarios. Los operadores `<=`, `>=`, `!=`, `<-` y `->` se convierten automáticamente a Unicode.
3. Creá, renombrá, elegí o eliminá archivos desde la barra superior. Los archivos de ejemplo y los nuevos usan la extensión `.pse`; todos se guardan en el navegador.
4. Compartir archivo copia un enlace que contiene el nombre y el contenido del documento seleccionado. Al abrirlo, el archivo compartido tiene prioridad sobre el almacenamiento local.
5. Asigná un nombre al workspace, por ejemplo `Grafos - Recorrido.workspace`. Guardar workspace descarga `<nombre>.md` con todos los archivos en bloques de código `.pse`; podés leerlo con cualquier editor de texto o volver a abrirlo desde la herramienta.

La constante `PSEUDOCODE_CONFIG` de `index.html` reúne las palabras clave, operadores y sustituciones para adaptar la sintaxis sin construir un parser.
