/* Versão do cache e array contendo os recursos para o cache*/
const staticCacheName = "restaurant-review-v1";

const cacherecursos = [
    './',
    './css/styles.css',
    './data/restaurants.json',
    './img/1.jpg',
    './img/2.jpg',
    './img/3.jpg',
    './img/4.jpg',
    './img/5.jpg',
    './img/6.jpg',
    './img/7.jpg',
    './img/8.jpg',
    './img/9.jpg',
    './img/10.jpg',
    './js/dbhelper.js',
    './js/main.js',
    './js/restaurant_info.js',
    './js/serviceworker_reg.js',
    './index.html',
    './restaurant.html',
    'https://fonts.googleapis.com/css?family=Rubik:400,400i,500,700,700i'
];

self.addEventListener('install', function(e) {
    e.waitUntil(
        caches.open(staticCacheName).then(function(cache) {
            console.log("Cache funcionando!");
            return cache.addAll(cacherecursos);
        }),
    )
})

self.addEventListener('activate', function(event) {
    event.waitUntil(
        caches.keys().then(function(nomesCache) {
            return Promise.all(
                nomesCache.filter(function(versaoCache) {
                    return versaoCache.startsWith('restaurant-') && versaoCache != staticCacheName;
                }).map(function(versaoCache) {
                    return cache.delete(versaoCache);
                })
            )
        })
    ) 
});

self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request).then(function(response) {
            if(response) {
                console.log(event.request.url);
                return response;
            }
        })
    )
});