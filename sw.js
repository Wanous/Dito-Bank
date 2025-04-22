self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('imc-cache').then((cache) => {
      return cache.addAll([
        '/src/index.html',
        '/src/style.css',
        '/src/app.js',
        '/public/manifest.json',
        '/public/icon-192.png',
        '/public/icon-512.png'
      ]);
    })
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});
