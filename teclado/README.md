# Teclado

Detector de distribución de teclado y probador de teclas, todo en el navegador.

## Qué hace

- **Detecta la distribución** comparando la posición física de cada tecla (`event.code`) con el carácter que produce el sistema (`event.key`).
- Reconoce, entre otras, **US**, **Español (España)**, **Español (Latinoamérica)**, **UK** y **Alemán**.
- Guía con **teclas testigo**: las posiciones que más diferencian una distribución de otra.
- Muestra la **confianza** de cada candidato y la tabla de lo que espera cada distribución.
- **Prueba las teclas** sobre un dibujo del teclado: ilumina la tecla presionada y muestra su `key`, `code`, modificadores, posición y `keyCode`.
- Si hay una distribución de referencia, marca en verde las teclas que coinciden y en rojo las que no, con el detalle de la diferencia.
- Lleva la cuenta de las teclas probadas y lista las que faltan.
- Incluye una zona de escritura libre para ver el resultado real de tipear.

## Cómo detecta

El navegador no expone el nombre del layout configurado en el sistema operativo. La herramienta lo deduce por las diferencias entre dos datos de cada evento:

- `event.code`: la tecla física, independiente del layout (por ejemplo, `Semicolon` es siempre la tecla a la derecha de la L).
- `event.key`: el carácter que produjo esa tecla según el layout activo (por ejemplo, `;`, `ñ` u `ö`).

Cada distribución candidata tiene una tabla de `code → carácter`. La herramienta calcula qué tan bien encaja lo observado con cada tabla y muestra el porcentaje. Con dos o tres teclas testigo alcanza para una detección confiable.

Las **teclas muertas** (como el acento agudo del teclado español) se reportan como `Dead` y también se usan como evidencia.

## Uso

1. Abrir `index.html` en el navegador.
2. Hacer clic en la zona de captura y presionar 2 o 3 teclas testigo.
3. Leer la distribución detectada y, si coincide, tocar **Usar esta distribución**.
4. Bajar a **Probá tus teclas**: presionar todas las teclas para ver cuáles responden y cuáles no coinciden con la distribución esperada.
5. `🔗 Compartir` copia un link con la distribución elegida; `🗑️ Reiniciar` borra el estado y vuelve a la detección automática (pide confirmación en dos toques); `🌙`/`☀️` cambia el tema.

## Estado

- Guarda solo la distribución elegida en `localStorage['teclado']` como `{ "v": 1, "layout": "es" }`.
- Prioridad URL (`?layout=es`) > `localStorage` > `auto`. Un link compartido no pisa lo guardado.
- Las muestras y las teclas probadas son transitorias: no se guardan.
- Se integra con `💾 Escritorio` del índice raíz.

## Límites

- No lee el layout del sistema operativo: lo infiere por lo que producen las teclas.
- Las variantes que solo cambian con AltGr (por ejemplo, US Internacional) no se distinguen con teclas simples.
- Algunos atajos del navegador o del sistema no llegan a la página, así que no se pueden probar.
- En teclados ANSI no existe la tecla entre Shift y Z; en algunos teclados ISO con macOS esa tecla produce `§` y `±` en vez de `\` y `|`.
- No prueba el hardware a nivel físico: si una tecla no genera ningún evento, no hay forma de saber si falla la tecla, el cable o el sistema.

## Trivias

Al final de la herramienta hay tres preguntas desplegables sobre el origen del QWERTY, la tecla Ñ y las teclas muertas.
