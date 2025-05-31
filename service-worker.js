self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open("papercalc-cache").then((cache) => {
      return cache.addAll([
        "/",
        "/index.html",
        "/manifest-light.json",
        "/manifest-dark.json",
        "/icon.png"
      ]);
    })
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
