const nomeCache = "versaocache"

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
        caches.open(nomeCache).then(function(cache) {
            console.log("Cache funcionando!");
            cache.addAll(cacherecursos);
         });
         console.log("[service worker] installed");

    )
});

self.addEventListener('activate', function(e) {
    console.log("[service worker] activated")
    e.waitUntil(
        caches.keys().then(function(nomeCache) {
            return Promise.all()
        })
    )
});

self.addEventListener('fetch', function(e) {
    console.log("[service worker] fetched")
});