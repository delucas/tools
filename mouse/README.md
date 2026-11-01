# Mouse

Probador de mouse en el navegador: clicks, velocidad, reacción, movimiento, rueda y sensibilidad efectiva.

## Qué hace

- **Panel libre**: registra clicks de los cinco botones (izquierdo, central, derecho, atrás y adelante), el total, los dobles y las ráfagas dudosas. Dibuja el recorrido del puntero sobre un canvas.
- **Velocidad en vivo**: muestra clicks por segundo (CPS) del último segundo, clicks por minuto (CPM) del último minuto y el pico de CPS.
- **Prueba de CPS**: mide clicks en 5, 10 o 30 segundos, con CPS promedio, CPM, pico, intervalo promedio y gráfico de clicks por segundo.
- **Tiempo de reacción**: espera un estímulo verde con demora aleatoria, mide los milisegundos hasta el clic y cuenta las salidas en falso. Guarda el mejor tiempo y el promedio.
- **Movimiento**: acumula distancia, velocidad actual, máxima y promedio, cantidad de muestras y una estimación de la tasa de sondeo (polling) a partir de `getCoalescedEvents()`. El gráfico muestra los últimos 10 segundos.
- **Rueda**: cuenta eventos, desplazamiento acumulado, mayor salto, dirección y equivalente en líneas.
- **Sensibilidad efectiva**: arrastrando la distancia física elegida (2, 5, 10 o 20 cm) calcula píxeles por centímetro y por pulgada.

## Uso

1. Abrir `index.html` en el navegador.
2. Mover el mouse y hacer clic en el panel libre para ver botones, trayectoria y tasas.
3. Para CPS, elegir la duración, tocar **Empezar** y hacer clic izquierdo en la zona.
4. Para reacción, tocar **Empezar** y hacer clic cuando la zona se ponga verde.
5. Para sensibilidad, apoyar una regla en la mesa, elegir la distancia y arrastrar en línea recta.
6. `🔗 Compartir` copia un link con la duración de CPS y la distancia de sensibilidad; `🗑️ Reiniciar` borra el estado y vuelve a los valores por defecto (pide confirmación en dos toques); `🌙`/`☀️` cambia el tema.

## Estado

- Guarda solo los ajustes en `localStorage['mouse']` como `{ "v": 1, "cps": 10, "dist": 5 }`.
- Prioridad URL (`?cps=5&dist=10`) > `localStorage` > valores por defecto. Un link compartido no pisa lo guardado.
- Los clicks, las pruebas y las mediciones son transitorios: no se guardan.
- Se integra con `💾 Escritorio` del índice raíz.

## Límites

- La tasa de sondeo es una **estimación** según los eventos que entrega el navegador; no reemplaza una medición de hardware.
- La sensibilidad efectiva **no es el DPI del sensor**: incluye la escala y la aceleración del sistema operativo y del navegador.
- La distancia de movimiento se mide en píxeles CSS de pantalla, no en centímetros.
- Algunos sistemas aceleran o redondean el scroll, así que el desplazamiento de la rueda puede variar entre equipos.
- El navegador no puede probar el hardware a nivel físico: si un botón no genera eventos, no distingue si falla el botón, el cable o el sistema.

## Trivias

Al final de la herramienta hay tres preguntas desplegables sobre DPI, CPS y tasa de sondeo.
