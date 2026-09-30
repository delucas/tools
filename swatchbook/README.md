# Swatchbook

Biblioteca personal de paletas: explorá 8 paletas incluidas (Dracula, Catppuccin Mocha, Nord, Tokyo Night Storm, Gruvbox Dark, Solarized Dark, One Dark y GitHub Light), comparalas, previsualizalas en interfaz y código, y sumá las tuyas.

## Uso

1. Abrir `index.html`.
2. Recorrer la biblioteca, abrir una paleta para ver sus valores HEX, RGB y HSL, y copiar colores o la paleta en CSS, JSON o HEX.
3. Con "🎨 Analizar en Chromatic" se abre la paleta completa en esa herramienta (los primeros 4 van a análisis, el resto queda en la reserva para elegir); pegando una URL de Chromatic en Importar se hace el camino inverso.
4. En Importar se agregan paletas propias desde JSON, lista HEX, variables CSS o URL de Chromatic: funcionan igual que las incluidas.
5. En Mi biblioteca se exporta/importa la colección en JSON.

Las paletas propias, las favoritas y la comparación se guardan solas en `localStorage` (clave `swatchbook`). El botón "🔗 Compartir" copia el link a la paleta abierta. El botón "🗑️ Reiniciar" borra lo propio y deja solo las 8 incluidas.
