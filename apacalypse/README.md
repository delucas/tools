# APAcalypse

Generador de bibliografía en formato APA 7 a partir del ISBN del libro. Sin cuentas, sin API keys: consulta Open Library (y Google Books como respaldo) directamente desde el navegador.

## Uso

1. Pegá un ISBN-10 o ISBN-13, con o sin guiones, y elegí Agregar.
2. La cita se genera y se guarda automáticamente en el navegador. Si cargás el ISBN-10 y el ISBN-13 del mismo libro, se guarda una sola vez.
3. Copiá una cita con su botón 📋, o tildá varias y usá Copiar seleccionadas. Ordenar A–Z las deja en el orden que pide APA. La copia incluye formato: al pegar en Word o Google Docs el título conserva la cursiva; en destinos de texto plano se pega sin formato.
4. Si un título o nombre quedó mal (mayúsculas de nombres propios, datos incompletos), corregilo con el botón ✏️ de la cita: se guarda tu versión y queda marcada como editada.
4. Compartir copia una URL con tus ISBN para abrir la lista en otro navegador. Reiniciar borra todo.

## Notas

- La fuente principal es Open Library (sin key y sin cupo problemático). Google Books se usa solo como respaldo y sin key suele estar limitado por cuota, así que la cobertura depende sobre todo de Open Library.
- Los metadatos a veces están incompletos (falta editorial o año). Si falta algo, la cita lo indica: revisala antes de entregarla.
- Los nombres se convierten a formato `Apellido, A. A.` con una heurística simple y los títulos a minúsculas de oración; los nombres propios pueden requerir corrección manual.
