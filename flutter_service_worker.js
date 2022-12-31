'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "e509e319b8259661d16d555894324fc4",
"index.html": "ab0e3950b062dfc0bcd1ddd5fab881b6",
"/": "ab0e3950b062dfc0bcd1ddd5fab881b6",
"main.dart.js": "bb7c4b117c71f090851c869533afd7e9",
"flutter.js": "0816e65a103ba8ba51b174eeeeb2cb67",
"favicon1.png": "5dcef449791fa27946b3d35ad8803796",
"favicon.png": "b47decb3a7457c6486c9eb295246ad1f",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "b7ac912081ee1c3b20e1ca8874877e1d",
".git/config": "b5eba0f888d6431e694c14a266d67f6a",
".git/objects/0d/0df08f7c3e147a8ae36017cf81a96e35b73717": "106e868f28a72727fb6fb0fa71123633",
".git/objects/95/0181411e863c7d15c20a9c8feed0449dc11a19": "e37f9dec134af7206d1a4c58f301792d",
".git/objects/57/ece4f95852b2539225a734aecc8a82402db658": "6cb760fc7ae144a2695f1e683f0c5b65",
".git/objects/57/52a7963a84829634ecc795f8b8f72f3a866d52": "09058b0939ac9a4ad0115249768ad604",
".git/objects/04/7ba1fe9e03d59777df59a1246183650ea0dedd": "2ac0fceb88dbb86a0d69081791b3c932",
".git/objects/35/d5cdf97b905017349239e63b5b38b41dc73c6f": "989694e59f08c216ba633adcaf8e8b37",
".git/objects/67/03729c93c06e021e1ffe09221567efcddf3e10": "f421ecbc2ec390763a1b40baad421f90",
".git/objects/0e/c8e7dd244977ca9843c27ac1792924fadf1b36": "b3df2af2a3e9a4919dff0a481a80125c",
".git/objects/33/534e73740a028d05cf8f637634f5ca7f1f0477": "4e6d882e50375a1df11e2874fb5e18f2",
".git/objects/05/e296448e22cf20ea2049f1f0efa14a6ec245fd": "e6aec7b97dfdefa680f12c2090a3bd75",
".git/objects/02/0f5e56a927a04113ecb38d06238b0c2998ee52": "b74ec5f14b7d6eaa207cddb2b632edf0",
".git/objects/b5/8bf76c43c1d42d7eac8dcdb30dfecad35adb5f": "21e19c9c1e575da227dc335d948e9b1a",
".git/objects/a5/3c60ccd722dabe1e1aac197b828ae09f106589": "e7b74f661cfc2be82ac121f6f4d596c2",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/ae/126a979c6db2916b4a7968aeed963a98fcb7a1": "12d0be3bf0ce3c9ae9368b2667e951bc",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e2/bb43f9608218f79394ba3137ccb9b769c4b218": "826bef955bd98be17f9e011be26109ff",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f5/ab38f2a724fa5d68eaf80033d6dbaacd623534": "014be513114997fd1bf4ddbd5e76ebf7",
".git/objects/cf/a962e7e49bd26983894e93d56a7b4403bb487f": "1c2501f0f82aba8acd53ba245f9554e5",
".git/objects/c6/7b425dc6eb5f1c61ee51333e87532df88ae4cf": "6631f4f04644b68f29c7bcaba33f76e5",
".git/objects/4e/89617a3696bd10c155ec378f4a65a9f89e9e3a": "d8056e20bae90d092b619c895129e982",
".git/objects/20/de797a1f4a32a30d09c1be78673b0d3305179f": "e678a41a670cfa86b417391e6f0b5e56",
".git/objects/7d/fbe789b928dbaa82d25691c38165d237032ce7": "240c332eb71d87276b869af8bb4b074c",
".git/objects/7c/006e46b6011e101f3eae53ae0be324dfff3218": "09d812674188367a2a6e8befec22ef0a",
".git/objects/89/3843a00e456dc5e3bfac04f0bdd78f0121a2ef": "b066aa572e480b1093fefbffcb39e0a7",
".git/objects/1a/25c27532171c56210a50f0c95b2b03d60820d2": "3b88a6fded856ac6d5175c71ac2ecb4c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/75/ce521ff3df98cfb9d71c5f25d40a3e39cf5d56": "bd519ef310744e94dcb1d224f4b5799f",
".git/objects/86/e124d16f5060b5823513d763e4de1ea918dc78": "07e9e4af8d21d3ac05a729bd178d7068",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/6b/c3272af138a7dba29333cbe8c086c7b0659ca5": "bc790b6dbc45106f19dd6942d0678fa2",
".git/objects/6e/14bcc0fe80fd1db68f9bb4c3367bf1c9be050a": "cbe26d45bd4312f434786f3b0be08f63",
".git/objects/9a/6501c9926ee98f1aba170f24129af3e94ca784": "fd99cdb4418e0c254131df9d9610aaad",
".git/objects/9a/cc7e58aa7cdc8048314aac411365a2c56f2084": "ee53bb811377b9e9bb127309e135935a",
".git/objects/09/bef15b951d571db18ed7dbdad39d6edf840200": "4db2ed24fa84126c9fcbd58c22011cbb",
".git/objects/62/74b986dbff8db53d9620d9282effc0ad7f5782": "eea97a7c6683923da91aeda5c248d437",
".git/objects/96/b162a718acdc3c4d4c718c78b608a9f12f438a": "2a198b5a43f25c7ea1a6f88cce41e76e",
".git/objects/53/ce2beeab1b39db00863018d553bcb9c986b5bd": "e4e3f1ace57ce38c0902f423a1b65538",
".git/objects/53/7dfba06d4cad7cd98bb0056f78ec73bd7f1275": "0341667ab5b3907788f4de22204d7731",
".git/objects/08/1bc736d0df1cd6aab4140bbe98cf7f34a4d171": "88b8dff9be69e7b2ce00ea30bd7c25ae",
".git/objects/01/c9e9a8db75367e020780447f527400cd93922a": "8cba360d7d5fde3608f1e1ed59f96d32",
".git/objects/39/73d1fee178a9769245cd24cab683b37f96c1a4": "83c2f6d620dc7adfca4ff6f2fed22bb9",
".git/objects/99/50cac50522518102887c14b5a74e75d581c79b": "374d2f1eb4a347189558d64ba095bcb7",
".git/objects/99/04f9bcb5a8973158721f38f2f7350ec4653444": "d4bb2a0691a33f7581ac76eea8ed24ea",
".git/objects/97/ed68954f499b28424e38fb1dea4d904ef76afd": "d470388e7395a24b4002edaa5fd37a28",
".git/objects/97/0d29da7b889b1d6079fc55bcd404503d88604f": "a1531a9a446897cd63810ebee7bbfd83",
".git/objects/64/58aa060243df61c841a1601009b2e2733fa7ce": "9044fce4dc4b494002acd60932f32726",
".git/objects/90/47b0c3e32d8d507e2b0fe256353bd2c10b3ada": "93158ddbd10e96f746d1c3cd873b1b2a",
".git/objects/bf/d880f199c626bc6045b0f5e7e4e3234aa86254": "c1907bc6d11388a13c621a801ac47669",
".git/objects/ba/7d30920ffe2bf38d838ffbdc7bb1b5954d6156": "a9ad22a73a1d7a7eb9e5087c00d16336",
".git/objects/a0/70237143fd5bdbc4a95ae8a97118caa545c118": "4457dacf8f59f7f5ff56d666c7882fa1",
".git/objects/dc/eddd60be28ef10c95fe1b18c408657e2bbc6ea": "ecd2eab74284851d4a491532e0e25ca6",
".git/objects/d2/32d346283faf2e21309b6fb632f657bf43601b": "72de95c836f06c2797145d2ad3779f90",
".git/objects/d2/7d5fcb7e933e7c4aec33fd14be043f510585b8": "6bbcd798e7873ea4e029b52481e9d4bf",
".git/objects/d2/82c5d7bf6f36cd3b47d80ce3bf4e9e2a4794ae": "1e68a2d4edc0cca7ce6664e227815bc4",
".git/objects/aa/e6de6efabc11484b4dbf5f1b2d36b2f0fdf043": "3dac8361d27d9ade4fe832d765289270",
".git/objects/af/0770a8e5c477757a4c90b8fc9a7673ec773bc1": "438668e7b293d9c7f85e592a087db28e",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/9833c73a999bf312a4cf6706fdc8c0c8c2752c": "106a2f9de96bc55ab9c30489c3314552",
".git/objects/b7/6696cc55e21d38077b204a11697bf60219f5e9": "3f2151f1dcba9e9409baab9288fee32f",
".git/objects/db/e6e29d48b49244d28ab3112a576b0665c82210": "2fb12cdc679c781e704a9fd31e28cb33",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/ef/4210e37adeb45b4f979e7b5c5e8565e238c7b8": "5c9631fb44bcc2cd94d116617e1ab556",
".git/objects/ea/79564106b7016f53c9dc5db9643b38de5eeda1": "241e1e0936c559367b976989c21d719f",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/cd/29bc3f47b8e56b38b50faa1446937a624a710d": "e5ebe882a99703f33d57caa0afd8140e",
".git/objects/fa/393af57442e881974d1a2f34246914a8e7e17e": "b0c200c6405eec832330404f17125da4",
".git/objects/e9/e575d0b36ebd696294496017834c26b62e1505": "8eca52e53d59927cc7c00a13888ea67b",
".git/objects/e7/cf059d5b17fc38ff5fce220b6e0f5fc723053d": "6890bf743178ff797de35c9a0759eef6",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/8a4f816a95035bbd5620a72a3537699ef9a730": "583310dfd15c9480ac4883b2054323a8",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/2d/cf3542c874e33cd8ab86ceb6f0ec444228aa78": "66baad0ae5d874f09b6eee790095bc65",
".git/objects/77/5a1f52e20df2317204dc75256228cea7f8d406": "566bdb602ed7d3116f88edf1fe1c59e6",
".git/objects/84/173c910c10ffede06284decd03c082f50d0c2a": "5c4f45b2199e1f842183ec627eef033f",
".git/objects/4a/9cd387e092c332d8d73225f741a51ea5a01b5e": "56e05690f06ff01f2b0f9b68a424c212",
".git/objects/24/b1f14dd348b07c9b8373758bde9ac14d16fd92": "dbf45d6c044044561758a334420e9569",
".git/objects/85/9c0ecf3f0d23af6107ab1f48e593e53b9aa6d2": "b65a6422e9e467f3b4f75c76fe965a3e",
".git/objects/1d/3db0e8ff2fa361c490c517efe427c0902163f0": "6ddee2ad71f35a8d87492908320b96bb",
".git/objects/71/e514cc388ce5c2b414a81e7a76278acf861dd0": "3c793c43caa3e0c553b581c9e2540d42",
".git/objects/76/8651b2e249c2517c7b37bdbeea0a5d8bfbb707": "495b1c4fefa633f6afe4dc5840ebe18f",
".git/objects/76/3452a4431f39e35ed4a56fccd77b56bb69c468": "78847dd4ccd8a910fe010fc43b4249d9",
".git/objects/1c/e1aa0c16d177325eb6062aa11b871bdfd7c4a0": "4f75a757e812c4c320c40f3057df1a33",
".git/objects/49/3f3f3e32add633d724dc411dd3d6e5f930f571": "9ecb0c467ac604faddbc719fa21ea91a",
".git/objects/40/850f5f7b416754bde0cd379e558bfb08cb7990": "3d4bd7a7c4dc08bfa14b0736e7c865d6",
".git/objects/8b/8b80d468e448e1ac3b23c8b6459995c49d86fa": "24bfc202a875c2dd6534fb15acdccbf8",
".git/objects/13/a3f3ba1c82d243d7058c2147d07f2db68b4f70": "0a613b06667a72ef5fef3bc624216076",
".git/objects/7a/b371a6de8f41ac62b7c3d73b8ed830e49490d7": "b4a16bba1c504b56f7095289cc5e00b4",
".git/objects/7a/e467cd882f7083246d7ddefc56d4a540ddb9eb": "dc2eb44c6a2f5d912a42a2ddd728d6d9",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "c15d17388ff997e4b356883bac39333b",
".git/logs/refs/heads/main": "c15d17388ff997e4b356883bac39333b",
".git/logs/refs/remotes/origin/main": "aa0df44459d2b8fa3d181a39bb8fed74",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "1ffdab0828dd0d687c03f8ab0d769c40",
".git/refs/remotes/origin/main": "1ffdab0828dd0d687c03f8ab0d769c40",
".git/index": "5cfef0fabed90c962e9185f9033e7f46",
".git/COMMIT_EDITMSG": "30411792d51e7a0745cd9bf7c440d603",
"assets/AssetManifest.json": "c5e43d4d796dda26eb5f0b39b99bc45f",
"assets/NOTICES": "02489151058d858c47c90143c17ffb0f",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/assets/scaf.jpg": "7f9422eeaaba25a60dd9a586d73efc1c",
"assets/assets/issue.jpg": "a17533864c62440a9833866a25a7210a",
"assets/assets/background.jpg": "fbca4832ad2fdf1583eb2ab627d3a9e7",
"assets/assets/earn.jpg": "0efe1a0b2f4892ce0bcb4c663995cc5a",
"assets/assets/manager.jpg": "689144f109ad89c8e966bd86b024f585",
"assets/assets/football.jpg": "229a48fcc41a2f1706388f1120f8aa21",
"assets/assets/fans_forum.jpg": "ed83ae53ee7e41e5a51adea39493977b",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
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
