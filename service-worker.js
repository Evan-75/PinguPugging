
const CACHE = 'pingu-offline-first-v260';
const PRECACHE = [
  "./README.md",
  "./README.txt",
  "./app.js",
  "./assets/periodic-table-mobile.png",
  "./assets/periodic-table-mobile.svg",
  "./elements.js",
  "./filter-info.js",
  "./icon-192.png",
  "./icon-512.png",
  "./index.html",
  "./manifest.json",
  "./style.css"
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE).then(cache => cache.addAll(PRECACHE))
  );
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(resp => resp || fetch(event.request))
  );
});
