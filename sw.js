const CACHE_NAME = 'vce-v1';
const ASSETS = [
  '/',
  '/index.html',
  '/css/style.css',
  '/js/app.js',
  '/js/data.js',
  '/js/services/store.js',
  '/js/services/api.js',
  '/js/services/copy.js',
  '/js/services/analytics.js',
  '/js/services/autopick.js',
  '/js/components/script-card.js',
  '/js/components/footage-finder.js',
  '/js/components/auto-mode.js',
  '/js/tabs/generator.js',
  '/js/tabs/analytics.js',
  '/js/tabs/assembler.js',
  '/js/tabs/affiliates.js',
  '/js/tabs/schedule.js',
  '/js/tabs/rules.js',
  '/js/tabs/settings.js'
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});
