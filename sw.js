var C="survival-v11",F=["./","index.html","manifest.json","icon-192.png","icon-512.png","apple-touch-icon.png","banner.jpg","contenido.json"];
self.addEventListener("install",function(e){e.waitUntil(caches.open(C).then(function(c){return Promise.all(F.map(function(u){return c.add(new Request(u,{cache:"reload"})).catch(function(){})}))}).then(function(){return self.skipWaiting()}))});
self.addEventListener("activate",function(e){e.waitUntil(caches.keys().then(function(k){return Promise.all(k.filter(function(n){return n!==C}).map(function(n){return caches.delete(n)}))}).then(function(){return self.clients.claim()}))});
self.addEventListener("fetch",function(e){var r=e.request;if(r.method!=="GET")return;var u=new URL(r.url);if(u.origin!==location.origin)return;
e.respondWith(new Promise(function(res){var done=false,t=setTimeout(function(){if(!done)fb()},2500);
function fb(){if(done)return;caches.match(r,{ignoreSearch:true}).then(function(m){done=true;clearTimeout(t);res(m||(r.mode==="navigate"?caches.match("index.html"):Response.error()))})}
fetch(r).then(function(n){if(done)return;if(n&&n.ok){done=true;clearTimeout(t);if(!n.redirected){var k=n.clone();caches.open(C).then(function(c){c.put(r,k)})}res(n)}else fb()}).catch(fb)}))});
