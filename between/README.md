# Between

Diferencias de tiempo entre una o más fechas, en el orden que las pongas: una fecha se compara con ahora; dos o más generan tramos consecutivos (A→B, B→C…).

## Uso

1. Abrir `index.html`.
2. Agregar fechas con `+ Agregar fecha`; cada fila lleva fecha y un toggle opcional "con hora".
3. Sin hora en ambos extremos el tramo se expresa en años, meses y días; con hora en alguno se suman horas y minutos.
4. Con `⏱ + Agregar ahora` sumás una marca viva del momento actual (con o sin hora); todo se refresca una vez por minuto.
5. Reordenar arrastrando desde `⠿` (el orden define los tramos).
5. Todo se guarda en `localStorage`. Compartir copia una URL con todas las fechas (`?d=`). Reiniciar vuelve al ejemplo y limpia el query string.
