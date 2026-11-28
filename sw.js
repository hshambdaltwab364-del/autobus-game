// أتوبيس الصحاب - Service Worker v64
const CACHE_NAME = 'autobus-v64';
const CORE = ['play.html','index.html'];
self.addEventListener('install', e=>{
  e.waitUntil(caches.open(CACHE_NAME).then(c=>c.addAll(CORE).catch(()=>{})).then(()=>self.skipWaiting()));
});
self.addEventListener('activate', e=>{
  e.waitUntil(caches.keys().then(keys=>Promise.all(keys.map(k=>k!==CACHE_NAME?caches.delete(k):Promise.resolve()))).then(()=>self.clients.claim()));
});
self.addEventListener('fetch', e=>{
  if(e.request.method!=='GET') return;
  e.respondWith(fetch(e.request).catch(()=>caches.match(e.request)));
});
self.addEventListener('push', e=>{
  let data={title:'📢 أتوبيس', body:'رسالة جديدة'};
  try{ data=JSON.parse(e.data.text()); }catch(err){ if(e.data) data.body=e.data.text(); }
  e.waitUntil(self.registration.showNotification(data.title||'📢 أتوبيس', {body:data.body||'رسالة جديدة', icon:'', tag:'autobus-v64'}));
});
self.addEventListener('notificationclick', e=>{
  e.notification.close();
  e.waitUntil(clients.openWindow('play.html'));
});
