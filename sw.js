const CACHE='chessmaster-v1';
self.addEventListener('install',e=>{e.waitUntil(caches.open(CACHE).then(c=>c.addAll(['./','manifest.webmanifest','icon.svg'])))});
self.addEventListener('fetch',e=>{
      if(e.request.mode==='navigate'){
            e.respondWith(fetch(e.request).then(f=>{const cp=f.clone();caches.open(CACHE).then(c=>c.put(e.request,cp));return f;}).catch(()=>caches.match(e.request)));
                return;
      }
        e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request)));
});
      }
})