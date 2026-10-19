# 🎲 Asignatron

Reparte al azar un elemento de cada lista por destinatario. Si una lista tiene menos elementos que destinatarios, se reasignan hasta que todos reciban; si tiene más, el excedente no se usa. Ideal para sortear regalos, tareas, turnos o quién trae qué.

## Uso

1. Escribí **un destinatario por línea**.
2. Cargá una o más **listas asignables**, cada una con su nombre y un elemento por línea.
3. Tocá **Generar asignaciones**.

El resultado se muestra como una tabla: una fila por destinatario y una columna por lista, con los elementos que le tocaron a cada uno. Con **Volver a sortear** se recalcula con los datos actuales; cualquier edición limpia el resultado anterior.

Desde la tabla podés **Copiar como texto** (una línea por destinatario con todas sus asignaciones) o **Abrir en Tabletop** para seguirla editando o exportarla a Markdown, CSV y más.

## Reglas del reparto

- Los elementos de cada lista se sortean **de forma independiente** de las demás listas.
- Cada destinatario recibe **un elemento** de cada lista (ni dos ni ninguno, siempre que la lista tenga al menos un elemento).
- Si la lista tiene **menos elementos** que destinatarios, se reasignan al azar hasta que todos reciban; un elemento puede repetirse entre personas distintas.
- Si la lista tiene **más elementos** que destinatarios, el excedente no se asigna (se informa cuántos quedaron afuera).
- Los destinatarios **repetidos** son un error: hay que corregirlos.
- Los **elementos repetidos** dentro de una misma lista se ignoran automáticamente y se avisa cuántos.
- El azar usa `crypto.getRandomValues` con mezcla Fisher–Yates y rechazo, para que el sorteo no esté sesgado.

Todo queda en tu navegador, sin cuentas ni servidores. Podés **compartir** un enlace con los datos cargados (comparte las entradas, no el sorteo) y **reiniciar** para volver a empezar.
