const CACHE_NAME = 'drip-master-v1';
const urlsToCache = [
  '/drip_master_pro/',
  '/drip_master_pro/index.html',
  '/drip_master_pro/manifest.json'
];

// インストール時にファイルをキャッシュする
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(urlsToCache))
  );
});

// オフライン時でもキャッシュから読み込む
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
