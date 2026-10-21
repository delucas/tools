# Cerrajero

Perfil de llave sobre la pantalla del celular: un jig visual inspirado en [Key Copier](https://lab.flipper.net/apps/key_copier) de Flipper Zero.

## Qué hace

- Muestra una pantalla con 4 a 8 líneas verticales ajustables.
- Cada línea representa la profundidad de un corte de la llave.
- Al apoyar la llave física sobre la pantalla, se alinean los dientes con la base y cada corte con una línea.
- Arriba del jig, el perfil se dibuja como una línea con los números de cada corte y una flecha sobre el corte seleccionado, al estilo de la app original.
- La línea del perfil y los números (`3 6 2 5 4`) se actualizan en tiempo real.
- La pantalla sigue el tema claro/oscuro: clara en modo claro, negra con naranja en modo oscuro.
- Sin cámara, sin fotos, sin archivos extra ni dependencias de JavaScript.

## Uso

1. Abrir `index.html` en el celular.
2. Apoyar la llave con los dientes hacia abajo, sobre la línea de base de la pantalla. No presionar; mejor con un protector de pantalla.
3. Tocar la línea de un corte para seleccionarlo.
4. Ajustar el nivel con `↑` y `↓`; mantener presionado acelera el ajuste.
5. Leer el perfil y los números sobre cada corte; la secuencia es el código del perfil.
6. `🔗 Compartir` copia un link con el perfil; `🗑️ Reiniciar` vuelve al perfil de ejemplo (pide confirmación en dos toques); `🌙`/`☀️` cambia el tema.
7. `−` / `+` cambia la cantidad de cortes (4 a 8).

## Estado

- Guarda el perfil en `localStorage['cerrajero']` como `{ "v": [3, 6, 2, 5, 4] }`.
- Prioridad URL (`?v=36254`) > `localStorage` > perfil por defecto. Un link compartido no pisa lo guardado.
- Se integra con `💾 Escritorio` del índice raíz.

## Límites

- Es un perfil visual y relativo: no mide milímetros ni reemplaza un calibre.
- La pantalla no detecta la llave; la alineación es manual.
- No identifica keyways: el rótulo `LLAVE` es genérico. La app original muestra el keyway (por ejemplo `KW1`).
- No copia llaves: falta el reverso, el tipo de keyway y la separación exacta.
- Cuidá el vidrio del celular: apoyá sin presionar y usá un protector de pantalla.

## Inspiración

La pantalla se inspira en [Key Copier](https://lab.flipper.net/apps/key_copier), la app de Flipper Zero que muestra el perfil y el bitting de una llave. Acá se adapta a un jig táctil: la llave física se apoya sobre las líneas y el perfil se dibuja arriba con los números y la flecha del corte seleccionado.

## Trivias

Al final de la herramienta hay tres preguntas desplegables sobre el bitting, la escala relativa y los límites del perfil.
