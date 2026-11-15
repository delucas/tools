/* Service worker mínimo del catálogo.
   - Instalación: guarda el índice, el manifest y los íconos para abrir sin red.
   - Navegación: red primero (contenido fresco) y caché como respaldo offline.
   - Recursos propios: caché primero, con actualización en segundo plano.
   - CDN: caché primero; se vuelve a pedir con CORS para no guardar respuestas opacas.
   Al cambiar archivos del sitio, subí VERSION para invalidar la caché anterior. */

const VERSION = 'v1';
const CACHE = `tools-${VERSION}`;
const SHELL = [
  './',
  './index.html',
  './manifest.webmanifest',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './icons/icon-maskable-512.png',
  './icons/apple-touch-icon.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE)
      .then((cache) => cache.addAll(SHELL))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((claves) => Promise.all(claves.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

// Las herramientas pueden llevar estado en la query: se cachea la URL sin query.
function clave(request) {
  const url = new URL(request.url);
  url.search = '';
  url.hash = '';
  return url.href;
}

async function redPrimero(request) {
  const cache = await caches.open(CACHE);
  try {
    const respuesta = await fetch(request);
    if (respuesta.ok) cache.put(clave(request), respuesta.clone());
    return respuesta;
  } catch {
    return (await cache.match(clave(request))) || (await cache.match('./index.html'));
  }
}

async function cachePrimero(request) {
  const cache = await caches.open(CACHE);
  const guardada = await cache.match(clave(request));
  const red = fetch(request)
    .then((respuesta) => {
      if (respuesta.ok) cache.put(clave(request), respuesta.clone());
      return respuesta;
    })
    .catch(() => null);
  return guardada || (await red) || Response.error();
}

// Los <script>/<link> a CDN viajan como no-cors (respuesta opaca). Se piden de nuevo
// con CORS, que cdnjs y jsDelivr permiten, para guardar una respuesta verificable.
async function cdnPrimero(request) {
  const cache = await caches.open(CACHE);
  const guardada = await cache.match(request, { ignoreSearch: true });
  if (guardada) return guardada;
  const respuesta = await fetch(request.url, { mode: 'cors', credentials: 'omit' });
  if (respuesta.ok) cache.put(request, respuesta.clone());
  return respuesta;
}

self.addEventListener('fetch', (event) => {
  const { request } = event;
  if (request.method !== 'GET') return;

  const url = new URL(request.url);
  if (url.protocol !== 'http:' && url.protocol !== 'https:') return;

  if (request.mode === 'navigate') {
    event.respondWith(redPrimero(request));
    return;
  }
  if (url.origin === self.location.origin) {
    event.respondWith(cachePrimero(request));
    return;
  }
  event.respondWith(cdnPrimero(request).catch(() => Response.error()));
});
