self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('QUIZZ-TI-v1').then(cache => {
      return cache.addAll([
        '/',
        '/src/index.html',
        '/src/assets/imgs/Fundo-Blog.jpg',
        '/src/assets/imgs/Icons8-Ios7-Logos-Small-Icons.512.png',
        '/src/assets/imgs/sistemas-de-ti.png'
      ]);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
