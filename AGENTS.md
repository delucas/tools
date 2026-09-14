# Guía del repositorio

Este repositorio reúne herramientas web autocontenidas. Cada herramienta vive en una carpeta propia en la raíz.

## Implementación

- Cada herramienta contiene solo `index.html` (HTML, CSS y JavaScript embebidos) y `README.md` (propósito y uso).
- No usar backend, build steps, npm, bundlers ni dependencias locales. Todo debe funcionar al abrir el HTML en el navegador.
- Preferir JavaScript vanilla; usar librerías por CDN solo si reducen trabajo de forma significativa.
- Si se necesita estado, preferir Vue.js o JavaScript vanilla, antes de proponer cualquier otra alternativa.
- Fijar versiones exactas de todo CDN; nunca usar `latest` ni versiones implícitas. Reutilizar los mismos CDN y versiones ya usados en otras herramientas (Bootstrap, Vue.js, SortableJS) para mantener consistencia.
- El contenido, nombres de carpetas y READMEs van en español, salvo que se pida expresamente otro idioma.
- La licencia del repositorio es MIT (`LICENSE` raíz); no hace falta duplicarla en cada herramienta.

## Interfaz

- Usar Bootstrap por CDN como base visual y sus clases/utilidades antes de crear CSS propio.
- Mantener el estilo predeterminado de Bootstrap: sin paletas, temas ni branding personalizados. Incluir CSS personalizado solo cuando Bootstrap no alcance.
- Cargar `bootstrap.bundle.min.js` únicamente si se usan componentes que lo requieren. Usar Font Awesome por CDN solo si un ícono aporta funcionalidad.
- Todas las herramientas incluyen modo claro/oscuro mediante `data-bs-theme` de Bootstrap 5.3+. Guardar la elección en `localStorage`; si no existe, respetar `prefers-color-scheme`. El control de tema debe ser simple y no requerir íconos externos.
- Para acciones habituales en la cabecera, seguir el patrón `🔗 Compartir`, `🗑️ Reiniciar` y el control de tema `🌙`/`☀️`. No usar Font Awesome solo para estos íconos.
- Antes del `h1`, agregar el enlace relativo al índice:

```html
<a href="../" class="d-inline-block mb-2 text-body-secondary small text-decoration-none">← Todas las herramientas</a>
```

- Al final, incluir exactamente:

```html
<p>Hecho con ❤️ y ⛏️ por <a href="https://www.sipofcode.com">Lucas</a>, con ayuda de las IA.</p>
```

## Estado editable

Para herramientas con listas, formularios u opciones editables:

- Persistir los cambios en una clave propia de `localStorage`.
- Inicializar con prioridad `URL > localStorage > valores por defecto`.
- Usar parámetros legibles para estado simple y un único parámetro JSON codificado para estado complejo.
- Ofrecer reset: elimina el estado guardado, restaura valores predeterminados y limpia el query string con `history.replaceState`.
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
