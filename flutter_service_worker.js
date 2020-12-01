'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "39f74c4c11642717b25bcf393331436e",
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
"assets/assets/quiz11.mp3": "3b1b83bf6990dd6a6d81f7e3e578b773",
"assets/assets/quiz11_no.mp3": "e89a0eb0c022965b3bb7f4d94b11c963",
"assets/assets/quiz11_yes.mp3": "5a191d30fe4764a03405e31375285a1f",
"assets/assets/quiz12.mp3": "5968696bfa3de2417527ff1fe1427c50",
"assets/assets/quiz12_no.mp3": "0e2601bc3039ff53dc382231680755c0",
"assets/assets/quiz12_yes.mp3": "4d781ca972158d687b007070491a4e8f",
"assets/assets/quiz13.mp3": "cbaf5cf9c5d32fa0cd2b156879a1a0ce",
"assets/assets/quiz13_no.mp3": "d9f3705fa6164138c2bf34626baee256",
"assets/assets/quiz13_yes.mp3": "929aa63c06f9c549151e71425fd64404",
"assets/assets/quiz14.mp3": "6d153506491737e807ce7ad5ac220d6b",
"assets/assets/quiz14_no.mp3": "8c033fb89c7822b1fcf7f97c80615b87",
"assets/assets/quiz14_yes.mp3": "c67ea6a3ccb89df93698f79df84ed039",
"assets/assets/quiz15.mp3": "9e86b9f2cbae879c96e2aec6b7e7a5eb",
"assets/assets/quiz15_no.mp3": "29e0a67f59b16449ddd15728fe171b8b",
"assets/assets/quiz15_yes.mp3": "0d475cd22d597ca6ba76a85cdb423d5b",
"assets/assets/quiz16.mp3": "5c5b461cce6f44a3eb75b45282b5b30b",
"assets/assets/quiz16_no.mp3": "27a39a7735fb821090297244e5b6593f",
"assets/assets/quiz16_yes.mp3": "4951639adfac2515d420ad846c1386af",
"assets/assets/quiz17.mp3": "e48f5183909d2120de102e6382cdaaba",
"assets/assets/quiz17_no.mp3": "a79065f177929ee71fb482f99307d138",
"assets/assets/quiz17_yes.mp3": "c2410f3fe4084263e5a7a9b0f592207a",
"assets/assets/quiz18.mp3": "3822e6b8a36d5214818aab4ed79e7907",
"assets/assets/quiz18_no.mp3": "f777f56a8472faeb766fd4f78960dfd4",
"assets/assets/quiz18_yes.mp3": "abf6ea7b6114bf1aca8b7dbdbaf74324",
"assets/assets/quiz19.mp3": "93ee47780d43c86c24618c442ca8dc8b",
"assets/assets/quiz19_no.mp3": "ead4ae44ee44eedb9910789d2eb0c7a1",
"assets/assets/quiz19_yes.mp3": "0aa00f6fca6df387851a91e27ff80da6",
"assets/assets/quiz1_no.mp3": "d5355a1e3bc09cdf7b2e2980a353928f",
"assets/assets/quiz1_yes.mp3": "acea58c2a16939388d3f665f2029c6ee",
"assets/assets/quiz2.mp3": "29b2fddf3b57b245c1d2402f5493b364",
"assets/assets/quiz20.mp3": "e6f92db59b6d919b31fce25eaaede957",
"assets/assets/quiz20_no.mp3": "d0dd09a0190a6cf3ea82b59c37fbb011",
"assets/assets/quiz20_yes.mp3": "fd6b09927d427c5ac502b70d4518f82e",
"assets/assets/quiz21.mp3": "ebf84674fae9e7837bd5ad1b501fdab7",
"assets/assets/quiz21_no.mp3": "e245f81b0f747aa3fe8b1308240c4561",
"assets/assets/quiz21_yes.mp3": "44aa40c30c91732d1cc931705d0c27f5",
"assets/assets/quiz22.mp3": "30bdb0933b376c07c095960e50b8efaf",
"assets/assets/quiz22_no.mp3": "5a885eb2bf18f106e7f091dcf47902b4",
"assets/assets/quiz22_yes.mp3": "183479b6f91466295d19a14167092e8c",
"assets/assets/quiz23.mp3": "513ce754bfbca171bbd2ac92632a8fcc",
"assets/assets/quiz23_no.mp3": "c007c07cea4a1dc015e9396a2077769f",
"assets/assets/quiz23_yes.mp3": "25eb9c8718fa87f06b5457fddf48a10a",
"assets/assets/quiz24.mp3": "a9f06390b7bb5f8a5dbdfc4044dc1cba",
"assets/assets/quiz24_no.mp3": "3cf181c75b9f29075aa65d66fd422efa",
"assets/assets/quiz24_yes.mp3": "b8120be2c4fec47d79eb9db59f941031",
"assets/assets/quiz25.mp3": "ff77bc1ad40961074f61ef12b5484c1d",
"assets/assets/quiz25_no.mp3": "0c6549cc931a3fd02b911df1df265ad8",
"assets/assets/quiz25_yes.mp3": "ae7186c21178e7fd3ee768d5e37705a8",
"assets/assets/quiz26.mp3": "b9bd7936b0190d2c2a718583d7c1351f",
"assets/assets/quiz26_no.mp3": "5d03344143582d06a0396a16224cc1d0",
"assets/assets/quiz26_yes.mp3": "45e30010793939dbf13a2ed2691eaaae",
"assets/assets/quiz27.mp3": "56e27eaaa5be890ac7f929f97c2f8a03",
"assets/assets/quiz27_no.mp3": "6dd95a76e76126fe1cd4c3de6d5d760b",
"assets/assets/quiz27_yes.mp3": "56f44e7337496b3741b7286906ef5817",
"assets/assets/quiz28.mp3": "90572f3ebc0d505b98dac5ca7336566b",
"assets/assets/quiz28_no.mp3": "7939c2517156ec0d0ec8c1147478c688",
"assets/assets/quiz28_yes.mp3": "c0c761f3abf9301a431dc22ccfc7e5af",
"assets/assets/quiz29.mp3": "898b2a43a73213f66fb7f5267b0d5b5b",
"assets/assets/quiz29_no.mp3": "3439c41f8276229480ace7d7f0cc0c35",
"assets/assets/quiz29_yes.mp3": "23e379a9eaf1501725d8d1a653d76b21",
"assets/assets/quiz2_no.mp3": "0322e1b75a08a0db4e26cbf63b55067a",
"assets/assets/quiz2_yes.mp3": "055632d4a2735b35ca551185ac20b95a",
"assets/assets/quiz3.mp3": "80e7b6f0767a78520d1cd5e0b41cf64e",
"assets/assets/quiz30.mp3": "c4f8f306e82a3910794264347a3e5ff7",
"assets/assets/quiz30_no.mp3": "3a039cec1f4d73d00ae913cb1b64cf3b",
"assets/assets/quiz30_yes.mp3": "aaf8759d8a4b7294e569360aaf37a7ae",
"assets/assets/quiz31.mp3": "45f5a2b76f65dfe69f332941b7926abb",
"assets/assets/quiz31_no.mp3": "0a98b3befb0e94c9c5adc5e106aa21f0",
"assets/assets/quiz31_yes.mp3": "354ec80ca8447cd24405116dc2669349",
"assets/assets/quiz32.mp3": "b552a9e604f6fde6f3ecffd43b7f5f09",
"assets/assets/quiz32_no.mp3": "bf1a21467e78549a07d6e05d563e2258",
"assets/assets/quiz32_yes.mp3": "cf1dae37ead7ced88dd5787952307273",
"assets/assets/quiz33.mp3": "f6668c0f16e15758acfa4a4736249cad",
"assets/assets/quiz33_no.mp3": "db13167ad7290c0ce74543ed358c2cb2",
"assets/assets/quiz33_yes.mp3": "b30817f2ea09193f35994f32e4f9c628",
"assets/assets/quiz34.mp3": "762163d213f13710eb3a53b1d8bbea0e",
"assets/assets/quiz34_no.mp3": "1d18ee885d64a7fe3f56ff21992bf927",
"assets/assets/quiz34_yes.mp3": "97f68e74c039080dafb3770da5566321",
"assets/assets/quiz35.mp3": "014bd402381db05ee08b4571a32782a2",
"assets/assets/quiz35_no.mp3": "5c916bb60acf926372483dbffa743d09",
"assets/assets/quiz35_yes.mp3": "8f8a1c670d1ab5438372c3fc4ad14ada",
"assets/assets/quiz36.mp3": "25c3f2257b1f00ef4ca5be05bbd08c34",
"assets/assets/quiz36_no.mp3": "f23b752c82dcef0d74c1868517374c37",
"assets/assets/quiz36_yes.mp3": "716abfc257105741c70f77aa88441297",
"assets/assets/quiz37.mp3": "41993ee5330422a5afad3c05a780d1f9",
"assets/assets/quiz37_no.mp3": "6b006b43a02abc88e8177435772ee3af",
"assets/assets/quiz37_yes.mp3": "734450ae9276edc090a253daaa83df25",
"assets/assets/quiz38.mp3": "f006122db3680fca4ff16157fe8cad46",
"assets/assets/quiz38_no.mp3": "ceecdc47cd34b037e3437b816f71eb2b",
"assets/assets/quiz38_yes.mp3": "09d32e86a11fddc720bc9a7112ae77e3",
"assets/assets/quiz39.mp3": "906b718c5c9b17bdc0a94a3d93de984b",
"assets/assets/quiz39_no.mp3": "51a99a49d85a31424f063408a660f09a",
"assets/assets/quiz39_yes.mp3": "ed40fcae4a4dc6e4f0c8c9598a468279",
"assets/assets/quiz3_no.mp3": "82c039c37b83d6becfe92b3478bdc3c9",
"assets/assets/quiz3_yes.mp3": "ad3108178e9a1addc350f12cb13412e4",
"assets/assets/quiz4.mp3": "71addcf6fc594eb2dec44203b2527fd6",
"assets/assets/quiz40.mp3": "0a05529b33a22c6e0b19c49cfbd0ac3b",
"assets/assets/quiz40_no.mp3": "c54399b6c712de5113de558f8c055e66",
"assets/assets/quiz40_yes.mp3": "2fabaf9784b2b2cd205e211a06dff70f",
"assets/assets/quiz41.mp3": "68762ef6e6566ee9f1d0ff625ecc5544",
"assets/assets/quiz41_no.mp3": "24f78707d9fd45f339637beb6466aee8",
"assets/assets/quiz41_yes.mp3": "03cf9fec4dd12ce2535d66d72d52a769",
"assets/assets/quiz42.mp3": "5d143991a7f9fec260a4e79c7e5b7ba9",
"assets/assets/quiz42_no.mp3": "383551e24f2a564ce6b618f6f7ba7b02",
"assets/assets/quiz42_yes.mp3": "bae65a87e594536287bc5e3962234dc7",
"assets/assets/quiz43.mp3": "f209243b76ce360bbad368d46b873eb3",
"assets/assets/quiz43_no.mp3": "7d22f37a754ea997c1dbadf39e023ceb",
"assets/assets/quiz43_yes.mp3": "c3e07b4b805cf2c733dcfb53aa337570",
"assets/assets/quiz44.mp3": "106c2df5084b79bf25857e7cb168314d",
"assets/assets/quiz44_no.mp3": "ee8994ee3887b649c489937d11f31dac",
"assets/assets/quiz44_yes.mp3": "760d4c5569e546d8f8d1a43b00dae260",
"assets/assets/quiz45.mp3": "dd164c8bf1f5d2aaa32f1132ef3fc3ab",
"assets/assets/quiz45_no.mp3": "924b84133cf44ee0cdd70d694a8965fc",
"assets/assets/quiz45_yes.mp3": "37f3d81462bffcb735493aedff330d00",
"assets/assets/quiz46.mp3": "66db72f9f191c9d08fcc07d11b04082a",
"assets/assets/quiz46_no.mp3": "53582b70603b196a154cd3e3677724b0",
"assets/assets/quiz46_yes.mp3": "513b047058c6d83ecb588555ca7eff83",
"assets/assets/quiz47.mp3": "9b8558b23c40d04b85eb06d8d30a3f70",
"assets/assets/quiz47_no.mp3": "18e659169eeef9c27b51249986447d7c",
"assets/assets/quiz47_yes.mp3": "3c9f89bd76cb2d75ceefd8e81fe33f95",
"assets/assets/quiz48.mp3": "ce69191f621bc2da944f43d098ee5578",
"assets/assets/quiz48_no.mp3": "e7e980507fa53a6a985494076a1b84c7",
"assets/assets/quiz48_yes.mp3": "210edcb0d2d7d36f8a5eff2cb9afb2a1",
"assets/assets/quiz4_no.mp3": "62bcc895486c50fa2b9b200d08850e59",
"assets/assets/quiz4_yes.mp3": "08782d9c6d476004f7c3b83ebd08ec5b",
"assets/assets/quiz5.mp3": "84443fafd40708de47ce12d16990f237",
"assets/assets/quiz5_no.mp3": "bd14eeaef910d97df125949c3328848d",
"assets/assets/quiz5_yes.mp3": "7003c3b67cf2da558d83dbcca2419740",
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
"assets/assets/test.json": "ff8b2d9149e26437ebfdd65815de9245",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/NOTICES": "4f9d020d12d0a32af47ca755ef966fa0",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "b14fcf3ee94e3ace300b192e9e7c8c5d",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/HelloWorld.jpg": "b4584db1ccd33ea546c24630cc723669",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "5961895ec82b8c86108f8fc2ef15701f",
"/": "5961895ec82b8c86108f8fc2ef15701f",
"main.dart.js": "f108c7a27016f08f67281cb4c1173fe6",
"manifest.json": "2d849f74ec7c2d36fb7218c7d65cdd3f",
"splashscreens/ipadpro1_splash.png": "720db12d20e275afeec13fa6789c60e4",
"splashscreens/ipadpro2_splash.png": "a9b893406df1f3b61a414e83fdf06f72",
"splashscreens/ipadpro3_splash.png": "da484ce382677f8b053bbb1ee4dc22de",
"splashscreens/ipad_splash.png": "3e3342bb23788937cc3e44d7114263b0",
"splashscreens/iphone5_splash.png": "b649378c2ad31be3f8a844db0590f4cb",
"splashscreens/iphone6_splash.png": "86ae2e40d298c3cbcced42d1cd357efd",
"splashscreens/iphoneplus_splash.png": "148137aecb0109c2bba7d82d9a01a308",
"splashscreens/iphonexr_splash.png": "1e404aac1dde7feac30ba30d4fd527df",
"splashscreens/iphonexsmax_splash.png": "730c7ae8b707cf450d7a681d70d6a316",
"splashscreens/iphonex_splash.png": "31a6eaa4a6692db04f85a27ea586d633",
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
