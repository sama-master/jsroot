window.addEventListener('install', function(event) {
    event.waitUntil(
      caches.open('v1').then(function(cache) {
        return cache.addAll([
          './',
          '/scope/',
          '/scope/lazysizes.min.js',
          /*'/scope/bootstrap.min.css',*/
          /*'/scope/main.js',*/
          '/scope/samabusinessgtag-prod.js',
          '/scope/manifest.json',
          '/scope/gallery/sigmastoreicon.png'
        ]);
      })
    );
  });
  
  window.addEventListener('fetch', function(event) {
    event.respondWith(caches.match(event.request).then(function(response) {
      // caches.match() always resolves
      // but in case of success response will have value
      if (response !== undefined) {
        return response;
      } else {
        return fetch(event.request).then(function (response) {
          // response may be used only once
          // we need to save clone to put one copy in cache
          // and serve second one
          let responseClone = response.clone();
          
          caches.open('v1').then(function (cache) {
            cache.put(event.request, responseClone);
          });
          return response;
        }).catch(function () {
          return caches.match('/scope/gallery/sigmastoreicon.png');
        });
      }
    }));
  });