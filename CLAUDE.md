# Lineamientos del proyecto

Este repo es una colección de herramientas web **autocontenidas**. Cada herramienta vive en su propia carpeta en la raíz.

## Reglas para cada herramienta

- Un único archivo `index.html` por herramienta: HTML + CSS (`<style>`) + JS (`<script>`) embebidos, sin build step.
- Nada de dependencias locales (`node_modules`, bundlers, npm). Si hace falta una librería externa, referenciarla por CDN (`<script src="https://cdn...">`) directo en el HTML.
- Cero backend. Todo corre client-side en el navegador.
- Cada carpeta de herramienta tiene:
  - `index.html` — la herramienta.
  - `README.md` — qué hace, cómo usarla, capturas si suma.
- El HTML debe verse prolijo al abrirlo solo (sin depender de contexto externo): título, estructura clara.
- Preferir vanilla JS. Sumar una librería por CDN solo si ahorra mucho código (ej: una lib de gráficos, markdown, etc.) — no por costumbre.

## Estilo visual

- Base: Bootstrap vía CDN (`<link>` al CSS de Bootstrap). No reimplementar sus estilos a mano.
- Sin CSS custom encima salvo que sea absolutamente necesario (algo que Bootstrap no resuelve). Usar las clases utilitarias de Bootstrap tal cual antes de escribir una línea de CSS propia.
- Nada de temas, paletas ni personalización de marca — se usa el look default de Bootstrap.
- JS de Bootstrap (`bootstrap.bundle.min.js`): sumarlo **solo si la herramienta usa** un componente que lo necesita (dropdown, modal, tooltip, collapse, etc.). Si todo es CSS + JS vanilla propio, no se incluye.
- Íconos: Font Awesome vía CDN, solo cuando un ícono sea realmente necesario (no decorativo porque sí).

## Dark / light mode

- Toda herramienta debe permitir elegir entre modo claro y oscuro. Se usa el `data-bs-theme` nativo de Bootstrap 5.3+ — nada de paleta propia, los colores son los default de Bootstrap en cada modo.
- Al cargar: si hay preferencia guardada en `localStorage`, usarla; si no, arrancar según `prefers-color-scheme` del sistema.
- Un botón simple (texto o emoji ☀️/🌙, sin sumar Font Awesome solo para esto) togglea `data-bs-theme` en `<html>` y guarda la elección en `localStorage`.

Snippet de referencia (pegar y ajustar el id del botón):

```html
<button id="theme-toggle" class="btn btn-outline-secondary btn-sm">🌙</button>
<script>
  const root = document.documentElement;
  const btn = document.getElementById('theme-toggle');
  const stored = localStorage.getItem('theme');
  const initial = stored || (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  const apply = (t) => { root.setAttribute('data-bs-theme', t); btn.textContent = t === 'dark' ? '☀️' : '🌙'; };
  apply(initial);
  btn.addEventListener('click', () => {
    const next = root.getAttribute('data-bs-theme') === 'dark' ? 'light' : 'dark';
    localStorage.setItem('theme', next);
    apply(next);
  });
</script>
```

## Volver al índice

Cada herramienta lleva, arriba de todo (antes del `<h1>`), un link de vuelta al índice general:

```html
<a href="../" class="d-inline-block mb-2 text-body-secondary small text-decoration-none">← Todas las herramientas</a>
```

Es un link relativo (`../`, la raíz del repo donde vive el `index.html` general), no un path absoluto. En herramientas cuya UI quedó en otro idioma (excepción explícita), el texto del link se traduce junto con el resto de la UI (ej. `← All tools`).

## Estado: localStorage, reset y URL

Toda herramienta cuyo usuario carga datos editables (listas, formularios, opciones) debe:

- **Persistir en `localStorage`** bajo una clave propia de la herramienta, actualizándola en cada cambio de estado.
- **Botón de reset**: borra la clave de `localStorage`, vuelve el estado a sus valores por defecto y limpia el query string de la URL (`history.replaceState`).
- **Inicializar desde la URL**: al cargar, leer el estado desde query params antes que de `localStorage`. Prioridad: `URL > localStorage > default`.
  - Estado simple (un valor): un query param legible, ej. `?e=expresion`.
  - Estado complejo (listas/objetos): serializar a JSON y pasarlo por un único param, ej. `?data=` + `encodeURIComponent(JSON.stringify(...))`.
- **Botón de compartir** (cuando el estado sea compartible): copia al portapapeles la URL actual con el estado codificado, para no obligar a armarla a mano.

No hace falta un archivo o helper compartido entre herramientas — cada una es autocontenida, así que esta lógica se repite (duplicada) en cada `index.html`.

## Versionado de CDNs

- Toda referencia a CDN (Bootstrap, Font Awesome, cualquier librería) se **pinea a la última versión estable disponible al momento de crear la herramienta**. Nunca `@latest` ni sin versión — siempre el número exacto (ej. `bootstrap@5.3.3`).
- Cuando se pida actualizar el estilo de todas las herramientas, se re-pinea cada una a la última versión estable disponible en ese momento.

## Pie de página

Toda herramienta lleva, al final, esta firma (siempre en este formato, incluso en herramientas cuya UI esté en otro idioma):

```html
<p>Hecho con ❤️ y ⛏️ por <a href="https://www.sipofcode.com">Lucas</a>, estandarizado por Claude.</p>
```

## Idioma

- Todo en español (UI de las herramientas, READMEs, nombres de carpeta) salvo excepción explícita del usuario.

## Licencia

- MIT, ver [`LICENSE`](./LICENSE) en la raíz. Aplica a todo el repo, no hace falta repetirla por herramienta.

## Estructura

```
/tools
  README.md              ← índice general de herramientas
  CLAUDE.md               ← este archivo
  LICENSE                 ← MIT
  nombre-herramienta/     ← kebab-case, en español (ej. conversor-csv)
    index.html
    README.md
```

## Al crear una herramienta nueva

1. Crear carpeta `nombre-herramienta/` en la raíz.
2. `index.html` autocontenido siguiendo las reglas de arriba.
3. `README.md` corto: qué resuelve, cómo se usa.
4. Sumar la herramienta a la tabla del `README.md` raíz.
5. Sumar un link a la herramienta en el `index.html` raíz (la landing con la lista de herramientas).
