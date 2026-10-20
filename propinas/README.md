# Propinas

Calculadora de propina, total a pagar y división por persona para salidas en grupo. Todo se calcula en el navegador.

## Uso

1. Ingresá el **importe de la cuenta** (obligatorio). Acepta `48000`, `48.000` o `48000,50`. Los campos editables muestran los importes sin separador de miles para que puedas tipear sin pelear con los puntos.
2. Elegí la **propina** con los atajos (`0`, `5`, `10`, `12`, `15`, `20`) o escribí un porcentaje personalizado.
3. Indicá cuántas **personas** van a dividir la cuenta.
4. Mirá el **resultado**: propina, total y por persona. El gráfico muestra cómo se compone el total entre cuenta, propina y redondeo.

Los espacios de los errores, del botón para volver al porcentaje y del gráfico están reservados: el formulario no se mueve mientras escribís.

## Importes fijados

El porcentaje es el modo inicial. Si en **Total a pagar** o **Por persona** escribís un importe, ese campo queda fijado (lo indica el badge `fijado`) y el resto se recalcula. Por ejemplo, si fijás el total en `$53.000`, la propina y el por-persona salen de ahí.

- El último importe editado manda.
- Si fijás un importe final, el redondeo se desactiva: ese importe es exactamente el que pediste.
- Con **↩ Volver a porcentaje** volvés al modo porcentaje usando la propina efectiva actual (o el último porcentaje si el importe fijado no es válido).
- Si el total o el por-persona no alcanzan a cubrir la cuenta, la herramienta muestra un error y no permite copiar el resumen.

## Redondeo

Disponible en modo porcentaje:

- **Sin redondear**.
- **Al próximo $100**.
- **Al próximo $1.000**.
- **Personalizado**: un múltiplo entero en pesos, por ejemplo `500`, `2000` o `2.000`.

El redondeo se suma a la propina base y cambia el total. Por eso siempre se muestra la **propina efectiva** y su **porcentaje real**, no solo el porcentaje inicial. Ejemplo: cuenta `$48.000`, propina `10%` (base `$4.800`), redondeo al próximo `$1.000` → total `$53.000`, redondeo `+$200`, propina efectiva `$5.000` (`10,4%`), por persona `$17.666,67` con 3 personas.

## Compartir y guardar

- **🔗 Compartir** copia un link con la cuenta, las personas, el modo y el redondeo. Los links compartidos no pisan lo que tengas guardado.
- El estado se guarda en `localStorage` con la clave `propinas`; el tema usa la clave global `theme`.
- **🗑️ Reiniciar** (en dos toques) borra el estado guardado y vuelve a los valores iniciales.

## Trivias

Al final hay tres preguntas desplegables sobre el origen de la palabra «propina», la costumbre en Japón y el porcentaje habitual en Argentina.

## Privacidad

No hay backend ni envío de datos. La cuenta, la propina y la división quedan en tu navegador; el resumen se copia al portapapeles solo cuando lo pedís.
