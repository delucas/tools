# AlgoLab

Mesa virtual para enseñar algoritmos con cartas, fichas y fibrones, como si los tuvieras físicamente delante.

## Uso

1. Abrir `index.html`.
2. Pedir objetos desde el panel: cartas (cantidad, palo, rango y repetición), fichas (color aleatorio) o fibrones (color aleatorio, son objetos para separar, no dibujan). Cada pedido se suma a la mesa.
3. Arrastrar con el mouse: lo que movés pasa al frente. Doble clic en una carta (o Enter con el teclado) la voltea entre cara y dorso; doble clic en el paño voltea todas las cartas; doble clic en un fibrón lo rota 90°.
4. Arrastrar cualquier objeto al 🗑️ Descarte (esquina de la mesa) lo quita de la mesa; con el teclado, Supr sobre el objeto enfocado hace lo mismo.
4. Compartir copia la mesa en la URL (mesas grandes avisan y no se comparten por URL). **🧹 Recoger todo** vacía la mesa y limpia el query string.

Todo se guarda en `localStorage` (clave `algolab`): objetos, posiciones, orden de profundidad, valor y palo de cada carta, colores, orientación de fibrones y estado boca arriba/abajo. Sin estado guardado, la mesa empieza vacía.
