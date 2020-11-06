'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "168fc61ec5dae9ab5c927b30477fb92d",
"assets/assets/images/Dodatek1.jpg": "ae248c7613ebd659fa9a737ce754bab5",
"assets/assets/images/Dodatek2.jpg": "b46fc6253c9ca22d1e5b06fe2e64a106",
"assets/assets/images/Dodatek3.jpg": "8e17df316ec21867cea20284eea16bab",
"assets/assets/images/Final.jpg": "308c7f103399bcab7af00ab338097d80",
"assets/assets/images/HalfFinal.jpg": "ea773ac3171ab01807ae62bdd91135fc",
"assets/assets/images/HelloWorld.jpg": "b4584db1ccd33ea546c24630cc723669",
"assets/assets/images/Opis.jpg": "44b60883678c13c36df515af8c9819d4",
"assets/assets/images/Opis3.jpg": "2209b337e4b27477e04b759f48e002c1",
"assets/assets/images/Poprawna.jpg": "6eae0834c77460cb2591862ccbf704e9",
"assets/assets/images/Wow.jpg": "34049817bb147b586fd095f9da5cfd50",
"assets/assets/images/Zle.jpg": "a1892b48cb846a4d6405fa5b2e4c9ae4",
"assets/assets/quiz1.mp3": "cb95d54f6416aa6bf9669f58f6d87ea2",
"assets/assets/quiz10.mp3": "ecdb22db833db26f0f874065579ac12a",
"assets/assets/quiz10_no.mp3": "4808aac60ecbce091f23eafdad7adf87",
"assets/assets/quiz10_yes.mp3": "ae009b608d27c5cef2105de7b53381ad",
"assets/assets/quiz1_no.mp3": "d5355a1e3bc09cdf7b2e2980a353928f",
"assets/assets/quiz1_yes.mp3": "acea58c2a16939388d3f665f2029c6ee",
"assets/assets/quiz2.mp3": "29b2fddf3b57b245c1d2402f5493b364",
"assets/assets/quiz2_no.mp3": "055632d4a2735b35ca551185ac20b95a",
"assets/assets/quiz2_yes.mp3": "0322e1b75a08a0db4e26cbf63b55067a",
"assets/assets/quiz3.mp3": "80e7b6f0767a78520d1cd5e0b41cf64e",
"assets/assets/quiz3_no.mp3": "ad3108178e9a1addc350f12cb13412e4",
"assets/assets/quiz3_yes.mp3": "82c039c37b83d6becfe92b3478bdc3c9",
"assets/assets/quiz4.mp3": "71addcf6fc594eb2dec44203b2527fd6",
"assets/assets/quiz4_no.mp3": "62bcc895486c50fa2b9b200d08850e59",
"assets/assets/quiz4_yes.mp3": "08782d9c6d476004f7c3b83ebd08ec5b",
"assets/assets/quiz5.mp3": "84443fafd40708de47ce12d16990f237",
"assets/assets/quiz5_no.mp3": "7003c3b67cf2da558d83dbcca2419740",
"assets/assets/quiz5_yes.mp3": "bd14eeaef910d97df125949c3328848d",
"assets/assets/quiz6.mp3": "000b6978a12c66fe77f41bad30701876",
"assets/assets/quiz6_no.mp3": "33d007c8e5b0de8818212a7221a77a2c",
"assets/assets/quiz6_yes.mp3": "3e0ed2502ad4bfe0b239de339b4e7e7a",
"assets/assets/quiz7.mp3": "d20082a09c486794985078a8352ddf80",
"assets/assets/quiz7_no.mp3": "f92630e140640c15814fc8b1091c8486",
"assets/assets/quiz7_yes.mp3": "42ab8b5208b81e6737bf35df5532cbbe",
"assets/assets/quiz8.mp3": "4d9b6c771ead6efedbe5623771b2d57e",
"assets/assets/quiz8_no.mp3": "b9305988bb2f8352dc7a7ba1f51f3021",
"assets/assets/quiz8_yes.mp3": "32f326d9efed587452f97ef7ec867c68",
"assets/assets/quiz9.mp3": "73836a4472c8cb9646e3ed77175bedb0",
"assets/assets/quiz9_no.mp3": "029c532b72af0519bc4606204fd2201c",
"assets/assets/quiz9_yes.mp3": "ba65b8a00f0adf29314417cf5a8099f8",
"assets/assets/quiz_end.mp3": "579802e438f60ad38c9e2e5b5864ab7c",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/NOTICES": "9ae34b23697d31a699d38b9f64408c12",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "b14fcf3ee94e3ace300b192e9e7c8c5d",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "73a60b86ed2d218af4622470ffd9160d",
"/": "73a60b86ed2d218af4622470ffd9160d",
"main.dart.js": "8f4131ccf3b8cd2e5d85729a01c9f726",
"manifest.json": "acc298f330807f9cf710aa57c0506b03",
"version.json": "1b6adf7d28bded05383307a169afb8ac"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey in Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
