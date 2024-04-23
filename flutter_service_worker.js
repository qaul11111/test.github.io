'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "120369eeb570d2e649740b26bab4b014",
"assets/AssetManifest.bin.json": "c8818601b2b84991c49db9eb66a693bf",
"assets/AssetManifest.json": "92720ffb07df5cba3e1c09b424a7de3d",
"assets/assets/audio/gem_bgm.mp3": "2d1891e7d740eaa2361b6926ddc3a61c",
"assets/assets/audio/kill_bgm.mp3": "6db2782bccf36e0188510f2e6307d49d",
"assets/assets/audio/kill_door.mp3": "68d774835c38259e332091689d6db0b1",
"assets/assets/audio/whirl_bg.mp3": "0fa89adfb8e947aa3c6367d20c691e4b",
"assets/assets/back_while.png": "af0edada3ec16714f7d7fe463652cf52",
"assets/assets/battle_royale/arrow.png": "7e6da042f70348c2cb68e8afdc77fb8b",
"assets/assets/battle_royale/bg_battle_royal_stone.png": "cc833194efecc4d52cc07ba1854c7fbb",
"assets/assets/battle_royale/bg_killer_countdown.png": "5614c6fbe485054d8b8a15b98c71a4ad",
"assets/assets/battle_royale/bg_kill_btn.png": "7a522feed8d0e4db7f5db3f27dbdb3a5",
"assets/assets/battle_royale/bg_scene_option_medal.png": "38cd23abd441b641a25b6164ccde9070",
"assets/assets/battle_royale/bg_scene_title_medal.png": "5a6d96c5f2f2290b11802aa67f0780fa",
"assets/assets/battle_royale/bg_scene_title_stone.png": "653a6e571ea668a680a64b2815047472",
"assets/assets/battle_royale/bg_zh.png": "4715a08886d10b0a70be66eddc928cc0",
"assets/assets/battle_royale/close.png": "65ac9ebddba2c4953b7e9a9131646ae7",
"assets/assets/battle_royale/icon_animation_bg.png": "9beb1f0b3ac4a09161ba4c172591dd7f",
"assets/assets/battle_royale/icon_bat_game_fire.png": "d1e8cd80abaa9b3e5e15e3a2c674ba74",
"assets/assets/battle_royale/icon_bat_jb.png": "8fd178faeacc6b592d336a14f87b3a2a",
"assets/assets/battle_royale/icon_bat_record.png": "26cf8ce2774512772b9952d4e61c73a7",
"assets/assets/battle_royale/icon_bat_recored_kl.png": "202e14271999d14e71cb594ae1d35755",
"assets/assets/battle_royale/icon_bat_restroum.png": "89266d4d387205160c26bd89584091cb",
"assets/assets/battle_royale/icon_bat_sort_text.png": "cb877ca9d22b1198f9fbee9670612aed",
"assets/assets/battle_royale/icon_bat_spread_coin.png": "a11c891476dc697bff26da59cabcb692",
"assets/assets/battle_royale/icon_big_left.png": "e0ca9cdc0bf17f00d6281a6f43455b4e",
"assets/assets/battle_royale/icon_big_men.png": "7afa94a7b418d2aeaa6eceeb1e0d5239",
"assets/assets/battle_royale/icon_equity_1.png": "9c4595accd3cc8436987d2ff1b7af3a5",
"assets/assets/battle_royale/icon_equity_2.png": "62ca690792d5cff0d6d42653dbdef763",
"assets/assets/battle_royale/icon_equity_3.png": "601584728f11b7960a938940ec552b50",
"assets/assets/battle_royale/icon_men_left.png": "7c7457296712d3d96bc4cbdde8754d9d",
"assets/assets/battle_royale/icon_small_men.png": "91770085aad2eaf9f54a7f145bc74031",
"assets/assets/battle_royale/ic_ape_stone.png": "1b78ac42605410490744d5fc609c7e8d",
"assets/assets/battle_royale/ic_ape_stone_b.png": "1b78ac42605410490744d5fc609c7e8d",
"assets/assets/battle_royale/ic_battle_royal_logs.png": "c34cd07a5c86b77caee57a0ea839562f",
"assets/assets/battle_royale/ic_battle_royal_rank.png": "822c1c4f9e4f3cbe8d88a2a33346cbac",
"assets/assets/battle_royale/ic_evaded_fail.png": "fee1115ba6cfe9139ab0d1ad76564546",
"assets/assets/battle_royale/ic_evaded_success.png": "9a85976b50a1edce43b9a453de896ddd",
"assets/assets/battle_royale/ic_killer_appears.png": "9c767c1697e568d278b3933ef59344cb",
"assets/assets/battle_royale/ic_kill_others.png": "857758ea136781f9f46d918743eb11ef",
"assets/assets/battle_royale/ic_my_monkey.png": "f76893e5c53d8b9a0ffe25a34953269b",
"assets/assets/battle_royale/ic_royal_monkey.png": "f76893e5c53d8b9a0ffe25a34953269b",
"assets/assets/battle_royale/ic_scene_monkey.png": "22168703cefe090b32fc3ba39ae10ab4",
"assets/assets/battle_royale/killer/data.json": "94df8180a5e58a293d36de426844dd1c",
"assets/assets/battle_royale/killer/images/sek_0_0.png": "8977a3f2e183a84b25fce5a77da4a0c1",
"assets/assets/battle_royale/killer/images/sek_0_1.png": "3c7685e30d422cd4e75d5ab11fe7ebcd",
"assets/assets/battle_royale/killer/images/sek_0_10.png": "67c29e5c195151a200137e8b6fb7a10a",
"assets/assets/battle_royale/killer/images/sek_0_11.png": "bcd7045b0258ad8aca5211c54e211637",
"assets/assets/battle_royale/killer/images/sek_0_12.png": "aec56c3a50783e5d9344c7974af6e712",
"assets/assets/battle_royale/killer/images/sek_0_13.png": "2b5983ca4d1791e80e7375fa7dc2a935",
"assets/assets/battle_royale/killer/images/sek_0_14.png": "cddbe7596a4fc9567448b09095bb59c2",
"assets/assets/battle_royale/killer/images/sek_0_15.png": "3de369c8dcc1ae9454f2bb998b4e83bb",
"assets/assets/battle_royale/killer/images/sek_0_16.png": "37b5c5453265d1c7fc052036e8035de5",
"assets/assets/battle_royale/killer/images/sek_0_17.png": "28705f848d2fbb5e72c2fefc03ab775a",
"assets/assets/battle_royale/killer/images/sek_0_18.png": "dbd9daed54aabedc7f5fa3a137640d0e",
"assets/assets/battle_royale/killer/images/sek_0_19.png": "129d3d3b48b8e5ee721613e393761609",
"assets/assets/battle_royale/killer/images/sek_0_2.png": "e88de4a3c6e01a1354cd97ff54ef6634",
"assets/assets/battle_royale/killer/images/sek_0_20.png": "018320badee235c401f292d8c287c6f0",
"assets/assets/battle_royale/killer/images/sek_0_21.png": "9a6361bcae9749f47855055bc066a95e",
"assets/assets/battle_royale/killer/images/sek_0_22.png": "35d22a7a29ca050ed7c9b4621e89c3cd",
"assets/assets/battle_royale/killer/images/sek_0_23.png": "70fb341e53ed3f7b2e232fefa800c3c0",
"assets/assets/battle_royale/killer/images/sek_0_3.png": "70979c9192dac96ceff4662b738f0a7c",
"assets/assets/battle_royale/killer/images/sek_0_4.png": "684014cf470a78ab51b1574e01b6c66f",
"assets/assets/battle_royale/killer/images/sek_0_5.png": "b172833af076bb230edc6d14b9213c3b",
"assets/assets/battle_royale/killer/images/sek_0_6.png": "6455233e2cc491bffd1f9914f093cde0",
"assets/assets/battle_royale/killer/images/sek_0_7.png": "15c198e89c767b9e5c918769517c8f4c",
"assets/assets/battle_royale/killer/images/sek_0_8.png": "b250a2b6c665c551efc6a3a131c96056",
"assets/assets/battle_royale/killer/images/sek_0_9.png": "080a13f4946e9c9dd618e9fd43e5edbb",
"assets/assets/battle_royale/killer/images/seq_0_0.png": "7b82c524c25824e0b290b662e58fb938",
"assets/assets/battle_royale/killer/images/seq_0_1.png": "556d822098c55616791dcea76752ac8f",
"assets/assets/battle_royale/killer/images/seq_0_10.png": "0a71e31383b84c671c40d908a064da77",
"assets/assets/battle_royale/killer/images/seq_0_11.png": "c5d43ba7bf74ff6cbd9e5deb96719824",
"assets/assets/battle_royale/killer/images/seq_0_12.png": "999bd346bd4ebbfebbc7ab1ab8e47804",
"assets/assets/battle_royale/killer/images/seq_0_13.png": "13062f43410182ff75f952abc56e7fe8",
"assets/assets/battle_royale/killer/images/seq_0_14.png": "16a2dda94b2280c2d31b962b23fd7508",
"assets/assets/battle_royale/killer/images/seq_0_15.png": "46dc004de6c1a2de7833aa1be29e6443",
"assets/assets/battle_royale/killer/images/seq_0_16.png": "e66d35e7fb35d23245a3c8a3f0cf6e01",
"assets/assets/battle_royale/killer/images/seq_0_17.png": "af18479acb87dd2a285e2c99229086cc",
"assets/assets/battle_royale/killer/images/seq_0_18.png": "dcc3bba505a2864369e357cdb5e1bb54",
"assets/assets/battle_royale/killer/images/seq_0_19.png": "c440c21e13b400b457b6d3c2b03d4bcb",
"assets/assets/battle_royale/killer/images/seq_0_2.png": "be625bc27578d76ba8cb16fbfd1ec52a",
"assets/assets/battle_royale/killer/images/seq_0_20.png": "c77f13dcaa8c86fd6cd36c91e3dfbf73",
"assets/assets/battle_royale/killer/images/seq_0_21.png": "756dbe5e188d57179202ee045ca915aa",
"assets/assets/battle_royale/killer/images/seq_0_22.png": "26aef5e2c5c45c9ca81e8c2ad6de3ee7",
"assets/assets/battle_royale/killer/images/seq_0_23.png": "e8e5a24d4c70c896dac6fee809ddaa69",
"assets/assets/battle_royale/killer/images/seq_0_3.png": "9472509b580110b6c57a8e20c6b981b5",
"assets/assets/battle_royale/killer/images/seq_0_4.png": "aea6cbb813d7c18ed8698742667ece8a",
"assets/assets/battle_royale/killer/images/seq_0_5.png": "74f6cb003a2f76fd56fd1aebdad1405d",
"assets/assets/battle_royale/killer/images/seq_0_6.png": "0eec5ba735af8dc8fb65d0f948ab7019",
"assets/assets/battle_royale/killer/images/seq_0_7.png": "cb5cfda2e4c3b29af9a93223745d0c3a",
"assets/assets/battle_royale/killer/images/seq_0_8.png": "da73097d2249bde5a42d863de6beb36d",
"assets/assets/battle_royale/killer/images/seq_0_9.png": "c924eabeefb89c129b0bcf8025b13acb",
"assets/assets/battle_royale/music.png": "f4137b0483c53a06ae251c743e56578c",
"assets/assets/battle_royale/myMonkey/images/seq_0_0.png": "0edfd52e3767e18a4f6182cdd2330ea4",
"assets/assets/battle_royale/myMonkey/images/seq_0_1.png": "d3247ec337695f653526d68dd82f4400",
"assets/assets/battle_royale/myMonkey/images/seq_0_10.png": "da5c41d919def790dbd7158986789416",
"assets/assets/battle_royale/myMonkey/images/seq_0_11.png": "d3247ec337695f653526d68dd82f4400",
"assets/assets/battle_royale/myMonkey/images/seq_0_2.png": "da5c41d919def790dbd7158986789416",
"assets/assets/battle_royale/myMonkey/images/seq_0_3.png": "d869a455926aabdb56cb44e33681bb74",
"assets/assets/battle_royale/myMonkey/images/seq_0_4.png": "47c2c54f72baca35c1093b5d1e785835",
"assets/assets/battle_royale/myMonkey/images/seq_0_5.png": "180d043526a5fdba42e861944ec1d4a1",
"assets/assets/battle_royale/myMonkey/images/seq_0_6.png": "5646a1b2dc7b38bdec9d61436ce568c5",
"assets/assets/battle_royale/myMonkey/images/seq_0_7.png": "180d043526a5fdba42e861944ec1d4a1",
"assets/assets/battle_royale/myMonkey/images/seq_0_8.png": "47c2c54f72baca35c1093b5d1e785835",
"assets/assets/battle_royale/myMonkey/images/seq_0_9.png": "d869a455926aabdb56cb44e33681bb74",
"assets/assets/battle_royale/no_music.png": "5254b1e8f34587c800a930aad65659fc",
"assets/assets/battle_royale/otherMonkey/images/seq_0_0.png": "4f7b5edabf44b00d8586561b3df313b0",
"assets/assets/battle_royale/otherMonkey/images/seq_0_1.png": "b9b2a9550e452e391407a83328c50fe4",
"assets/assets/battle_royale/otherMonkey/images/seq_0_10.png": "f45e4776d60d76e4598aeeace51430ef",
"assets/assets/battle_royale/otherMonkey/images/seq_0_11.png": "b9b2a9550e452e391407a83328c50fe4",
"assets/assets/battle_royale/otherMonkey/images/seq_0_2.png": "f45e4776d60d76e4598aeeace51430ef",
"assets/assets/battle_royale/otherMonkey/images/seq_0_3.png": "df9d596085d7f3147a08c7a71aa751da",
"assets/assets/battle_royale/otherMonkey/images/seq_0_4.png": "1ed71cf402881583ba5db31cc1c18145",
"assets/assets/battle_royale/otherMonkey/images/seq_0_5.png": "68f6953ba33e15fdd5238563c763a925",
"assets/assets/battle_royale/otherMonkey/images/seq_0_6.png": "e2f027a7de4142275cbed0fe79ffa306",
"assets/assets/battle_royale/otherMonkey/images/seq_0_7.png": "68f6953ba33e15fdd5238563c763a925",
"assets/assets/battle_royale/otherMonkey/images/seq_0_8.png": "1ed71cf402881583ba5db31cc1c18145",
"assets/assets/battle_royale/otherMonkey/images/seq_0_9.png": "df9d596085d7f3147a08c7a71aa751da",
"assets/assets/battle_royale/refresh.gif": "f6d247c434948f286d6429cef80eafa5",
"assets/assets/battle_royale/room_tag.png": "bce92d39a25ca823d3e52e6262facfd7",
"assets/assets/battle_royale/room_text.png": "e96e72c9f0eb50962714c7a3594d4c3b",
"assets/assets/battle_royale/rule.png": "ac8eb2e2bc182010c49908a623ac4788",
"assets/assets/empty_bg.png": "29dca0739477d65fd8d613f53be4219c",
"assets/assets/fonts/MaterialIcons-Regular.ttf": "11eabca2251325cfc5589c9c6fb57b46",
"assets/assets/guide.png": "72487f55029199b28df41f6716dc230a",
"assets/assets/icon_home_usdt.png": "a992daf402d5a2f793ce0d4b28b4d5ce",
"assets/FontManifest.json": "63ff768433f7c68e5ce09ec6f39cbff0",
"assets/fonts/MaterialIcons-Regular.otf": "e86b674496e1fff148ead9dcad42dc1a",
"assets/NOTICES": "7d7d4a1b23bd2b72c2dd7225261de2e0",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "43a33f5a41e8c399a35812576c191c9c",
"assets/packages/wakelock_plus/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "59a12ab9d00ae8f8096fffc417b6e84f",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "09de7a94f301580a10784a2bebf592fd",
"/": "09de7a94f301580a10784a2bebf592fd",
"main.dart.js": "54912886838bbbe31fbfb2aa025c14ea",
"manifest.json": "e7a57b32a7968a32973e38105ba90849",
"version.json": "05150f36570551e6de65ccb4335d40b7"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
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
