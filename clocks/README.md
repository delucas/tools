# Clocks... assemble!

Lleva el registro de qué hora es para tu equipo o contactos repartidos en distintas timezones. Todo se guarda en el navegador (`localStorage`), no hay backend ni datos que salgan de tu máquina.

## Uso

1. Abrir `index.html`.
2. Agregar una persona: elegir equipo (color), nombre y timezone (buscable, ej. "Buenos Aires" o "Madrid").
3. La hora de cada uno se actualiza sola cada medio segundo. Si su día calendario difiere del tuyo, se marca `(+1)` o `(-1)`.
4. Editar o quitar una fila con los botones de acción.
5. El botón 🔗 copia un link con la lista actual codificada (parámetro `?data=`), para compartirla precargada. El botón 🗑️ borra toda la lista guardada.

Nota: la interfaz de esta herramienta quedó en inglés (excepción explícita al lineamiento general del repo).
