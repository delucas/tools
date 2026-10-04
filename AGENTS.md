# Guía del repositorio

Este repositorio reúne herramientas web autocontenidas. Cada herramienta vive en una carpeta propia en la raíz.

## Implementación

- Cada herramienta contiene solo `index.html` (HTML, CSS y JavaScript embebidos) y `README.md` (propósito y uso).
- No usar backend, build steps, npm, bundlers ni dependencias locales. Todo debe funcionar al abrir el HTML en el navegador.
- Preferir JavaScript vanilla; usar librerías por CDN solo si reducen trabajo de forma significativa.
- Si se necesita estado, preferir Vue.js o JavaScript vanilla, antes de proponer cualquier otra alternativa.
- Fijar versiones exactas de todo CDN; nunca usar `latest` ni versiones implícitas. Reutilizar los mismos CDN y versiones ya usados en otras herramientas (Bootstrap, Vue.js, SortableJS) para mantener consistencia.
- Límite de 1000 líneas de JavaScript embebido por herramienta (se mide sumando los bloques `<script>` sin `src`). Si una herramienta lo supera, analizar si merece una app dedicada fuera de este repo en vez de crecer acá.
- El contenido, nombres de carpetas y READMEs van en español, salvo que se pida expresamente otro idioma.
- La licencia del repositorio es MIT (`LICENSE` raíz); no hace falta duplicarla en cada herramienta.

## Interfaz

- Todo debe ser mobile friendly: verificar a 360px de ancho (cabeceras con `flex-wrap`, columnas con base `col-12`, tablas dentro de `.table-responsive`, botones que envuelvan en vez de desbordar, e inputs a 16px para evitar el auto-zoom de iOS al enfocar).
- Usar Bootstrap por CDN como base visual y sus clases/utilidades antes de crear CSS propio.
- Mantener el estilo predeterminado de Bootstrap: sin paletas, temas ni branding personalizados. Incluir CSS personalizado solo cuando Bootstrap no alcance.
- Cargar `bootstrap.bundle.min.js` únicamente si se usan componentes que lo requieren. Usar Font Awesome por CDN solo si un ícono aporta funcionalidad.
- Todas las herramientas incluyen modo claro/oscuro mediante `data-bs-theme` de Bootstrap 5.3+. Guardar la elección en `localStorage`; si no existe, respetar `prefers-color-scheme`. El control de tema debe ser simple y no requerir íconos externos.
- Para acciones habituales en la cabecera, seguir el patrón `🔗 Compartir`, `🗑️ Reiniciar` y el control de tema `🌙`/`☀️`. No usar Font Awesome solo para estos íconos.
- Los avisos transitorios de confirmación (`notice`: "Copiado", "Guardado", "Link copiado") no deben ocupar ni liberar lugar al aparecer y desaparecer: van siempre flotantes abajo-centro, fuera del flujo, con la clase `alert-flotante`. No reservar hueco (`notice-slot` prohibido) ni usar márgenes que empujen el contenido. Auto-ocultar entre 1800 y 4000 ms.
-
- ```css
- .alert-flotante { position: fixed; bottom: 1rem; left: 50%; transform: translateX(-50%); z-index: 1050; max-width: min(92vw, 560px); margin-bottom: 0; box-shadow: var(--bs-box-shadow); }
- ```
-
- ```html
- <!-- vanilla -->
- <div id="notice" class="alert alert-success py-2 alert-flotante d-none" role="status"></div>
- <!-- vue -->
- <div v-if="notice" class="alert alert-success py-2 alert-flotante" role="status">{{ notice }}</div>
- ```
-
- - Las alertas persistentes o ancladas a un campo (informativas `alert-info`/`role=note`, vacíos tipo "Sin resultados", errores de validación atados a un input) sí van en flujo como bloques normales. Nunca aplicarles `alert-flotante`.
- Toda herramienta numérica debe incluir al menos un gráfico que muestre lo calculado (curva, distribución o evolución), no solo el número: ayuda a entender el resultado.
- Antes del `h1`, agregar el enlace relativo al índice:

```html
<a href="../" class="d-inline-block mb-2 text-body-secondary small text-decoration-none">← Todas las herramientas</a>
```

- El `html` va en español (`<html lang="es">`), salvo que se pida expresamente otro idioma.
- El `h1` lleva tagline debajo, con este formato:

```html
<div>
  <h1 class="h3 mb-1">🦕 Nombre</h1>
  <p class="text-body-secondary mb-0">Descripción corta de una línea.</p>
</div>
```

- Al final, incluir exactamente (con la clase `signature` y su regla CSS):

```html
<p class="signature text-body-secondary">Hecho con ❤️ y ⛏️ por <a href="https://www.sipofcode.com">Lucas</a>, con ayuda de las IA.</p>
```

```css
p.signature { font-size: 0.8em; }
```

## Estado editable

Para herramientas con listas, formularios u opciones editables:

- Persistir los cambios en una sola clave de `localStorage` igual al slug de la carpeta (p. ej. la herramienta `gsd` guarda en la clave `gsd`). La única excepción global es `theme`.
- Inicializar con prioridad `URL > localStorage > valores por defecto`.
- Cuando el estado viene de la URL, no tocar el `localStorage` (un link compartido no debe borrar ni sobrescribir lo guardado).
- La sección `💾 Escritorio` del `index.html` raíz exporta/importa esas claves de una vez (`{ slug: valorEnCrudo }` más `theme` opcional); al agregar una herramienta, sumar su slug a `SLUGS` (y a `LEGACY` solo si reemplaza claves viejas).
- Usar parámetros legibles para estado simple y un único parámetro JSON codificado para estado complejo.
- Ofrecer reset: elimina el estado guardado, restaura valores predeterminados y limpia el query string con `history.replaceState`. El botón `🗑️ Reiniciar` siempre pide confirmación en dos toques, en todas las herramientas: primer clic arma (`¿Seguro? Tocá de nuevo` + `btn-danger`), segundo clic ejecuta el reset real; se desarma solo a los 5 s. Nunca usar `confirm()` nativo ni borrar en un solo clic.
-
- ```js
- // vanilla (ver `8` / `sudoku6` como referencia)
- let resetArmada = false, resetTimer;
- function resetDesarmar() { resetArmada = false; resetBtn.textContent = '🗑️ Reiniciar'; resetBtn.classList.remove('btn-danger'); resetBtn.classList.add('btn-outline-secondary'); }
- resetBtn.addEventListener('click', () => {
-   if (!resetArmada) { resetArmada = true; resetBtn.textContent = '¿Seguro? Tocá de nuevo'; resetBtn.classList.remove('btn-outline-secondary'); resetBtn.classList.add('btn-danger'); clearTimeout(resetTimer); resetTimer = setTimeout(resetDesarmar, 5000); return; }
-   clearTimeout(resetTimer); resetDesarmar(); /* ...reset real... */
- });
- // vue: `resetArmed:false` en data(); `reset()` arma la primera vez (con timeout de 5 s para desarmar) y ejecuta la segunda; botón con `:class` y texto según `resetArmed`.
- ```
- Cuando corresponda, ofrecer compartir: copiar la URL con el estado codificado al portapapeles.
- Repetir esta lógica dentro de cada `index.html`; no crear helpers compartidos.

## Patrones con Vue.js

Para herramientas con estado que usen Vue.js (vía CDN, versión fija):

- No guardar elementos del DOM en `data()`: Vue los envuelve en un Proxy y rompe las comparaciones de identidad (`===`). Usar una variable de módulo.
- Inicializar librerías de terceros (p. ej. SortableJS para reordenar por arrastre) de forma perezosa: con guardia por identidad del elemento y reintentando cuando el estado cambie, porque el contenedor puede no existir al montar (lista vacía).
- Al usar SortableJS, restringir con `draggable` y `handle` para que solo los elementos deseados se arrastren.
- Asociar cada checkbox con su `label` mediante `id` único, para que el texto también active el checkbox.
- Si solo importan los días, guardar fechas como `YYYY-MM-DD` en hora local (sin hora) y normalizar formatos anteriores al cargar.

## Nueva herramienta

1. Crear una carpeta raíz en kebab-case y español.
2. Añadir su `index.html` autocontenido y un `README.md` breve.
3. Agregarla a la tabla de `README.md` raíz y al listado de `index.html` raíz.

## Commits

- Nunca commitear sin orden explícita del humano; por defecto los cambios quedan en el working tree.
- Mensajes simples y cortos, en español, describiendo el cambio.
- Solamente el mensaje: sin coautorías, sin menciones a IA ni metadatos extra.
- Revisar `git status` antes de `git add` y agregar solo los archivos que correspondan al cambio.
- Un commit por cambio lógico; separar cambios independientes en commits distintos.
- No ejecutar acciones destructivas o irreversibles con git (`reset --hard`, `clean -f`, `push --force`, reescribir historia publicada, borrar ramas o stashes). Ante la duda, no tocar.
- Nunca pushear: el `push` lo hace el humano.
