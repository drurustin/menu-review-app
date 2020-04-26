const staticCacheName = 'app-static-cache-1';
const dynamicCache = 'app-dynamic-cache-1';

// Create cache and save assets to the cache
self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(staticCacheName).then(function(cache) {
      return cache.addAll([
        '/index.html',
        '/js/',
        '/data/restaurants.json',
        '/css/styles.css',
        'https://fonts.googleapis.com/css2?family=Raleway:wght@300;400;600&display=swap',
        'https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css',
        'https://unpkg.com/leaflet@1.3.1/dist/leaflet.css'
      ]);
    })
  );
});

// Remove old caches
// self.addEventListener('activate', function(event) {
//   event.waitUntil(
//     caches.keys().then(function(cacheNames) {
//       return Promise.all(
//         cacheNames.filter(function(cacheName) {
//           return cacheName.startsWith('app-static-cache-') &&
//           cacheName != staticCacheName;
//           }).map(function(cacheName) {
//             return caches.delete(cacheName);
//         })
//       );
//     })
//   );
// });

self.addEventListener("fetch", function(event) {
  console.log(event.target);
  event.respondWith(
    // Attempts to get request from cache
    caches.match(event.request).then(function(cache){
      // returns cache if available and if not continues
      // to get request from the network
      return cache || fetch(event.request).then(fetchRes => {
        return caches.open(dynamicCache).then(function(cache){
        // check if request is made by chrome extensions or web page
        // if request is made for web page url must contain http.
        if (!(event.request.url.indexOf('http') === 0)) return; // skip the request. if request is not made with http protocol
            cache.put(event.request.url, fetchRes.clone());
          return fetchRes;
        })
      });
    })
  );
});