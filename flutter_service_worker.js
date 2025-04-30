'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "aaeabd5a314dd9d8336468c617dcf848",
"assets/AssetManifest.bin.json": "684f5adb2994f455bd379d419ef2672f",
"assets/AssetManifest.json": "2cfda6e7573779a5c3af4e6723954577",
"assets/assets/data/carousel_content.json": "426ddc06d2ec561f8fa0c89424e92235",
"assets/assets/fonts/Outfit-Bold.ttf": "1aa8d3df7fd45de025034eb4de86eafb",
"assets/assets/fonts/Outfit-Regular.ttf": "3a8c9c63d786bfd6b151d48916eb3df5",
"assets/assets/fonts/Outfit-SemiBold.ttf": "79f7b87afc556f58c042f70c0c24bcd9",
"assets/assets/icons/facebook.png": "4b6e71fdb99add9edcfad759df38609d",
"assets/assets/icons/github.png": "4e6e0cae63b11e822057cc9ceba68f01",
"assets/assets/icons/instagram.png": "f47f61dd293e18e8105db940303c7a7f",
"assets/assets/icons/linkedin.png": "e45d94130004dfcdcabe4de8c4ca97ac",
"assets/assets/icons/twitter_x.png": "74a9ee2fb8d3c80f932cc50d76a1526a",
"assets/assets/images/carousel_images/asi.jpg": "10465b8a7ff04b8f300e2c23abf928ce",
"assets/assets/images/carousel_images/credit.jpg": "081259925fff97f236146c9f9d39e322",
"assets/assets/images/carousel_images/cricket.jpg": "470f5f5fe2cb27205e91812b78b4b77a",
"assets/assets/images/carousel_images/dclub.jpg": "cd999c7e2f09a38ce8ba918abe99188e",
"assets/assets/images/carousel_images/dclub2.jpg": "2657c6c8ecc31d4e8f508d6cd4da4937",
"assets/assets/images/carousel_images/dclub3.jpg": "07b6e19de896862c3cccabb3e48eef9f",
"assets/assets/images/carousel_images/Devca.jpg": "0fa3e49e123927f554b3097bf6d14062",
"assets/assets/images/carousel_images/Football.jpg": "6185a429ff45443fc2960b49116dfb54",
"assets/assets/images/carousel_images/Idiomas.jpg": "9c141bb884e643ec56ac5c5a67c59fa9",
"assets/assets/images/carousel_images/introtemp.jpg": "e465a0c447cc1c632aa0c94d0af22c38",
"assets/assets/images/carousel_images/khc.png": "424aeb93794c1ce841ba51bc916dff72",
"assets/assets/images/carousel_images/married.jpg": "94e54a783e6bb8a20a0e52da14668066",
"assets/assets/images/carousel_images/mdev2.png": "84a5d6b9d6adda70f554748f63ccdad0",
"assets/assets/images/carousel_images/media.jpg": "d3b7e83acc080c0838bd1b23d1578ab3",
"assets/assets/images/carousel_images/media2.jpg": "1bc16409e53bf0721c05cfbf74630e19",
"assets/assets/images/carousel_images/more.jpg": "ce0b218102839630ed27df5f0376919a",
"assets/assets/images/carousel_images/planning.jpeg": "e846250b49c4f6fc6072ebd89ff305e0",
"assets/assets/images/carousel_images/roar.jpg": "2b5b87154c544ec6901068171f42ea27",
"assets/assets/images/carousel_images/science.jpg": "799a3d9ca55f771054c3778fecb78108",
"assets/assets/images/carousel_images/skillset.jpg": "5a2480718c9bf473306c37e4dc7214a6",
"assets/assets/images/carousel_images/slu.jpg": "7168bfd993aa54d7c10096ac87677227",
"assets/assets/images/carousel_images/slu.zip": "47dddce3a1ffc8740b857acbc4269410",
"assets/assets/images/carousel_images/testImage.jpeg": "1db3f659f20351dc10fd78162aee16ba",
"assets/assets/images/mda_logo.png": "bb39fb3c33b963108d7090d2d5011345",
"assets/assets/images/mdev2_logo_dark.png": "5d921e6d2df893737e25a2cc198aaf1e",
"assets/assets/images/mdev2_logo_dark_mini.png": "84a5d6b9d6adda70f554748f63ccdad0",
"assets/FontManifest.json": "b48a99619e85ea837e5601c52c6a5469",
"assets/fonts/MaterialIcons-Regular.otf": "c0ad29d56cfe3890223c02da3c6e0448",
"assets/NOTICES": "7b47332477cd4012f629fa11d52ab6bc",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"flutter_bootstrap.js": "05201f9c37007f500ed044ebb4ecde59",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "1bf61be542a58f8aca54b9074686a5d4",
"/": "1bf61be542a58f8aca54b9074686a5d4",
"main.dart.js": "24c246a99862f18862c4d876576f6083",
"manifest.json": "16ad7c13656e81ea03f81c7651f557e3",
"version.json": "6669fdb1ad79c0a9ec3023b30f6ee274"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
  for (var resourceKey of Object.keys(RESOURCES)) {
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
