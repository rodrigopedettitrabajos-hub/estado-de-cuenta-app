/* Guarda la página para que abra sin internet. Con internet trae siempre la última versión (pregunta al servidor
   sin usar la memoria del navegador); si la señal es mala y tarda más de 4 segundos, abre la guardada.
   Solo toca archivos de este sitio: HIOFFICE y la librería de Excel pasan directo. version.json tampoco pasa por acá
   (la página lo usa para avisar que hay versión nueva). Los extractos nunca pasan por acá. */
const CACHE = 'estado-de-cuenta';
const FILES = ['./', 'manifest.webmanifest', 'icon-192.png', 'icon-512.png'];
self.addEventListener('install', e => { self.skipWaiting(); e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES))); });
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', e => {
  const req = e.request, url = new URL(req.url);
  if (req.method !== 'GET' || url.origin !== location.origin || url.pathname.endsWith('/version.json')) return;
  const net = fetch(new Request(req, { cache: 'no-cache' })).then(r => {
    if (r.ok) { const copy = r.clone(); caches.open(CACHE).then(c => c.put(req, copy)); }
    return r;
  });
  const saved = () => caches.match(req, { ignoreSearch: true }).then(r => r || (req.mode === 'navigate' ? caches.match('./') : undefined));
  const slow = new Promise(ok => setTimeout(ok, 4000));
  e.respondWith(Promise.race([net, slow]).then(r => r || saved().then(c => c || net)).catch(() => saved().then(c => c || Response.error())));
});
