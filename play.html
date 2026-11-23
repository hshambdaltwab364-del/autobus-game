// sw.js - v63 - أتوبيس - التحديث الجديد
// الملف ده لازم يكون جنب play.html و index.html على نفس السيرفر
var CACHE_NAME = "autobus-v63";
var URLS_TO_CACHE = ["./", "./index.html", "./play.html", "./sw.js"];
var PLAY_URL = "https://hshambdaltwab364-del.github.io/autobus-game/play.html";

// تثبيت - خزن الملفات
self.addEventListener("install", function(event){
  event.waitUntil(
    caches.open(CACHE_NAME).then(function(cache){
      return cache.addAll(URLS_TO_CACHE).catch(function(){ return null; });
    }).then(function(){ return self.skipWaiting(); })
  );
});

// تفعيل - امسح الكاش القديم
self.addEventListener("activate", function(event){
  event.waitUntil(
    caches.keys().then(function(keys){
      return Promise.all(keys.map(function(k){
        if(k !== CACHE_NAME) return caches.delete(k);
      }));
    }).then(function(){ return self.clients.claim(); })
  );
});

// جلب - اشتغل أوفلاين لو مفيش نت
self.addEventListener("fetch", function(event){
  if(event.request.method !== "GET") return;
  event.respondWith(
    fetch(event.request).then(function(res){
      var copy = res.clone();
      if(res.status === 200 && event.request.url.indexOf("http") === 0){
        caches.open(CACHE_NAME).then(function(cache){ cache.put(event.request, copy); });
      }
      return res;
    }).catch(function(){
      return caches.match(event.request).then(function(cached){
        if(cached) return cached;
        if(event.request.mode === "navigate") return caches.match("./play.html");
      });
    })
  );
});

// إشعارات - زي اللي في الصورة بالظبط
self.addEventListener("push", function(event){
  var data = {};
  try{ data = event.data ? event.data.json() : {}; }catch(e){ data = {body: event.data ? event.data.text() : ""}; }
  var title = data.title || "🚌 أتوبيس - عندك جديد";
  var body = data.body || "افتح اللعبة وشوف الجديد";
  event.waitUntil(self.registration.showNotification(title, {body: body, tag: "autobus-v63", data: {url: PLAY_URL}}));
});

self.addEventListener("notificationclick", function(event){
  event.notification.close();
  var url = (event.notification.data && event.notification.data.url) || PLAY_URL;
  event.waitUntil(clients.matchAll({type:"window", includeUncontrolled:true}).then(function(list){
    for(var i=0;i<list.length;i++){ if(list[i].url.indexOf("autobus")!==-1 && "focus" in list[i]) return list[i].focus(); }
    if(clients.openWindow) return clients.openWindow(url);
  }));
});
